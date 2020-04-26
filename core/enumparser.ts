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
        const regProp:RegExp = /^\s*\S+\s*(=\s*\S+)?\,/;
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
                //处理属性
                let sa = line.split('=');
                let obj:PropObj = {
                    name:sa[0].trim(),
                    annotation:{}
                };

                if(sa.length>1){
                    let v = sa[1].trim();
                    if((ind=v.indexOf(',')) > 0){
                        v = v.substr(0,ind);
                    }
                    obj.value = v;
                }
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
        
        //类描述
        writeStr = Util.addLine(writeStr,'## ' + Util.tips.desc);
        //开始于
        let psince:string = cObj.annotation['since']||Util.wholeConfig.defaultSince;
        if(psince){
            writeStr = Util.addLine(writeStr,'<font class="since">' + Util.tips.since + ':v' + psince + '</font>');
        }
        //删除since
        delete cObj.annotation['since'];
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
                writeStr = Util.addLine(writeStr,'### <a id="PROP_' + p.name + '">' + p.name + '</a>');
                //开始于
                let since:string = p.annotation['since']||psince||Util.wholeConfig.defaultSince;
                if(since){
                    writeStr = Util.addLine(writeStr,'<font class="since">'+ Util.tips.since +':v' + since + '</font>');
                }
                delete p.annotation['since'];
                
                for(let o in p.annotation){
                    if(o !== 'default'){
                        writeStr = Util.addLine(writeStr,'#### ' + o);
                    }
                    writeStr = Util.addLine(writeStr,p.annotation[o]);
                }

                if(p.value){
                    writeStr = Util.addLine(writeStr,'### ' + Util.tips.initvalue);
                    writeStr = Util.addLine(writeStr,p.value);
                }
                
            }
        }

        fsMdl.writeFileSync(fn,writeStr);
    }
}
export{EnumParser}