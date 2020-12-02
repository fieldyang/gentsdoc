import { BaseObj } from "./types";

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
}
