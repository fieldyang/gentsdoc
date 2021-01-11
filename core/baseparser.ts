import { BaseObj } from "./types";
import { Util } from "./util";

export default class BaseParser{
    /**
     * 待匹配的正则表达式
     */
    regExp:RegExp;
    
    /**
     * 匹配源串中对应正则式的位置
     * @param srcStr 
     * @returns     匹配位置
     */
    check(srcStr:string):RegExpExecArray{
        return this.regExp.exec(srcStr);
    }

    /**
     * 解析
     * @param srcStr    源串
     * @param annoStr   注释串
     */
    parse(srcStr:string,annoStr:string):BaseObj{
        return null;
    }

    /**
     * 写对象
     * @param BaseObj 
     */
    write(BaseObj:any){

    }

    /**
     * 处理开始于和废弃于
     * @param cObj      class function等
     * @param writeStr  待写字符串
     */
    handleSinceAndDeprecated(cObj,writeStr){
        //废弃于
        if(cObj.annotation['deprecated']){
            let o = cObj.annotation['deprecated'];
            if(o && typeof o === 'object'){
                writeStr = Util.addLine(writeStr,'<font class="deprecated">' + Util.tips.deprecated + " : v" + o.v + '</font>');
                if(o.reason){
                    writeStr = Util.addLine(writeStr,'<font class="deprecatedtip">' + o.reason + '</font>');
                }    
            }
            //删除deprecated
            delete cObj.annotation['deprecated'];
        }else{
            //开始于
            let psince:string = cObj.annotation['since']||Util.wholeConfig.defaultSince;
            if(psince){
                writeStr = Util.addLine(writeStr,'<font class="since">' + Util.tips.since + ' : v' + psince + '</font>');
            }
            //删除since
            delete cObj.annotation['since'];
        }
        return writeStr;
    }
}
