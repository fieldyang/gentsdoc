import { BaseObj } from "./types";

class Util{
    /**
     * 全局配置
     */
    static wholeConfig:any;
    /**
     * 提示对象
     */
    static tips:any;
    /**
     * 自定义类型集合，如class,enum等
     */
    static types:BaseObj[] = [];

    /**
     * 注释正则表达式
     */
    static regNote:RegExp = /\/\*\*[\S\s]+?\*\//;
    /**
     * 添加类型到集合
     * @param type  待添加类型
     */
    static addType(type:BaseObj){
        this.types.push(type);     
    }
    /**
     * 处理注释
     * @param srcStr 源注释串
     */
    static handleAnnotation(annotationObj:BaseObj){
        let srcStr:string = annotationObj.annoStr;
        if(!srcStr){
            return;
        }
        //删除注释串
        delete annotationObj.annoStr;
        let noteStr:string='';
        let lineNo:number = 0;
        let noteTag:string='';      //标注名
        let codeStart:boolean=false; //是否为代码
        //去掉两端不可见字符
        srcStr = srcStr.trim();
        for(;srcStr !== '';lineNo++){
            let line:string = this.getLine(srcStr);
            if(!line){
                break;
            }
            //截断字符串
            srcStr = srcStr.substr(line.length+1);
            //开始
            if(!codeStart){
                if(line.startsWith('/**')){
                    line = line.substr(3).trim();
                }else if(/.*(\*)?\/$/.test(line)){//结尾
                    line = line.substr(0,line.length-2).trim();
                }
            }
            if(line === ''){
                continue;
            }
            //去掉line的左边第一个*
            line = line.replace(/^\s*\*/,'');
            
            //处理code
            if(!codeStart){
                line = line.trim();
                if(line.startsWith('```')){ //代码开始
                    codeStart = true;
                }
            }else{
                //代码结束
                if(line.indexOf('```') !== -1){
                    line = line.trim();
                    if(line === '```'){
                        codeStart = false;
                    }
                }
            }
            
            if(line === ''){
                continue;
            }

            if(line.startsWith('@')){
                //结束当前noteTag
                if(finishOne(annotationObj,noteTag,noteStr,this.wholeConfig.excludeTags) === null){
                    return null;
                }
                noteStr = '';
                let arr = line.split(' ');
                noteTag = arr[0].substr(1);
                
                //去掉tag长度
                line = line.substr(noteTag.length+2).trim();
            }

            if(line !== ''){
                //markdown 换行需要加两个空格，最后一行不需要换行符
                if(noteStr !== ''){
                    noteStr += '  \n';
                }
                noteStr += line;
            }
            
        }
        //最后一个
        if(noteStr !== ''){
            if(finishOne(annotationObj,noteTag,noteStr,this.wholeConfig.excludeTags) === null){
                return null;
            }
            noteStr = '';
        }

        /**
         * 完成一组注释
         * @param obj   注释对象
         * @param tag   标签
         * @param str   注释内容
         * @param eTags 不添加到文档的注释标签
         */
        function finishOne(obj:any,tag:string,str:string,eTags:Array<string>){
            //存在note标签
            if(noteTag){
                //如果属于排除标签，则不添加到文档
                if(eTags && eTags.length>0){
                    if(eTags.includes(noteTag)){
                        return null;
                    }
                }
                if(Util.Annotation[noteTag] !== undefined){ //标签处理方法被
                    Util.Annotation[noteTag](obj,str);
                }else{  //标签处理方法没有定义
                    obj.annotation[tag] = str;    
                }
            }else{
                obj.annotation['default'] = noteStr;
            }
        }
    }

    /**
     * 获取一行
     * @param srcStr 
     */
    static getLine(srcStr:string):string{
        for(let i=0;i<srcStr.length;i++){
            let ch = srcStr[i];
            if(ch==='\r' || ch === '\n'){
                return srcStr.substr(0,i);
            }
        }
        return srcStr;
    }

    /**
     * 查找完整代码块
     * @param srcStr    源串
     * @returns         [完整代码块串,最后字符索引]
     */
    static findBlockCode(srcStr:string):Array<any>{
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
     * 追加行
     * @param value     新行
     */
    static addLine(writeStr:string,value:string):string{
        writeStr += value;
        let ch = value[0];
        //普通行需要加两个空格
        if(!'+-#'.includes(ch)){
            writeStr += '  ';   
        }
        writeStr += '\n';
        return writeStr;
    }

    /**
     * 数组排序
     * @param arr 待排序数组 
     */
    static sortName(arr){
        arr.sort((a,b)=>{
            if(a.name < b.name){
                return -1;
            }else if(a.name > b.name){
                return 1;
            }
            return 0;
        });
    }

    /**
     * 创建类型链接
     * @param type      类型
     */
    static genLink(type:string):string{
        const basePath:string = this.wholeConfig.basePath || '';
        const suffix:string = this.wholeConfig.suffix || '';
        let ind1:number = type.indexOf('<');
        let ind2:number = type.indexOf('>');
        let tp:string = type;
        if(ind1 !== -1 && ind2 !== -1){
            tp = type.substr(ind1+1,ind2-ind1-1);
        }
        
        for(let co of this.types){
            if(co.name === tp){
                let s:string = '[' + tp + '](' + basePath + tp + suffix + ')';
                if(tp !== type){
                    s = type.substr(0,ind1+1) + s + type.substr(ind2)
                }
                type = s;
                break;
            }
        }
        //替换类型的<>
        type = type.replace(/\</g,'&lt;');
        type = type.replace(/\>/g,'&gt;');
        type = "<font class='datatype'>" + type + '</font>'
        return type;
    }
        
    /**
     * 特殊注释集合
     */
    static Annotation = {
        /**
         * 参数注释
         * @param item      方法或函数对象
         * @param noteStr   注释内容
         */
        param:function(item:any,noteStr?:string){
            let ind = noteStr.indexOf(' ');
            //取出参数名
            let paramName:string;
            if(ind !== -1){
                paramName = noteStr.substr(0,ind);
            }else{
                paramName = noteStr;
            }
            //截断noteStr
            noteStr = noteStr.substr(paramName.length+1);
            let params:Array<any> = item.params;
            for(let i=0;i<params.length;i++){
                if(params[i].name === paramName){
                    params[i].annotation = noteStr;
                    return;
                }
            }
        },
        // /**
        //  * 返回注释
        //  * @param item 方法或函数对象
        //  * @param noteStr   注释内容
        //  */
        // returns:function(item:any,noteStr?:string){
        //     item.annotation['returns'] = noteStr;
        // },
        // /**
        //  * 抛出异常注释
        //  * @param item 方法或函数对象
        //  * @param noteStr   注释内容
        //  */
        // throws:function(item:any,noteStr?:string){
        //     item.annotation['throws'] = noteStr;
        // },
        /**
         * 整段注释不加入文档
         * @param item      注释对象
         * @param noteStr   注释串
         */
        exclude:function(item:any,noteStr?:string){
            return null;
        }
    }
}

export{Util}