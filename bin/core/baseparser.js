"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
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
    /**
     * 处理开始于和废弃于
     * @param cObj      class function等
     * @param writeStr  待写字符串
     */
    handleSinceAndDeprecated(cObj, writeStr) {
        //废弃于
        if (cObj.annotation['deprecated']) {
            let o = cObj.annotation['deprecated'];
            if (o && typeof o === 'object') {
                writeStr = util_1.Util.addLine(writeStr, '<font class="deprecated">' + util_1.Util.tips.deprecated + " : v" + o.v + '</font>');
                if (o.reason) {
                    writeStr = util_1.Util.addLine(writeStr, '<font class="deprecatedtip">' + o.reason + '</font>');
                }
            }
            //删除deprecated
            delete cObj.annotation['deprecated'];
        }
        else {
            //开始于
            let psince = cObj.annotation['since'] || util_1.Util.wholeConfig.defaultSince;
            if (psince) {
                writeStr = util_1.Util.addLine(writeStr, '<font class="since">' + util_1.Util.tips.since + ' : v' + psince + '</font>');
            }
            //删除since
            delete cObj.annotation['since'];
        }
        return writeStr;
    }
}
exports.default = BaseParser;
//# sourceMappingURL=baseparser.js.map