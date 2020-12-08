import BaseParser from "./baseparser";
import { Util } from "./util";
import { ParamObj, MethodObj } from "./types";

class FunctionParser extends BaseParser{
    regExp:RegExp=/^\s*(export)?\s*(async\s*)?function\s+\S+\s*\([\s\S]*\)(:\s*\S+)?/;
    
    /**
     * 解析
     * @param srcStr    源串
     * @param annoStr   注释串
     */
    parse(srcStr:string,annoStr:string):MethodObj{
        let ind = srcStr.indexOf('(');
        if(ind === -1){
            return null;
        }
        let isStatic:boolean = false;
        let isPrivate:boolean = false;
        let isAsync:boolean = false;
        //前半段
        let s1:string = srcStr.substr(0,ind).trim();
        
        if(s1.indexOf('async ') !== -1){
            isAsync = true;
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
            let ind1 = retStr.indexOf('{');
            retStr = retStr.substr(ind+1,ind1-ind-1);
        }else{
            retStr = '';
        }

        let rObj:MethodObj = {
            name:name,
            type:'function',
            returns:retStr,
            private:isPrivate,
            static:isStatic,
            async:isAsync,
            params:paramArr,
            annoStr:annoStr,
            annotation:{}
        }
        Util.handleAnnotation(rObj);
        return rObj;
    }
    
    /**
     * 写function object
     * @param cObj 
     */
    write(cObj:any){
        const pathMdl = require('path');
        const fsMdl = require('fs');
        let writeStr:string = '';
        let dstPath = Util.wholeConfig.dst;

        let fn:string = pathMdl.resolve(dstPath,cObj.name + '.md');
        
        //函数名
        let ms = cObj.name + '(';
        let selectableNum = 0;
        let pstr = ''; //参数串
        //参数串
        for(let pa of cObj.params){
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
        //函数名
        writeStr = Util.addLine(writeStr,'# Function ' + ms);
        this.handleSinceAndDeprecated(cObj,writeStr);
        //async
        if(cObj.async){
            writeStr = Util.addLine(writeStr,Util.tips.modifier);
            writeStr = Util.addLine(writeStr,'<font class="modifier">async</font>');
        }
        
        //注释
        if(cObj.annotation){
            writeStr = Util.addLine(writeStr,'## ' + Util.tips.desc);
            for(let o in cObj.annotation){
                if(o === 'returns' || o==='throws'){
                    continue;
                }
                if(o !== 'default'){
                    writeStr = Util.addLine(writeStr,'### ' + o);
                }
                writeStr = Util.addLine(writeStr,cObj.annotation[o]);
            }
        }
        
        //参数
        if(cObj.params.length>0){
            writeStr = Util.addLine(writeStr,'## 参数');
            for(let pa of cObj.params){
                let pt = pa.type;
                if(pt){
                    pt = Util.genLink(pt);
                }else{
                    pt = 'any';
                }
                pt = ' *&lt;' + pt + '&gt;* ';
                writeStr = Util.addLine(writeStr,'+ ' + pa.name + pt + (pa.annotation||''));
                
            }
            writeStr = Util.addLine(writeStr,'');
        }
        
        //返回值
        writeStr = Util.addLine(writeStr,'## ' + Util.tips.returns);
        if(cObj.returns){
            let msg:string = Util.genLink(cObj.returns);
            writeStr = Util.addLine(writeStr,msg);
            if(cObj.annotation['returns']){
                writeStr = Util.addLine(writeStr,cObj.annotation['returns']);
            }
        }else{
            writeStr = Util.addLine(writeStr,'void');
        }

        //异常
        if(cObj.annotation['throws']){
            writeStr = Util.addLine(writeStr,'## ' + Util.wholeConfig.throws);
            writeStr = Util.addLine(writeStr,cObj.annotation['throws']);
        }
        fsMdl.writeFileSync(fn,writeStr);
    }
}
export{FunctionParser}