import { TransactionManager, InsertQueryBuilder } from "typeorm";

/**
 * class 对象
 */
interface ClassObj{
    name:string;                //类或接口名
    type?:string;               //类型
    extends?:string;            //extends 或 implements
    superClass?:string;         //继承的类或实现的接口
    methods:Array<MethodObj>;   //方法集合
    props:Array<PropObj>;       //属性集合
    annotation?:any;            //注释 字符串或对象
}

/**
 * 属性对象
 */
interface PropObj{
    name:string;
    private?:boolean;
    static?:boolean;
    need?:boolean;
    annotation?:string;
}

/**
 * 方法对象
 */
interface MethodObj{
    name:string;
    private?:boolean;
    static?:boolean;
    returns?:string;
    throws?:string;
    need?:boolean;
    annotation?:string;
    params:Array<ParamObj>;
}

/**
 * 参数对象
 */
interface ParamObj{
    name:string;
    type?:string;
    need?:boolean;
    annotation?:string;
}

/**
 * 解析器
 */
class Parser{
    classes:Array<ClassObj> = [];
    public parse(srcPath:string,dstPath:string,baseUrl:string){
        const fsMdl = require('fs');
        const pathMdl = require('path');
        this.handleDir(srcPath);
        if(!fsMdl.existsSync(srcPath)){
            throw new Error('源路径不存在');
        }
        if(!fsMdl.existsSync(dstPath)){
            fsMdl.mkdirSync(dstPath,{recursive:true});
        }
        //写文件
        let cObj:ClassObj;
        let writeStr:string;
        
        //类名和方法名属性名排序
        for(cObj of this.classes){
            cObj.props.sort((a:PropObj,b:PropObj)=>{
                if(a.name < b.name){
                    return -1;
                }else if(a.name > b.name){
                    return 1;
                }
                return 0;
            });

            cObj.methods.sort((a:PropObj,b:PropObj)=>{
                if(a.name < b.name){
                    return -1;
                }else if(a.name > b.name){
                    return 1;
                }
                return 0;
            });
        }

        this.classes.sort((a:PropObj,b:PropObj)=>{
            if(a.name < b.name){
                return -1;
            }else if(a.name > b.name){
                return 1;
            }
            return 0;
        });
        
        for(cObj of this.classes){
            writeStr = '';
            //解析注释
            this.handleClassAnnotation(cObj);
            let fn = pathMdl.resolve(dstPath,cObj.name + '.md');
            //类名
            addLine('# ' + (cObj.type==='class'?'Class:':'Interface:') + cObj.name);
            
            //属性列表
            if(cObj.props.length>0){
                writeStr += '## 属性\n';
                for(let p of cObj.props){
                    writeStr += '+ [' + p.name + '](#PROP_' + p.name + ')' + '\n';
                }
            }
            
            //方法列表
            if(cObj.methods.length>0){
                writeStr += '## 方法\n';
                for(let p of cObj.methods){
                    writeStr += '+ [' + p.name + '](#METHOD_' + p.name + ')'+ '\n';
                }
            }

            //分割线
            addLine('---');

            //类描述
            addLine('## 描述\n');
            //继承或实现接口
            if(cObj.extends){
                addLine('***'+ cObj.extends +': ' + genLink(this.classes,cObj.superClass,baseUrl) + '***');
            }
            for(let o in cObj.annotation){
                addLine('### ' + o);
                addLine(cObj.annotation[o]);
            }
            
            if(cObj.props.length>0){
                //属性描述
                addLine('## 属性');
                for(let p of cObj.props){
                    addLine('### <a id="PROP_' + p.name + '">' + p.name + '</a>');
                    // public private static
                    let ms:string = '***' + (p.private?'private':'public');
                    if(p.static){
                        ms += ' &  static';
                    }
                    ms += '***';
                    addLine(ms);
                    addLine(p.annotation);
                }
            }

            if(cObj.methods.length>0){
                //方法描述
                addLine('## 方法');
                for(let p of cObj.methods){
                    let ms = p.name + '(';
                    let a = [];
                    let selectableNum = 0;
                    let pstr = ''; //参数串
                    //参数串
                    for(let pa of p.params){
                        if(!pa.need){
                            pstr += '[';
                            selectableNum++;
                        }
                        if(pstr !== '' && pstr!=='['){
                            pstr += ','
                        }
                        pstr += pa.name;
                    }
                    for(let i=0;i<selectableNum;i++){
                        pstr += ']';
                    }
                    ms += pstr + ')';

                    addLine('### <a id="METHOD_' + p.name + '">' + ms + '</a>');
                    // public private static
                    ms = '***' + (p.private?'private':'public');
                    if(p.static){
                        ms += ' &  static';
                    }
                    ms += '***';
                    addLine(ms);

                    //注释
                    if(p.annotation){
                        addLine('#### 描述');
                        addLine(p.annotation);
                    }
                    
                    //参数
                    addLine('#### 参数');
                    for(let pa of p.params){
                        let pt = pa.type;
                        if(pt){
                            pt = genLink(this.classes,pt,baseUrl);
                        }else{
                            pt = 'any';
                        }
                        pt = ' *&lt;' + pt + '&gt;* ';
                        addLine('+ ' + pa.name + pt + (pa.annotation||''));
                    }

                    //返回值
                    addLine('#### 返回值');
                    if(p.returns){
                        addLine(p.returns);    
                    }else{
                        addLine('void');
                    }

                    //异常
                    if(p.throws){
                        addLine('#### 异常');
                        addLine(p.throws);
                    }
                }
            }

            fsMdl.writeFileSync(fn,writeStr);

            /**
             * 创建类型链接
             * @param classes   全局class集合
             * @param type      类型
             * @param basePath  url基本路径
             */
            function genLink(classes:Array<ClassObj>,type:string,basePath:string):string{
                let ind1:number = type.indexOf('<');
                let ind2:number = type.indexOf('>');
                let tp:string = type;
                if(ind1 !== -1 && ind2 !== -1){
                    tp = type.substr(ind1+1,ind2-ind1-1);
                }
                for(let co of classes){
                    if(co.name === tp){
                        let s:string = '[' + tp + '](#' + basePath + tp + ')';
                        if(tp !== type){
                            s = type.substr(0,ind1) + s + type.substr(ind2)
                        }
                        return s;
                    }
                }
                return type;
            }
        }

        /**
         * 追加行
         * @param value     新行
         */
        function addLine(value){
            writeStr += value + '   \n';
        }
    }

    
    /**
     * 处理目录结构
     * @param dirPath   目录路径 
     * @returns         void
     */
    public handleDir(dirPath:string):void{
        const fsMdl = require('fs');
        const pathMdl = require('path');
        const dir = fsMdl.readdirSync(dirPath,{withFileTypes:true});
        for (const dirent of dir) {
            if(dirent.isDirectory()){
                this.handleDir(pathMdl.resolve(dirPath,dirent.name));
            }else if(dirent.isFile()){
                this.handleFile(pathMdl.resolve(dirPath,dirent.name));
            }            
        }
    }

    /**
     * 处理单个文件
     * @param filePath  file路径
     * @returns         void
     */
    public handleFile(filePath:string):void{
        //存储所有类和接口
        let classes:Array<object> = [];
        const fsMdl = require('fs');
        //注释正则表达式
        const regNote:RegExp = /\/\*\*[\S\s]+?\*\//;
        //类正则表达式
        const regClass = /^\s*(class|interface)\s+\S+\s*\{?/;
        let fileStr:string = fsMdl.readFileSync(filePath,'utf8');
        //需要设置class关闭或方法关闭
        for(;;){
            let re=regNote.exec(fileStr);
            if(re === null){
                break;
            }
            
            fileStr = fileStr.substr(re.index + re[0].length);
            let r1 = regClass.exec(fileStr);
            
            if(r1 !== null){
                let r = this.findBlockCode(fileStr);
                let src:string = r[0];
                //截断fileStr
                if(r[1]>0){
                    fileStr = fileStr.substr(r[1]);
                }
                
                let obj:ClassObj=this.handleClass(src);
                obj.annotation = re[0].trim();
                this.classes.push(obj);
            }
        }
    }

    
    /**
     * 处理类
     */
    handleClass(srcStr:string):ClassObj{
        //注释正则表达式
        const regNote:RegExp = /\/\*\*[\S\s]+?\*\//;
        //方法正则表达式
        const regMethod:RegExp = /^\s*(public|private)?(static)?.*\([\s\S]*\)(:\S+)?\s?/;
        //属性正则表达式
        const regProp:RegExp = /^\s*\S+(\s+\S+)*?\s*[\n\r]/;
        let clsArr:string[] = this.handleClassName(srcStr);
        let className = clsArr[1];
        let methods:MethodObj[] = [];
        let props:PropObj[]=[];
        
        //遍历处理属性和方法
        for(;;){
            let re = regNote.exec(srcStr);
            if(re === null){
                break;
            }
            srcStr = srcStr.substr(re.index + re[0].length+1);
            let rm = regMethod.exec(srcStr);
            let rp = regProp.exec(srcStr);
            
            if(rm !== null && rp !== null){
                if(rm.index>rp.index){
                    rm = null;
                }else{
                    rp = null;
                }
            }

            //method处理
            if(rm !== null){
                let r = this.findBlockCode(srcStr);
                let obj:MethodObj = this.handleMethod(r[0]);
                obj.annotation = re[0].trim();
                methods.push(obj);
                if(r[1]>0){
                    srcStr = srcStr.substr(r[1]);
                }
            }else{ //property处理
                let obj:PropObj = this.handleProp(srcStr);
                obj.annotation = re[0].trim();
                props.push(obj);
            }
        }
        
        //继承或实现关系参数
        let ext:string;
        let suCls:string;
        if(clsArr.length>3){
            ext = clsArr[2];
            suCls = clsArr[3];
        }
        //把类对象放入map
        return{
            name:className,
            type:clsArr[0],
            extends:ext,
            superClass:suCls,
            methods:methods,
            props:props
        }
    }

    /**
     * 处理className
     * @param srcStr    源串
     * @returns         array [类/实例名,extends/implements,superclass/interface]
     */
    handleClassName(srcStr:string):string[]{
        let reg = /^\s*(class|interface)\s+\S+(\s+extends\s+\S+)?/;
        let r = reg.exec(srcStr);
        let ret:string[] = [];
        if(r!==null){
            let s:string = r[0];
            s = s.replace(/\s+/,' ');
            let sa:string[] = s.split(' ');            
            for(let i=0;i<sa.length;i++){
                if((sa[i] === 'class'||sa[i]==='interface') && i<sa.length-1){ //类名
                    ret.push(sa[i]);  //类或接口类型
                    let su:string = sa[++i];
                    let ind = su.indexOf('{');
                    if(ind !== -1){
                        su = su.substr(0,ind);
                    }
                    ret.push(su);//类或接口名
                }else if(sa[i] === 'extends' || sa[i] === 'implements'){  //有继承或实现
                    ret.push(sa[i]);
                    if(i<sa.length-1){
                        let su = sa[++i];
                        let ind = su.indexOf('{');
                        if(ind !== -1){
                            su = su.substr(0,ind);
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
    handleMethod(srcStr:string,isInterf?:boolean):MethodObj{
        let ind = srcStr.indexOf('(');
        if(ind === -1){
            return null;
        }
        let isStatic:boolean = false;
        let isPrivate:boolean = false;
        //前半段
        let s1:string = srcStr.substr(0,ind).trim();
        if(s1.indexOf('static ') !== -1){
            isStatic = true;
        }
        
        if(s1.indexOf('private ') !== -1){
            isPrivate = true;
        }

        let sa:string[] = s1.split(' ');
        let name:string = sa[sa.length-1];

        //参数
        let s2 = srcStr.substr(ind+1);
        ind = s2.indexOf(')');
        let paramArr:ParamObj[] = [];
        let paramStr = s2.substr(0,ind).trim();
        if(paramStr !== ''){
            let pa = paramStr.split(',');
            for(let p of pa){
                let pn:string;
                let pt:string;
                let need:boolean = false;
                p = p.trim();
                let pa1:string[] = p.split(':');
                if(pa1.length>1){ //
                    pn = pa1[0].trim();
                    pt = pa1[1].trim();    
                }else{
                    pn = pa1[0];
                }

                let ind1 = pn.indexOf('?');
                if(ind1 !== -1){
                    need = true;
                    pn = pn.substr(0,ind1).trim();
                }
                
                paramArr.push({
                    name:pn,
                    type:pt,
                    need:!need
                });
            }
        }

        //返回值
        let retStr = s2.substr(ind+1);
        ind = retStr.indexOf(':');
        if(ind !== -1){
            if(!isInterf){
                let ind1 = retStr.indexOf('{');
                retStr = retStr.substr(ind+1,ind1-ind-1);
            }else{
                let ind1 = retStr.indexOf(';');
                retStr = retStr.substr(ind+1,ind1-ind-1);
            }
        }else{
            retStr = '';
        }

        return{
            name:name,
            private:isPrivate,
            static:isStatic,
            params:paramArr
        }
    }

    /**
     * 处理属性
     * @param srcStr    源串
     * @param isInterf  是否是接口属性
     * @returns         {name:属性名,static:静态,private:私有,need:不可选,type:类型} 
     */
    handleProp(srcStr:string,isInterf?:boolean):PropObj{
        let a = srcStr.split(':');
        let ind = srcStr.indexOf(';');
        let name:string;
        let type:string;
        let isStatic:boolean = false;
        let isPrivate:boolean = false;
        let isSelectable:boolean = false;
        if(a.length > 1){
            name = a[0].trim();
            type = a[1].trim();
            if(ind !== -1){
                type = type.substr(0,ind).trim();
                let ind1 = type.indexOf('=');
                if(ind1 !== null){
                    type = type.substr(0,ind1).trim();
                }
            }
        }else{
            if(ind !== -1){
                name = srcStr.substr(0,ind).trim();
            }
        }

        if((ind=name.indexOf('?')) !== -1){
            isSelectable = true;
            name = name.substr(0,ind);
        }

        
        if(name.indexOf('static ') !== -1){
            isStatic = true;
        }
        
        if(name.indexOf('private ') !== -1){
            isPrivate = true;
        }

        let sa:string[] = name.split(' ');
        name = sa[sa.length-1];
        
        return{
            name:name,
            static:isStatic,
            private:isPrivate,
            need:!isSelectable
        }
    }  
    
    /**
     * 查找完整代码块
     * @param srcStr    源串
     * @returns         [完整代码块串,最后字符索引]
     */
    findBlockCode(srcStr:string):Array<any>{
        let bracketCnt:number = 0;
        let noteChar:string;
        let stringChar:string;
        let regChar:string;
        let startBlock:boolean = false;
        
        for(let i=0;i<srcStr.length;i++){
            let ch = srcStr[i];
            let ch1 = srcStr[i+1];
            //判断是否为注释中
            if(noteChar === '//'){
                if(ch==='\r' || ch==='\n'){ //注释结束
                    noteChar = undefined;
                    continue;
                }
            }else if(noteChar === '/*'){
                if(ch === '*' && ch1 === '/'){ //注释结束
                    noteChar = undefined;
                    i++;
                    continue;
                }
            }else if(stringChar){
                if(ch === stringChar){  //字符串结束
                    stringChar = undefined;
                    continue;
                }
            }else if(regChar){ //判断正则表达式结束
                if(ch === ';' || ch === '\r' || ch==='\n'){
                    regChar = undefined;
                    continue;
                }
            }
            if(noteChar || stringChar || regChar){
                continue;
            }
            
            if(ch==='/'){
                if(ch1 === '/'){//注释符号开始
                    noteChar = '//';
                }else if(ch1 === '*'){//注释符号开始 
                    noteChar = '/*';
                }else{ //正则表达式
                    regChar = '/';
                    continue;
                }
                if(noteChar){
                    i++;
                    continue;
                }
            }else if(ch === '`' || ch === '"' || ch === "'"){ //字符串开始
                stringChar = ch;
                continue;
            }    
            
            //计算{}数量，当括号数为0时表示代码块结束
            if(ch === '{'){
                startBlock = true;
                bracketCnt++;
            }else if(ch === '}'){
                bracketCnt--;
            }
            //括号数相抵，则返回代码
            if(startBlock && bracketCnt === 0){
                return [srcStr.substr(0,i+1).trim(),i+1];
            }
        }
        return [srcStr.trim(),0];
    }

    /**
     * 生成class annotation
     * @param srcStr 
     */
    handleClassAnnotation(classObj:ClassObj){
        let srcStr:string = classObj.annotation;
        let noteTag:string = "summary";
        let retObj:object = {};
        let noteStr:string='';
        let lineNo:number = 0;
        for(;;lineNo++){
            let line:string = this.getLine(srcStr);
            if(!line){
                break;
            }
            //截断字符串
            srcStr = srcStr.substr(line.length+1);
            line = line.trim();
            //结束
            if(line === '*/'){
                retObj[noteTag] = noteStr;
                break;
            }

            if(!line.startsWith('*')){
                continue;
            }
            
            line = line.substr(1).trim();
            //新的标注
            if(line.startsWith('@')){
                let arr = line.split(' ');
                retObj[noteTag] = noteStr;
                noteTag = arr[0].substr(1);
                //不加入文档
                if(lineNo === 0 && noteTag === 'exclute'){
                    return null;
                }
                noteStr = '';
            }else{
                noteStr += line + '  \n';  //markdown 换行需要加两个空格
            }
        }

        classObj.annotation = retObj;

        //处理方法
        for(let m of classObj.methods){
            this.handleMethodAnnotation(m);
        }

        //处理属性
        for(let p of classObj.props){
            let s1 = '';
            let s:string = p.annotation;
            for(;s&&s!=='';){
                let line:string = this.getLine(s);
                if(!line){
                    break;
                }
                s = s.substr(line.length+1);
                line = line.trim();
                if(line === '/**'){
                    continue;
                }
                if(line === '*/'){
                    break;
                }
                if(line.startsWith('*')){
                    line = line.substr(1).trim();
                }
                s1 += line + '\n  ';
            }
            p.annotation = s1;
        }
    }

    /**
     * 处理方法注释
     * @param srcStr 
     * @param methodObj 
     */
    handleMethodAnnotation(methodObj:MethodObj){
        let srcStr:string = methodObj.annotation;
        let noteTag:string = "Summary";
        let noteStr:string='';
        let lineNo:number = 0;
        let paramName:string;
        let isReturn:boolean;  //是否为返回
        let isThrow:boolean;   //是否为抛出
        for(;;lineNo++){
            let line:string = this.getLine(srcStr);
            if(!line){
                break;
            }
            //截断字符串
            srcStr = srcStr.substr(line.length+1);
            line = line.trim();
            //结束
            if(line === '*/'){
                setValue();
                break;
            }

            if(!line.startsWith('*')){
                continue;
            }
            
            line = line.substr(1).trim();
            //新的标注
            if(line.startsWith('@')){
                
                let arr = line.split(' ');
                noteTag = arr[0].substr(1);

                //不加入文档
                if(lineNo === 0 && noteTag === 'Exclute'){
                    return null;
                }
                setValue();
                //去掉第一个元素 @开头
                arr.shift();
                switch(noteTag){
                    case 'param': //参数
                        //找到参数名
                        for(;arr.length>2;){
                            if(arr[0] === ''){
                                arr.shift();
                            }else{
                                break;
                            }
                        }
                        paramName = arr[0];
                        arr.shift();
                        noteStr = arr.join(' ');
                        break;
                    case 'returns':
                        isReturn = true;
                        noteStr = arr.join(' ').trim();
                        break;
                    case 'throws':
                        isThrow = true;
                        noteStr = arr.join(' ');
                }
            }else{
                //markdown 换行需要加两个空格
                if(noteStr !== ''){
                    noteStr += '  \n';
                }
                noteStr += line;
            }
        }
        
        /**
         * 添加参数说明
         * @param paramName     参数名 
         * @param value         注释
         * @param params        参数数组
         */
        function addParamAnnoatation(paramName:string,value:string,params:Array<ParamObj>){
            for(let i=0;i<params.length;i++){
                if(params[i].name === paramName){
                    params[i].annotation = value;
                    return;
                }
            }
        }

        function setValue(){
            if(paramName){
                addParamAnnoatation(paramName,noteStr,methodObj.params);    
                paramName = undefined;
            }else if(isReturn){
                methodObj.returns = noteStr;
                isReturn = false;
            }else if(isThrow){
                methodObj.throws = noteStr;
                isThrow = false;
            }else{  //概述
                methodObj.annotation = noteStr;
            }
            noteStr = '';
        }
    }
    /**
     * 获取一行
     * @param srcStr 
     */
    getLine(srcStr:string):string{
        for(let i=0;i<srcStr.length;i++){
            let ch = srcStr[i];
            if(ch==='\r' || ch === '\n'){
                return srcStr.substr(0,i);
            }
        }
        return srcStr;
    }


    /**
     * 写mdfile
     * @param classObj 
     */
    writeMdFile(classObj:ClassObj){

    }
}
 
export{Parser}

