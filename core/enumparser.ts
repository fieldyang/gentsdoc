import BaseParser from "./baseparser";
import { PropObj, EnumObj } from "./types";
import { Util } from "./util";

class EnumParser extends BaseParser{
    regExp:RegExp = /^\s*enum\s+\S+\s*\{?[\r\n]/;
    
    /**
     * 解析
     * @param srcStr    源串
     * @param annoStr   注释串
     */
    parse(srcStr:string,annoStr:string):EnumObj{
        //属性正则表达式
        const regProp:RegExp = /^\s*\S+(:?\s*\S+)?(\=\s*\S+)?,?/;
        let rName = this.regExp.exec(srcStr);
        let sName:string = rName[0];
        sName = sName.replace(/\s+/,' ');
        let sa:string[] = sName.split(' ');      
        let enumName = sa[1];
        //删除"{"
        let ind:number;
        if((ind=enumName.indexOf('{')) !==-1){
            enumName = enumName.substr(0,ind);
        }

        let props:PropObj[]=[];
        
        //遍历处理属性和方法
        for(;;){
            let re = Util.regNote.exec(srcStr);
            if(re === null){
                break;
            }
            srcStr = srcStr.substr(re.index + re[0].length+1);
            //找到第一行字符开头的字符串
            let line='';
            for(;srcStr !=='';){
                line = Util.getLine(srcStr);
                let len = line.length;
                line = line.trim();
                if(line.charAt(line.length-1) === '}'){
                    line = line.substr(0,line.length-1);
                }
                if(line !== ''){
                    break;
                }
                srcStr = srcStr.substr(len+1);
            }
            if(line === ''){
                continue;
            }
            
            let rp = regProp.exec(line);
            
            if(rp !== null){ //property处理
                let obj:PropObj = this.handleProp(line);
                obj.annoStr = re[0].trim();
                Util.handleAnnotation(obj);
                props.push(obj);
            }
        }
        
        Util.sortName(props);
        let rObj:EnumObj = {
            name:enumName,
            type:'enum',
            props:props,
            annoStr:annoStr,
            annotation:{}
        }
        Util.handleAnnotation(rObj);
        return rObj;
    }
    /**
     * 写文件
     * @param cObj 
     */
    write(cObj:any){
        const pathMdl = require('path');
        const fsMdl = require('fs');
        let writeStr:string = '';
        let dstPath = Util.wholeConfig.dst;
        let fn:string = pathMdl.resolve(dstPath,cObj.name + '.md');
        //类名
        writeStr = Util.addLine(writeStr,'# Enum ' + cObj.name);
        
        //描述
        writeStr = Util.addLine(writeStr,'## ' + Util.tips.desc);
        this.handleSinceAndDeprecated(cObj,writeStr);
        for(let o in cObj.annotation){
            if(o !== 'default'){
                writeStr = Util.addLine(writeStr,'### ' + o);
            }
            writeStr = Util.addLine(writeStr,cObj.annotation[o]);
        }

        //枚举值
        if(cObj.props.length>0){
            //属性描述
            writeStr = Util.addLine(writeStr,'## ' + Util.tips.enumvalue);
            for(let p of cObj.props){
                writeStr = Util.addLine(writeStr,'#### ' + p.name);
                
                this.handleSinceAndDeprecated(cObj,writeStr);
                
                for(let o in p.annotation){
                    if(o !== 'default'){
                        writeStr = Util.addLine(writeStr,'##### ' + o);
                    }
                    writeStr = Util.addLine(writeStr,p.annotation[o]);
                }

                if(p.type){
                    writeStr = Util.addLine(writeStr,'#### ' + Util.tips.datatype);
                    let pt = Util.genLink(p.type);
                    writeStr = Util.addLine(writeStr,pt);
                }

                if(p.value){
                    writeStr = Util.addLine(writeStr,'##### ' + Util.tips.initvalue);
                    writeStr = Util.addLine(writeStr,p.value);
                }
            }
        }

        fsMdl.writeFileSync(fn,writeStr);
    }

    /**
     * 处理属性
     * @param srcStr    源串
     * @returns         {name:属性名,need:不可选,type:类型} 
     */
    handleProp(srcStr:string):PropObj{
        //去掉最后一个;
        let ind = srcStr.indexOf(',');
        if(ind === srcStr.length-1){
            srcStr = srcStr.substr(0,srcStr.length-1);
        }
        let a = srcStr.split(':');
        let name:string;
        let type:string;
        let value:string;
        name = a[0].trim();
            
        if(a.length > 1){
            type = a[1].trim();
        }
        //处理 =
        if((ind=name.indexOf('='))!== -1){
            value = name.substr(ind+1).trim();
            name = name.substr(0,ind).trim();
        }
        if(type){
            if((ind=type.indexOf('='))!== -1){
                value = type.substr(ind+1).trim();
                type = type.substr(0,ind).trim();
            }
        }

        let sa:string[] = name.split(' ');
        name = sa[sa.length-1];
        
        return {
            name:name,
            type:type,
            value:value,
            annotation:{}
        }
    }

}
export{EnumParser}