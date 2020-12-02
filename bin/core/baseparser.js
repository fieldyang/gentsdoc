"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseParser {
    /**
     * 匹配源串中对应正则式的位置
     * @param srcStr
     * @returns     匹配位置
     */
    check(srcStr) {
        return this.regExp.exec(srcStr);
    }
    /**
     * 解析
     * @param srcStr    源串
     * @param annoStr   注释串
     */
    parse(srcStr, annoStr) {
        return null;
    }
    /**
     * 写对象
     * @param BaseObj
     */
    write(BaseObj) {
    }
}
exports.default = BaseParser;
//# sourceMappingURL=baseparser.js.map