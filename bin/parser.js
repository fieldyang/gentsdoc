"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 解析器
 */
class Parser {
    constructor() {
        //类集合
        this.classes = [];
        //函数集合
        this.functions = [];
    }
    parse(cfg) {
        let srcPath = cfg.src;
        let dstPath = cfg.dst;
        let baseUrl = cfg.baseUrl || '';
        let showPrivate = cfg.showPrivate || false;
        let fileSuffix = cfg.fileSuffix || '';
        const fsMdl = require('fs');
        const pathMdl = require('path');
        let tipfn;
        if (cfg.language === 'en') {
            tipfn = __dirname + '/locales/msg_en.json';
        }
        else {
            tipfn = __dirname + '/locales/msg_zh.json';
        }
        //提示
        let tips = require('json5').parse(fsMdl.readFileSync(tipfn, 'utf8'));
        this.handleDir(srcPath);
        if (!fsMdl.existsSync(srcPath)) {
            throw new Error('源路径不存在');
        }
        //删除重建dst目录
        if (fsMdl.existsSync(dstPath)) {
            fsMdl.rmdirSync(dstPath, { recursive: true });
        }
        fsMdl.mkdirSync(dstPath, { recursive: true });
        let writeStr; //待写串
        //json文件，构建标题和url
        let jsonObj = {
            funcs: [],
            classes: [],
            interfaces: []
        };
        //类名排序
        sortName(this.classes);
        //外部函数排序
        sortName(this.functions);
        //处理函数注释
        for (let i = 0; i < this.functions.length; i++) {
            let fObj = this.functions[i];
            if (this.handleAnnotation(fObj) === null) {
                this.functions.splice(i--, 1);
                continue;
            }
            jsonObj.funcs.push({
                title: fObj.name,
                url: baseUrl + fObj.name + fileSuffix
            });
        }
        //方法名属性名排序
        for (let i = 0; i < this.classes.length; i++) {
            let cObj = this.classes[i];
            //解析注释，如果返回为null，则表示不加入文档
            if (this.handleClassAnnotation(cObj) === null) {
                this.classes.splice(i--, 1);
                continue;
            }
            let obj = {
                title: cObj.name,
                url: baseUrl + cObj.name + fileSuffix
            };
            //接口和类分别存储
            if (cObj.type === 'interface') {
                jsonObj.interfaces.push(obj);
            }
            else {
                jsonObj.classes.push(obj);
            }
            //属性排序
            sortName(cObj.props);
            //方法排序
            sortName(cObj.methods);
        }
        //写json文件
        fsMdl.writeFileSync(pathMdl.resolve(dstPath, "data.json"), JSON.stringify(jsonObj));
        //写函数
        for (let p of this.functions) {
            writeStr = '';
            let fn = pathMdl.resolve(dstPath, p.name + '.md');
            //函数名
            let ms = p.name + '(';
            let selectableNum = 0;
            let pstr = ''; //参数串
            //参数串
            for (let pa of p.params) {
                if (!pa.need) {
                    pstr += '[';
                    selectableNum++;
                }
                if (pstr !== '' && pstr !== '[') {
                    pstr += ',';
                }
                pstr += pa.name;
            }
            for (let i = 0; i < selectableNum; i++) {
                pstr += ']';
            }
            ms += pstr + ')';
            //函数名
            addLine('# Function:' + ms);
            //开始于
            let since = p.annotation['since'] || cfg.defaultSince;
            if (since) {
                addLine('<font class="since">开始于:v' + since + '</font>');
            }
            delete p.annotation['since'];
            //async
            ms = undefined;
            if (p.async) {
                addLine('修饰符: <font class="modifier">async</font>');
            }
            //注释
            if (p.annotation) {
                addLine('## ' + tips.desc);
                for (let o in p.annotation) {
                    if (o === 'returns' || o === 'throws') {
                        continue;
                    }
                    if (o !== 'default') {
                        addLine('### ' + o);
                    }
                    addLine(p.annotation[o]);
                }
            }
            //参数
            if (p.params.length > 0) {
                addLine('## 参数');
                for (let pa of p.params) {
                    let pt = pa.type;
                    if (pt) {
                        pt = genLink(this.classes, pt, baseUrl, fileSuffix);
                    }
                    else {
                        pt = 'any';
                    }
                    pt = ' *&lt;' + pt + '&gt;* ';
                    addLine('+ ' + pa.name + pt + (pa.annotation || ''));
                }
                addLine('');
            }
            //返回值
            addLine('## ' + tips.returns);
            if (p.returns) {
                let msg = genLink(this.classes, p.returns, baseUrl, fileSuffix);
                addLine(msg);
                if (p.annotation['returns']) {
                    addLine(p.annotation['returns']);
                }
            }
            else {
                addLine('void');
            }
            //异常
            if (p.annotation['throws']) {
                addLine('## ' + tips.throws);
                addLine(p.annotation['throws']);
            }
            fsMdl.writeFileSync(fn, writeStr);
        }
        //写class
        for (let cObj of this.classes) {
            writeStr = '';
            let fn = pathMdl.resolve(dstPath, cObj.name + '.md');
            //类名
            addLine('# ' + (cObj.type === 'class' ? 'Class:' : 'Interface:') + cObj.name);
            //属性列表
            if (cObj.props.length > 0) {
                addLine('## ' + tips.props);
                for (let p of cObj.props) {
                    addLine('+ [' + p.name + '](#PROP_' + p.name + ')');
                }
                //加一个换行符
                addLine('');
            }
            //方法列表
            if (cObj.methods.length > 0) {
                addLine('## ' + tips.methods);
                for (let p of cObj.methods) {
                    addLine('+ [' + p.name + '](#METHOD_' + p.name + ')');
                }
                //加一个换行符
                addLine('');
            }
            //分割线
            addLine('---');
            //类描述
            addLine('## ' + tips.desc);
            //开始于
            let since = cObj.annotation['since'] || cfg.defaultSince;
            if (since) {
                addLine('<font class="since">' + tips.since + ':v' + since + '</font>');
            }
            for (let o in cObj.annotation) {
                if (o !== 'default') {
                    addLine('### ' + o);
                }
                addLine(cObj.annotation[o]);
            }
            //继承或实现接口
            if (cObj.extends) {
                addLine('### ' + cObj.extends.substr(0, 1).toUpperCase() + cObj.extends.substr(1) + ':');
                addLine(genLink(this.classes, cObj.superClass, baseUrl, fileSuffix));
            }
            //构造函数
            if (cObj.constructors.length > 0) {
                addLine('## ' + tips.constructor);
                for (let p of cObj.constructors) {
                    let ms = p.name + '(';
                    let selectableNum = 0;
                    let pstr = ''; //参数串
                    //参数串
                    for (let pa of p.params) {
                        if (!pa.need) {
                            pstr += '[';
                            selectableNum++;
                        }
                        if (pstr !== '' && pstr !== '[') {
                            pstr += ',';
                        }
                        pstr += pa.name;
                    }
                    for (let i = 0; i < selectableNum; i++) {
                        pstr += ']';
                    }
                    ms += pstr + ')';
                    addLine('### <a id="METHOD_' + p.name + '">' + ms + '</a>');
                    //参数
                    addLine('#### ' + tips.param);
                    for (let pa of p.params) {
                        let pt = pa.type;
                        if (pt) {
                            pt = genLink(this.classes, pt, baseUrl, fileSuffix);
                        }
                        else {
                            pt = 'any';
                        }
                        pt = ' *&lt;' + pt + '&gt;* ';
                        addLine('+ ' + pa.name + pt + (pa.annotation || ''));
                    }
                    //加一个换行符
                    addLine('');
                }
            }
            //属性
            if (cObj.props.length > 0) {
                //属性描述
                addLine('## ' + tips.props);
                for (let p of cObj.props) {
                    addLine('### <a id="PROP_' + p.name + '">' + p.name + '</a>');
                    //开始于
                    let since = p.annotation['since'] || cfg.defaultSince;
                    if (since) {
                        addLine('<font class="since">' + tips.since + ':v' + since + '</font>');
                    }
                    delete p.annotation['since'];
                    // public private static
                    let marr = [];
                    if (p.private && showPrivate || !p.private) {
                        marr.push(p.private ? 'private' : 'public');
                    }
                    if (p.static) {
                        marr.push('static');
                    }
                    if (marr.length > 0) {
                        addLine(tips.modifier + ': <font class="modifier">' + marr.join('  ') + '</font>');
                    }
                    for (let o in p.annotation) {
                        if (o !== 'default') {
                            addLine('#### ' + o);
                        }
                        addLine(p.annotation[o]);
                    }
                }
            }
            //方法
            if (cObj.methods.length > 0) {
                //方法描述
                addLine('## ' + tips.methods);
                for (let p of cObj.methods) {
                    let ms = p.name + '(';
                    let selectableNum = 0;
                    let pstr = ''; //参数串
                    //参数串
                    for (let pa of p.params) {
                        if (!pa.need) {
                            pstr += '[';
                            selectableNum++;
                        }
                        if (pstr !== '' && pstr !== '[') {
                            pstr += ',';
                        }
                        pstr += pa.name;
                    }
                    for (let i = 0; i < selectableNum; i++) {
                        pstr += ']';
                    }
                    ms += pstr + ')';
                    addLine('### <a id="METHOD_' + p.name + '">' + ms + '</a>');
                    //开始于
                    let since = p.annotation['since'] || cfg.defaultSince;
                    if (since) {
                        addLine('<font class="since">' + tips.since + ':v' + since + '</font>');
                    }
                    delete p.annotation['since'];
                    // public private static async
                    let marr = [];
                    if (p.private && showPrivate || !p.private) {
                        marr.push(p.private ? 'private' : 'public');
                    }
                    if (p.static) {
                        marr.push('static');
                    }
                    if (p.async) {
                        marr.push('async');
                    }
                    if (marr.length > 0) {
                        addLine(tips.modifier + ': <font class="modifier">' + marr.join('  ') + '</font>');
                    }
                    //注释
                    if (p.annotation) {
                        addLine('#### ' + tips.desc);
                        for (let o in p.annotation) {
                            if (o === 'returns' || o === 'throws') {
                                continue;
                            }
                            if (o !== 'default') {
                                addLine('##### ' + o);
                            }
                            addLine(p.annotation[o]);
                        }
                    }
                    //参数
                    if (p.params.length > 0) {
                        addLine('#### ' + tips.param);
                        for (let pa of p.params) {
                            let pt = pa.type;
                            if (pt) {
                                pt = genLink(this.classes, pt, baseUrl, fileSuffix);
                            }
                            else {
                                pt = 'any';
                            }
                            pt = ' *&lt;' + pt + '&gt;* ';
                            addLine('+ ' + pa.name + pt + (pa.annotation || ''));
                        }
                        addLine('');
                    }
                    //返回值
                    addLine('#### ' + tips.returns);
                    if (p.returns) {
                        let msg = genLink(this.classes, p.returns, dstPath, fileSuffix);
                        addLine(msg);
                        if (p.annotation['returns']) {
                            addLine(p.annotation['returns']);
                        }
                    }
                    else {
                        addLine('void');
                    }
                    //异常
                    if (p.annotation['throws']) {
                        addLine('#### ' + tips.throws);
                        addLine(p.annotation['throws']);
                    }
                }
            }
            fsMdl.writeFileSync(fn, writeStr);
        }
        /**
         * 创建类型链接
         * @param classes   全局class集合
         * @param type      类型
         * @param basePath  url基本路径
         * @param suffix    路径后缀
         */
        function genLink(classes, type, basePath, suffix) {
            let ind1 = type.indexOf('<');
            let ind2 = type.indexOf('>');
            let tp = type;
            if (ind1 !== -1 && ind2 !== -1) {
                tp = type.substr(ind1 + 1, ind2 - ind1 - 1);
            }
            for (let co of classes) {
                if (co.name === tp) {
                    let s = '[' + tp + '](' + basePath + tp + suffix + ')';
                    if (tp !== type) {
                        s = type.substr(0, ind1 + 1) + s + type.substr(ind2);
                    }
                    type = s;
                    break;
                }
            }
            //替换类型的<>
            type = type.replace(/\</g, '&lt;');
            type = type.replace(/\>/g, '&gt;');
            type = "<font class='datatype'>" + type + '</font>';
            return type;
        }
        /**
         * 追加行
         * @param value     新行
         */
        function addLine(value) {
            writeStr += value;
            let ch = value[0];
            //普通行需要加两个空格
            if (!'+-#'.includes(ch)) {
                writeStr += '  ';
            }
            writeStr += '\n';
        }
        /**
         * 数组排序
         * @param arr 待排序数组
         */
        function sortName(arr) {
            arr.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                else if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        }
    }
    /**
     * 处理目录结构
     * @param dirPath   目录路径
     * @returns         void
     */
    handleDir(dirPath) {
        const fsMdl = require('fs');
        const pathMdl = require('path');
        const dir = fsMdl.readdirSync(dirPath, { withFileTypes: true });
        for (const dirent of dir) {
            if (dirent.isDirectory()) {
                this.handleDir(pathMdl.resolve(dirPath, dirent.name));
            }
            else if (dirent.isFile()) {
                this.handleFile(pathMdl.resolve(dirPath, dirent.name));
            }
        }
    }
    /**
     * 处理单个文件
     * @param filePath  file路径
     * @returns         void
     */
    handleFile(filePath) {
        //存储所有类和接口
        let classes = [];
        const fsMdl = require('fs');
        //注释正则表达式
        const regNote = /\/\*\*[\S\s]+?\*\//;
        //类正则表达式
        const regClass = /^\s*(export\s*)?(default\s*)?\s*(class|interface)\s+\S+(\s+(extends|implements)\s+\S+)?\{?[\r\n]/;
        const regFunction = /^\s*(async\s*)?function\s+\S+\s*\([\s\S]*\)(:\s*\S+)?/;
        let fileStr = fsMdl.readFileSync(filePath, 'utf8');
        //需要设置class关闭或方法关闭
        for (;;) {
            let re = regNote.exec(fileStr);
            if (re === null) {
                break;
            }
            //截断注释
            fileStr = fileStr.substr(re.index + re[0].length);
            let r1 = regClass.exec(fileStr);
            //外部函数
            let r2 = regFunction.exec(fileStr);
            if (r1 !== null && r2 !== null) {
                if (r1.index < r2.index) {
                    r2 = null;
                }
                else {
                    r1 = null;
                }
            }
            if (r1 === null && r2 === null) {
                continue;
            }
            let block = this.findBlockCode(fileStr);
            let src = block[0];
            //截断代码
            if (block[1] > 0) {
                fileStr = fileStr.substr(block[1]);
            }
            if (r1 !== null) { //类
                let obj = this.handleClass(src);
                obj.annoStr = re[0].trim();
                this.classes.push(obj);
            }
            else if (r2 !== null) { //函数
                let obj = this.handleMethod(src);
                obj.annoStr = re[0].trim();
                this.functions.push(obj);
            }
        }
    }
    /**
     * 处理类
     */
    handleClass(srcStr) {
        //注释正则表达式
        const regNote = /\/\*\*[\S\s]+?\*\//;
        //方法正则表达式
        const regMethod = /^\s*(public|private)?\s*(static)?\s*(async)?\s*.*\([\s\S]*\)(:\s*\S+)?/;
        //属性正则表达式
        const regProp = /^\s*\S+(\s+\S+)*?\s*(=\s*\S+)?;?/;
        let clsArr = this.handleClassName(srcStr);
        let className = clsArr[1];
        let constructors = [];
        let methods = [];
        let props = [];
        //遍历处理属性和方法
        for (;;) {
            let re = regNote.exec(srcStr);
            if (re === null) {
                break;
            }
            srcStr = srcStr.substr(re.index + re[0].length + 1);
            //找到第一行字符开头的字符串
            let line = '';
            for (; srcStr !== '';) {
                line = this.getLine(srcStr);
                let len = line.length;
                line = line.trim();
                if (line !== '') {
                    break;
                }
                srcStr = srcStr.substr(len + 1);
            }
            if (line === '') {
                continue;
            }
            let rm = regMethod.exec(line);
            let rp = regProp.exec(line);
            if (rm !== null && rp !== null) {
                // method 中‘=’位置必须在'('后面
                let i1 = rm[0].indexOf('=');
                let i2 = rm[0].indexOf('(');
                if (i1 !== -1 && i2 !== -1 && i1 < i2) {
                    rm = null;
                }
                else {
                    if (rm.index > rp.index) {
                        rm = null;
                    }
                    else {
                        rp = null;
                    }
                }
            }
            //method处理
            if (rm !== null) {
                let r = this.findBlockCode(srcStr);
                let obj = this.handleMethod(r[0]);
                obj.annoStr = re[0].trim();
                if (obj.name === 'constructor') { //构造函数单独存放
                    constructors.push(obj);
                }
                else {
                    methods.push(obj);
                }
                if (r[1] > 0) {
                    srcStr = srcStr.substr(r[1]);
                }
            }
            else { //property处理
                let obj = this.handleProp(srcStr);
                obj.annoStr = re[0].trim();
                props.push(obj);
            }
        }
        //继承或实现关系参数
        let ext;
        let suCls;
        if (clsArr.length > 3) {
            ext = clsArr[2];
            suCls = clsArr[3];
        }
        //把类对象放入map
        return {
            name: className,
            type: clsArr[0],
            extends: ext,
            superClass: suCls,
            constructors: constructors,
            methods: methods,
            props: props,
            annotation: {}
        };
    }
    /**
     * 处理className
     * @param srcStr    源串
     * @returns         array [类/实例名,extends/implements,superclass/interface]
     */
    handleClassName(srcStr) {
        let reg = /^\s*(export\s*)?(default\s*)?\s*(class|interface)\s+\S+(\s+(extends|implements)\s+\S+)?[\r\n]/;
        let r = reg.exec(srcStr);
        let ret = [];
        if (r !== null) {
            let s = r[0];
            s = s.replace(/\s+/, ' ');
            let sa = s.split(' ');
            for (let i = 0; i < sa.length; i++) {
                if ((sa[i] === 'class' || sa[i] === 'interface') && i < sa.length - 1) { //类名
                    ret.push(sa[i]); //类或接口类型
                    let su = sa[++i];
                    let ind = su.indexOf('{');
                    if (ind !== -1) {
                        su = su.substr(0, ind);
                    }
                    ret.push(su); //类或接口名
                }
                else if (sa[i] === 'extends' || sa[i] === 'implements') { //有继承或实现
                    ret.push(sa[i]);
                    if (i < sa.length - 1) {
                        let su = sa[++i];
                        let ind = su.indexOf('{');
                        if (ind !== -1) {
                            su = su.substr(0, ind);
                        }
                        ret.push(su);
                        break;
                    }
                }
            }
            return ret;
        }
        return null;
    }
    /**
     * 处理方法
     * @param srcStr    源串
     * @param isInterf  是否是接口方法
     * @returns         {name:方法名,static:静态,params:[{name:参数名,type:类型,need:是否可选}]}
     */
    handleMethod(srcStr, isInterf) {
        let ind = srcStr.indexOf('(');
        if (ind === -1) {
            return null;
        }
        let isStatic = false;
        let isPrivate = false;
        let isAsync = false;
        //前半段
        let s1 = srcStr.substr(0, ind).trim();
        if (s1.indexOf('static ') !== -1) {
            isStatic = true;
        }
        if (s1.indexOf('private ') !== -1) {
            isPrivate = true;
        }
        if (s1.indexOf('async ') !== -1) {
            isAsync = true;
        }
        let sa = s1.split(' ');
        let name = sa[sa.length - 1];
        //参数
        let s2 = srcStr.substr(ind + 1);
        ind = s2.indexOf(')');
        let paramArr = [];
        let paramStr = s2.substr(0, ind).trim();
        if (paramStr !== '') {
            let pa = paramStr.split(',');
            for (let p of pa) {
                let pn;
                let pt;
                let need = false;
                p = p.trim();
                let pa1 = p.split(':');
                if (pa1.length > 1) { //
                    pn = pa1[0].trim();
                    pt = pa1[1].trim();
                }
                else {
                    pn = pa1[0];
                }
                let ind1 = pn.indexOf('?');
                if (ind1 !== -1) {
                    need = true;
                    pn = pn.substr(0, ind1).trim();
                }
                paramArr.push({
                    name: pn,
                    type: pt,
                    need: !need
                });
            }
        }
        //返回值
        let retStr = s2.substr(ind + 1);
        ind = retStr.indexOf(':');
        if (ind !== -1) {
            if (!isInterf) {
                let ind1 = retStr.indexOf('{');
                retStr = retStr.substr(ind + 1, ind1 - ind - 1);
            }
            else {
                let ind1 = retStr.indexOf(';');
                retStr = retStr.substr(ind + 1, ind1 - ind - 1);
            }
        }
        else {
            retStr = '';
        }
        return {
            name: name,
            returns: retStr,
            private: isPrivate,
            static: isStatic,
            async: isAsync,
            params: paramArr,
            annotation: {}
        };
    }
    /**
     * 处理属性
     * @param srcStr    源串
     * @param isInterf  是否是接口属性
     * @returns         {name:属性名,static:静态,private:私有,need:不可选,type:类型}
     */
    handleProp(srcStr) {
        let a = srcStr.split(':');
        let ind = srcStr.indexOf(';');
        let name;
        let type;
        let isStatic = false;
        let isPrivate = false;
        let isSelectable = false;
        if (a.length > 1) {
            name = a[0].trim();
            type = a[1].trim();
            if (ind !== -1) {
                type = type.substr(0, ind).trim();
                //处理 =
                let ind1 = type.indexOf('=');
                if (ind1 !== null) {
                    type = type.substr(0, ind1).trim();
                }
            }
        }
        else {
            if (ind !== -1) {
                name = srcStr.substr(0, ind).trim();
            }
        }
        //处理可选
        if ((ind = name.indexOf('?')) !== -1) {
            isSelectable = true;
            name = name.substr(0, ind);
        }
        if (name.indexOf('static ') !== -1) {
            isStatic = true;
        }
        if (name.indexOf('private ') !== -1) {
            isPrivate = true;
        }
        let sa = name.split(' ');
        name = sa[sa.length - 1];
        return {
            name: name,
            static: isStatic,
            private: isPrivate,
            need: !isSelectable,
            annotation: {}
        };
    }
    /**
     * 查找完整代码块
     * @param srcStr    源串
     * @returns         [完整代码块串,最后字符索引]
     */
    findBlockCode(srcStr) {
        let bracketCnt = 0;
        let noteChar;
        let stringChar;
        let regChar;
        let startBlock = false;
        for (let i = 0; i < srcStr.length; i++) {
            let ch = srcStr[i];
            let ch1 = srcStr[i + 1];
            //判断是否为注释中
            if (noteChar === '//') {
                if (ch === '\r' || ch === '\n') { //注释结束
                    noteChar = undefined;
                    continue;
                }
            }
            else if (noteChar === '/*') {
                if (ch === '*' && ch1 === '/') { //注释结束
                    noteChar = undefined;
                    i++;
                    continue;
                }
            }
            else if (stringChar) {
                if (ch === stringChar) { //字符串结束
                    stringChar = undefined;
                    continue;
                }
            }
            else if (regChar) { //判断正则表达式结束
                if (ch === ';' || ch === '\r' || ch === '\n') {
                    regChar = undefined;
                    continue;
                }
            }
            if (noteChar || stringChar || regChar) {
                continue;
            }
            if (ch === '/') {
                if (ch1 === '/') { //注释符号开始
                    noteChar = '//';
                }
                else if (ch1 === '*') { //注释符号开始 
                    noteChar = '/*';
                }
                else { //正则表达式
                    regChar = '/';
                    continue;
                }
                if (noteChar) {
                    i++;
                    continue;
                }
            }
            else if (ch === '`' || ch === '"' || ch === "'") { //字符串开始
                stringChar = ch;
                continue;
            }
            //计算{}数量，当括号数为0时表示代码块结束
            if (ch === '{') {
                startBlock = true;
                bracketCnt++;
            }
            else if (ch === '}') {
                bracketCnt--;
            }
            //括号数相抵，则返回代码
            if (startBlock && bracketCnt === 0) {
                return [srcStr.substr(0, i + 1).trim(), i + 1];
            }
        }
        return [srcStr.trim(), 0];
    }
    /**
     * 生成class annotation
     * @param srcStr
     */
    handleClassAnnotation(classObj) {
        if (this.handleAnnotation(classObj) === null) {
            return null;
        }
        //处理构造器
        for (let i = 0; i < classObj.constructors.length; i++) {
            let m = classObj.constructors[i];
            //如果不需要，则移除
            if (this.handleAnnotation(m) === null) {
                classObj.constructors.splice(i--, 1);
            }
        }
        //处理方法
        for (let i = 0; i < classObj.methods.length; i++) {
            let m = classObj.methods[i];
            //如果不需要，则移除
            if (this.handleAnnotation(m) === null) {
                classObj.methods.splice(i--, 1);
            }
        }
        //处理属性
        for (let i = 0; i < classObj.props.length; i++) {
            let p = classObj.props[i];
            //如果不需要，则移除
            if (this.handleAnnotation(p) === null) {
                classObj.props.splice(i--, 1);
            }
        }
    }
    /**
     * 处理注释
     * @param srcStr 源注释串
     */
    handleAnnotation(annotationObj) {
        let srcStr = annotationObj.annoStr;
        //删除注释串
        delete annotationObj.annoStr;
        let noteStr = '';
        let lineNo = 0;
        let noteTag = ''; //标注名
        let codeStart = false; //是否为代码
        //去掉两端不可见字符
        srcStr = srcStr.trim();
        for (; srcStr !== ''; lineNo++) {
            let line = this.getLine(srcStr);
            if (!line) {
                break;
            }
            //截断字符串
            srcStr = srcStr.substr(line.length + 1);
            //开始
            if (!codeStart) {
                if (line.startsWith('/**')) {
                    line = line.substr(3).trim();
                }
                else if (/.*(\*)?\/$/.test(line)) { //结尾
                    line = line.substr(0, line.length - 2).trim();
                }
            }
            //去掉line的左边第一个*
            line = line.replace(/^\s*\*/, '');
            //处理code
            if (!codeStart) {
                line = line.trim();
                if (line.startsWith('```')) { //代码开始
                    codeStart = true;
                }
            }
            else {
                //代码结束
                if (line.indexOf('```') !== -1) {
                    line = line.trim();
                    if (line === '```') {
                        codeStart = false;
                    }
                }
            }
            if (line === '') {
                continue;
            }
            if (line.startsWith('@')) {
                //结束当前noteTag
                if (finishOne(annotationObj, noteTag, noteStr) === null) {
                    return null;
                }
                noteStr = '';
                let arr = line.split(' ');
                noteTag = arr[0].substr(1);
                //去掉tag长度
                line = line.substr(noteTag.length + 2).trim();
            }
            if (line !== '') {
                //markdown 换行需要加两个空格，最后一行不需要换行符
                if (noteStr !== '') {
                    noteStr += '  \n';
                }
                noteStr += line;
            }
        }
        //最后一个
        if (noteStr !== '') {
            if (finishOne(annotationObj, noteTag, noteStr) === null) {
                return null;
            }
            noteStr = '';
        }
        /**
         * 完成一组注释
         */
        function finishOne(obj, tag, str) {
            //存在note标签
            if (noteTag) {
                if (Annotation[noteTag] !== undefined) { //标签处理方法被
                    Annotation[noteTag](obj, str);
                }
                else { //标签处理方法没有定义
                    obj.annotation[tag] = str;
                }
            }
            else {
                obj.annotation['default'] = noteStr;
            }
        }
    }
    /**
     * 获取一行
     * @param srcStr
     */
    getLine(srcStr) {
        for (let i = 0; i < srcStr.length; i++) {
            let ch = srcStr[i];
            if (ch === '\r' || ch === '\n') {
                return srcStr.substr(0, i);
            }
        }
        return srcStr;
    }
}
exports.Parser = Parser;
/**
 * 注释方法
 * @remarks
 * 针对不同注解进行处理
 */
let Annotation = {
    /**
     * 参数注释
     * @param item      方法或函数对象
     * @param noteStr   注释内容
     */
    param: function (item, noteStr) {
        let ind = noteStr.indexOf(' ');
        //取出参数名
        let paramName;
        if (ind !== -1) {
            paramName = noteStr.substr(0, ind);
        }
        else {
            paramName = noteStr;
        }
        //截断noteStr
        noteStr = noteStr.substr(paramName.length + 1);
        let params = item.params;
        for (let i = 0; i < params.length; i++) {
            if (params[i].name === paramName) {
                params[i].annotation = noteStr;
                return;
            }
        }
    },
    /**
     * 返回注释
     * @param item 方法或函数对象
     * @param noteStr   注释内容
     */
    returns: function (item, noteStr) {
        item.annotation['returns'] = noteStr;
    },
    /**
     * 抛出异常注释
     * @param item 方法或函数对象
     * @param noteStr   注释内容
     */
    throws: function (item, noteStr) {
        item.annotation['throws'] = noteStr;
    },
    /**
     * 整段注释不加入文档
     * @param item      注释对象
     * @param noteStr   注释串
     */
    exclude: function (item, noteStr) {
        return null;
    },
    /**
     * 该条注释不加入文档
     * @param item      注释对象
     * @param noteStr   注释串
     */
    excludeone: function (item, noteStr) {
    }
};
//# sourceMappingURL=parser.js.map