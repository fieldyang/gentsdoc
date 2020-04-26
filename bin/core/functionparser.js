"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseparser_1 = require("./baseparser");
const util_1 = require("./util");
class FunctionParser extends baseparser_1.default {
    constructor() {
        super(...arguments);
        this.regExp = /^\s*(async\s*)?function\s+\S+\s*\([\s\S]*\)(:\s*\S+)?/;
    }
    /**
     * 解析
     * @param srcStr    源串
     * @param annoStr   注释串
     */
    parse(srcStr, annoStr) {
        let ind = srcStr.indexOf('(');
        if (ind === -1) {
            return null;
        }
        let isStatic = false;
        let isPrivate = false;
        let isAsync = false;
        //前半段
        let s1 = srcStr.substr(0, ind).trim();
        if (s1.indexOf('static ') !== -1) {
            isStatic = true;
        }
        if (s1.indexOf('private ') !== -1) {
            isPrivate = true;
        }
        if (s1.indexOf('async ') !== -1) {
            isAsync = true;
        }
        let sa = s1.split(' ');
        let name = sa[sa.length - 1];
        //参数
        let s2 = srcStr.substr(ind + 1);
        ind = s2.indexOf(')');
        let paramArr = [];
        let paramStr = s2.substr(0, ind).trim();
        if (paramStr !== '') {
            let pa = paramStr.split(',');
            for (let p of pa) {
                let pn;
                let pt;
                let need = false;
                p = p.trim();
                let pa1 = p.split(':');
                if (pa1.length > 1) { //
                    pn = pa1[0].trim();
                    pt = pa1[1].trim();
                }
                else {
                    pn = pa1[0];
                }
                let ind1 = pn.indexOf('?');
                if (ind1 !== -1) {
                    need = true;
                    pn = pn.substr(0, ind1).trim();
                }
                paramArr.push({
                    name: pn,
                    type: pt,
                    need: !need
                });
            }
        }
        //返回值
        let retStr = s2.substr(ind + 1);
        ind = retStr.indexOf(':');
        if (ind !== -1) {
            let ind1 = retStr.indexOf(';');
            retStr = retStr.substr(ind + 1, ind1 - ind - 1);
        }
        else {
            retStr = '';
        }
        let rObj = {
            name: name,
            returns: retStr,
            private: isPrivate,
            static: isStatic,
            async: isAsync,
            params: paramArr,
            annoStr: annoStr,
            annotation: {}
        };
        util_1.Util.handleAnnotation(rObj);
        return rObj;
    }
    /**
     * 写function object
     * @param cObj
     */
    write(cObj) {
        const pathMdl = require('path');
        const fsMdl = require('fs');
        let writeStr = '';
        let dstPath = util_1.Util.wholeConfig.dst;
        let fn = pathMdl.resolve(dstPath, cObj.name + '.md');
        //函数名
        let ms = cObj.name + '(';
        let selectableNum = 0;
        let pstr = ''; //参数串
        //参数串
        for (let pa of cObj.params) {
            if (!pa.need) {
                pstr += '[';
                selectableNum++;
            }
            if (pstr !== '' && pstr !== '[') {
                pstr += ',';
            }
            pstr += pa.name;
        }
        for (let i = 0; i < selectableNum; i++) {
            pstr += ']';
        }
        ms += pstr + ')';
        //函数名
        writeStr = util_1.Util.addLine(writeStr, '# Function:' + ms);
        //开始于
        let since = cObj.annotation['since'] || util_1.Util.wholeConfig.defaultSince;
        if (since) {
            writeStr = util_1.Util.addLine(writeStr, '<font class="since">开始于:v' + since + '</font>');
        }
        delete cObj.annotation['since'];
        //async
        ms = undefined;
        if (cObj.async) {
            writeStr = util_1.Util.addLine(writeStr, '修饰符: <font class="modifier">async</font>');
        }
        //注释
        if (cObj.annotation) {
            writeStr = util_1.Util.addLine(writeStr, '## ' + util_1.Util.wholeConfig.desc);
            for (let o in cObj.annotation) {
                if (o === 'returns' || o === 'throws') {
                    continue;
                }
                if (o !== 'default') {
                    writeStr = util_1.Util.addLine(writeStr, '### ' + o);
                }
                writeStr = util_1.Util.addLine(writeStr, cObj.annotation[o]);
            }
        }
        //参数
        if (cObj.params.length > 0) {
            writeStr = util_1.Util.addLine(writeStr, '## 参数');
            for (let pa of cObj.params) {
                let pt = pa.type;
                if (pt) {
                    pt = util_1.Util.genLink(pt);
                }
                else {
                    pt = 'any';
                }
                pt = ' *&lt;' + pt + '&gt;* ';
                writeStr = util_1.Util.addLine(writeStr, '+ ' + pa.name + pt + (pa.annotation || ''));
            }
            writeStr = util_1.Util.addLine(writeStr, '');
        }
        //返回值
        writeStr = util_1.Util.addLine(writeStr, '## ' + util_1.Util.wholeConfig.returns);
        if (cObj.returns) {
            let msg = util_1.Util.genLink(cObj.returns);
            writeStr = util_1.Util.addLine(writeStr, msg);
            if (cObj.annotation['returns']) {
                writeStr = util_1.Util.addLine(writeStr, cObj.annotation['returns']);
            }
        }
        else {
            writeStr = util_1.Util.addLine(writeStr, 'void');
        }
        //异常
        if (cObj.annotation['throws']) {
            writeStr = util_1.Util.addLine(writeStr, '## ' + util_1.Util.wholeConfig.throws);
            writeStr = util_1.Util.addLine(writeStr, cObj.annotation['throws']);
        }
        fsMdl.writeFileSync(fn, writeStr);
    }
}
exports.FunctionParser = FunctionParser;
//# sourceMappingURL=functionparser.js.map