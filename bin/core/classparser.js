"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassParser = void 0;
const baseparser_1 = require("./baseparser");
const util_1 = require("./util");
class ClassParser extends baseparser_1.default {
    constructor() {
        super(...arguments);
        this.regExp = /^\s*(export\s*)?(default\s*)?\s*(class|interface)\s+\S+(\s+(extends|implements)\s+\S+)?\{?/;
    }
    /**
     * 解析
     * @param srcStr    源串
     * @param annoStr   注释串
     */
    parse(srcStr, annoStr) {
        //方法正则表达式
        const regMethod = /^\s*(public|private\s+)?\s*(static\s+)?\s*(async\s+)?\s*\S+\s*\(.*\)(:\s*\S+)?/;
        //属性正则表达式
        const regProp = /^\s*(public|private\s+)?(static\s+)?\s*\S+(:?\s*\S+)?(\=\s*\S+)?;?/;
        let clsArr = this.handleClassName(srcStr);
        let className = clsArr[1];
        let constructors = [];
        let methods = [];
        let props = [];
        //遍历处理属性和方法
        for (;;) {
            let re = util_1.Util.regNote.exec(srcStr);
            if (re === null) {
                break;
            }
            srcStr = srcStr.substr(re.index + re[0].length + 1);
            //找到第一行字符开头的字符串
            let line = '';
            for (; srcStr !== '';) {
                line = util_1.Util.getLine(srcStr);
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
                let r = util_1.Util.findBlockCode(srcStr);
                let obj = this.handleMethod(r[0]);
                obj.annoStr = re[0].trim();
                util_1.Util.handleAnnotation(obj);
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
            else if (rp !== null) { //property处理
                let obj = this.handleProp(line);
                obj.annoStr = re[0].trim();
                util_1.Util.handleAnnotation(obj);
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
        util_1.Util.sortName(methods);
        util_1.Util.sortName(props);
        //把类对象放入map
        let rObj = {
            name: className,
            type: 'class',
            clsType: clsArr[0],
            extends: ext,
            superClass: suCls,
            constructors: constructors,
            methods: methods,
            props: props,
            annoStr: annoStr,
            annotation: {}
        };
        util_1.Util.handleAnnotation(rObj);
        return rObj;
    }
    /**
     * 写class
     * @param cObj      class obj
     * @param config    默认配置项
     */
    write(cObj) {
        const pathMdl = require('path');
        const fsMdl = require('fs');
        let writeStr = '';
        let dstPath = util_1.Util.wholeConfig.dst;
        let showPrivate = util_1.Util.wholeConfig.showPrivate || false;
        let className = cObj.name;
        let fn = pathMdl.resolve(dstPath, className + '.md');
        //类名
        writeStr = util_1.Util.addLine(writeStr, '# ' + (cObj.clsType === 'class' ? 'Class ' : 'Interface ') + className);
        //属性列表
        if (cObj.props.length > 0) {
            writeStr = util_1.Util.addLine(writeStr, '## ' + util_1.Util.tips.proplist);
            for (let p of cObj.props) {
                writeStr = util_1.Util.addLine(writeStr, '+ [' + p.name + '](#PROP_' + className + '_' + p.name + ')');
            }
            //加一个换行符
            writeStr = util_1.Util.addLine(writeStr, '');
        }
        //方法列表
        if (cObj.methods.length > 0) {
            writeStr = util_1.Util.addLine(writeStr, '## ' + util_1.Util.tips.methodlist);
            for (let p of cObj.methods) {
                writeStr = util_1.Util.addLine(writeStr, '+ [' + p.name + '](#METHOD_' + className + '_' + p.name + ')');
            }
            //加一个换行符
            writeStr = util_1.Util.addLine(writeStr, '');
        }
        //分割线,直接转换成html时不需要
        if (!util_1.Util.wholeConfig.html) {
            writeStr = util_1.Util.addLine(writeStr, '---');
        }
        //类描述
        writeStr = util_1.Util.addLine(writeStr, '## ' + util_1.Util.tips.desc);
        this.handleSinceAndDeprecated(cObj, writeStr);
        for (let o in cObj.annotation) {
            if (o !== 'default') {
                writeStr = util_1.Util.addLine(writeStr, '### ' + o);
            }
            writeStr = util_1.Util.addLine(writeStr, cObj.annotation[o]);
        }
        //继承或实现接口
        if (cObj.extends) {
            writeStr = util_1.Util.addLine(writeStr, '### ' + cObj.extends);
            writeStr = util_1.Util.addLine(writeStr, util_1.Util.genLink(cObj.superClass));
        }
        //构造函数
        if (cObj.constructors.length > 0) {
            writeStr = util_1.Util.addLine(writeStr, '## ' + util_1.Util.tips.constructor);
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
                writeStr = util_1.Util.addLine(writeStr, '### <a id="METHOD_' + className + '_' + p.name + '">' + ms + '</a>');
                //参数
                writeStr = util_1.Util.addLine(writeStr, '#### ' + util_1.Util.tips.param);
                for (let pa of p.params) {
                    let pt = pa.type;
                    if (pt) {
                        pt = util_1.Util.genLink(pt);
                    }
                    else {
                        pt = 'any';
                    }
                    pt = ' *&lt;' + pt + '&gt;* ';
                    writeStr = util_1.Util.addLine(writeStr, '+ ' + pa.name + pt + (pa.annotation || ''));
                }
                //加一个换行符
                writeStr = util_1.Util.addLine(writeStr, '');
            }
        }
        //属性
        if (cObj.props.length > 0) {
            //属性描述
            writeStr = util_1.Util.addLine(writeStr, '## ' + util_1.Util.tips.props);
            for (let p of cObj.props) {
                writeStr = util_1.Util.addLine(writeStr, '### <font id="PROP_' + className + '_' + p.name + '">' + p.name + '</font>');
                this.handleSinceAndDeprecated(cObj, writeStr);
                //描述
                for (let o in p.annotation) {
                    if (o !== 'default') {
                        writeStr = util_1.Util.addLine(writeStr, '#### ' + o);
                    }
                    writeStr = util_1.Util.addLine(writeStr, p.annotation[o]);
                }
                // public private static
                let marr = [];
                if (p.private && showPrivate || !p.private) {
                    marr.push(p.private ? 'private' : 'public');
                }
                if (p.static) {
                    marr.push('static');
                }
                if (marr.length > 0) {
                    writeStr = util_1.Util.addLine(writeStr, '#### ' + util_1.Util.tips.modifier);
                    writeStr = util_1.Util.addLine(writeStr, '<font class="modifier">' + marr.join('  ') + '</font>');
                }
                if (p.type) {
                    writeStr = util_1.Util.addLine(writeStr, '#### ' + util_1.Util.tips.datatype);
                    let pt = p.type;
                    if (pt) {
                        pt = util_1.Util.genLink(pt);
                    }
                    else {
                        pt = 'any';
                    }
                    writeStr = util_1.Util.addLine(writeStr, pt);
                }
                if (p.value) {
                    writeStr = util_1.Util.addLine(writeStr, '#### ' + util_1.Util.tips.initvalue);
                    writeStr = util_1.Util.addLine(writeStr, p.value);
                }
            }
        }
        //方法
        if (cObj.methods.length > 0) {
            //方法描述
            writeStr = util_1.Util.addLine(writeStr, '## ' + util_1.Util.tips.methods);
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
                writeStr = util_1.Util.addLine(writeStr, '### <font id="METHOD_' + className + '_' + p.name + '">' + ms + '</font>');
                //处理since和deprecated
                this.handleSinceAndDeprecated(cObj, writeStr);
                // public private static async
                //注释
                if (p.annotation) {
                    writeStr = util_1.Util.addLine(writeStr, '#### ' + util_1.Util.tips.desc);
                    for (let o in p.annotation) {
                        if (o === 'returns' || o === 'throws') {
                            continue;
                        }
                        if (o !== 'default') {
                            writeStr = util_1.Util.addLine(writeStr, '##### ' + o);
                        }
                        writeStr = util_1.Util.addLine(writeStr, p.annotation[o]);
                    }
                }
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
                    writeStr = util_1.Util.addLine(writeStr, '#### ' + util_1.Util.tips.modifier);
                    writeStr = util_1.Util.addLine(writeStr, '<font class="modifier">' + marr.join('  ') + '</font>');
                }
                //参数
                if (p.params.length > 0) {
                    writeStr = util_1.Util.addLine(writeStr, '#### ' + util_1.Util.tips.param);
                    for (let pa of p.params) {
                        let pt = pa.type;
                        if (pt) {
                            pt = util_1.Util.genLink(pt);
                        }
                        else {
                            pt = 'any';
                        }
                        pt = ' *&lt;' + pt + '&gt;* ';
                        writeStr = util_1.Util.addLine(writeStr, '+ ' + pa.name + pt + (pa.annotation || ''));
                    }
                    writeStr = util_1.Util.addLine(writeStr, '');
                }
                //返回值
                writeStr = util_1.Util.addLine(writeStr, '#### ' + util_1.Util.tips.returns);
                if (p.returns) {
                    let msg = util_1.Util.genLink(p.returns);
                    writeStr = util_1.Util.addLine(writeStr, msg);
                    if (p.annotation['returns']) {
                        writeStr = util_1.Util.addLine(writeStr, p.annotation['returns']);
                    }
                }
                else {
                    writeStr = util_1.Util.addLine(writeStr, 'void');
                }
                //异常
                if (p.annotation['throws']) {
                    writeStr = util_1.Util.addLine(writeStr, '#### ' + util_1.Util.tips.throws);
                    writeStr = util_1.Util.addLine(writeStr, p.annotation['throws']);
                }
            }
        }
        fsMdl.writeFileSync(fn, writeStr);
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
     * @returns         {name:属性名,static:静态,private:私有,need:不可选,type:类型}
     */
    handleProp(srcStr) {
        //去掉最后一个;
        let ind = srcStr.indexOf(';');
        if (ind === srcStr.length - 1) {
            srcStr = srcStr.substr(0, srcStr.length - 1);
        }
        let a = srcStr.split(':');
        let name;
        let type;
        let value;
        let isStatic = false;
        let isPrivate = false;
        let isSelectable = false;
        name = a[0].trim();
        if (a.length > 1) {
            type = a[1].trim();
        }
        //处理 =
        if ((ind = name.indexOf('=')) !== -1) {
            value = name.substr(ind + 1).trim();
            name = name.substr(0, ind).trim();
        }
        if (type) {
            if ((ind = type.indexOf('=')) !== -1) {
                value = type.substr(ind + 1).trim();
                type = type.substr(0, ind).trim();
            }
        }
        //处理可选
        if ((ind = name.indexOf('?')) !== -1) {
            isSelectable = true;
            name = name.substr(0, ind).trim();
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
            type: type,
            value: value,
            annotation: {}
        };
    }
    /**
     * 处理className
     * @param srcStr    源串
     * @returns         array [类/实例名,extends/implements,superclass/interface]
     */
    handleClassName(srcStr) {
        let r = this.regExp.exec(srcStr);
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
}
exports.ClassParser = ClassParser;
//# sourceMappingURL=classparser.js.map