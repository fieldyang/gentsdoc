
import { MethodObj, ClassObj, EnumObj } from "./types";
import {Util} from "./util";
import {ClassParser} from "./classparser";
import {EnumParser} from "./enumparser";
import {FunctionParser} from "./functionparser";
import BaseParser from "./baseparser";
import { Tip } from "./tip";
/**
 * 解析器
 */
export default class Parser{
    /**
     * 解析器实例集合
     */
    parsers:Array<BaseParser> = [new ClassParser(),new FunctionParser(),new EnumParser()];
    /**
     * 类集合
     */
    classes:Array<ClassObj> = [];
    /**
     * 函数集合
     */
    functions:Array<MethodObj> = [];
    /**
     * enum集合 
     */
    enums:Array<EnumObj> = [];

    /**
     * 解析
     * @param cfg   解析初始化配置 
     */
    public parse(cfg:any){
        let srcPath:string = cfg.src;
        let dstPath:string = cfg.dst;
        const fsMdl = require('fs');
        const pathMdl = require('path');

        Util.wholeConfig = cfg;
        //提示
        Util.tips = Tip[cfg.language||'zh'];
        
        this.handleDir(srcPath);
        if(!fsMdl.existsSync(Util.wholeConfig.src)){
            throw new Error('file is not exist');
        }
        //删除重建dst目录
        if(fsMdl.existsSync(dstPath)){
            fsMdl.rmdirSync(dstPath,{recursive:true});
        }
        fsMdl.mkdirSync(dstPath,{recursive:true});

        //json文件，构建标题和url
        let jsonObj = {
            funcs:[],
            classes:[],
            interfaces:[],
            enums:[]
        };
        //类名排序
        Util.sortName(this.classes);
        //外部函数排序
        Util.sortName(this.functions);
        //枚举名排序
        Util.sortName(this.enums);

        //处理函数注释
        for(let i=0;i<this.functions.length;i++){
            let fObj:MethodObj = this.functions[i];
            jsonObj.funcs.push({
                title:fObj.name,
                url:Util.genLinkUrl(fObj.name)
            });
        }
        
        //处理类
        for(let i=0;i<this.classes.length;i++){
            let cObj:ClassObj = this.classes[i];
            Util.addType(cObj);
            let obj = {
                title:cObj.name,
                url:Util.genLinkUrl(cObj.name)
            };
            //接口和类分别存储
            if(cObj.type === 'interface'){
                jsonObj.interfaces.push(obj);
            }else{
                jsonObj.classes.push(obj);
            }
        }
        
        //处理枚举
        for(let i=0;i<this.enums.length;i++){
            let fObj:EnumObj = this.enums[i];
            Util.addType(fObj);
            jsonObj.enums.push({
                title:fObj.name,
                url:Util.genLinkUrl(fObj.name)
            });
        }

        //写json文件
        fsMdl.writeFileSync( pathMdl.resolve(dstPath,"data.json"),JSON.stringify(jsonObj));

        //写class
        for(let cObj of this.classes){
            this.parsers[0].write(cObj);
        }
        //写函数
        for(let cObj of this.functions){
            this.parsers[1].write(cObj);
        }
            
        //写enum
        for(let cObj of this.enums){
            this.parsers[2].write(cObj);
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
        const fsMdl = require('fs');
        let fileStr:string = fsMdl.readFileSync(filePath,'utf8');
        
        //需要设置class关闭或方法关闭
        for(;;){
            let re=Util.regNote.exec(fileStr);
            if(re === null){
                break;
            }
            
            //截断注释
            fileStr = fileStr.substr(re.index + re[0].length);

            let parser:BaseParser;
            let minIndex:number = 10000000;
            for(let p of this.parsers){
                let re = p.check(fileStr);
                if(re !== null && re.index < minIndex){
                    minIndex = re.index;
                    parser = p;
                }
            } 
            
            if(!parser){
                return;
            }
            let block = Util.findBlockCode(fileStr);
            let src:string = block[0];
            //截断代码
            if(block[1]>0){
                fileStr = fileStr.substr(block[1]);
            }

            let obj = parser.parse(src,re[0].trim());
            
            switch(obj.type){
                case 'class':     //类
                    this.classes.push(<ClassObj>obj);
                    break;
                case 'function':     //函数
                    this.functions.push(<MethodObj>obj);
                    break;
                case 'enum':     //枚举
                    this.enums.push(<EnumObj>obj);
                    break;
            }
        }
    }
}

export{Parser}




