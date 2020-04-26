"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseparser_1 = require("./baseparser");
const util_1 = require("./util");
class EnumParser extends baseparser_1.default {
    constructor() {
        super(...arguments);
        this.regExp = /^\s*enum\s+\S+\s*\{?[\r\n]/;
    }
    /**
     * 解析
     * @param srcStr    源串
     * @param annoStr   注释串
     */
    parse(srcStr, annoStr) {
        //属性正则表达式
        const regProp = /^\s*\S+\s*(=\s*\S+)?\,/;
        let rName = this.regExp.exec(srcStr);
        let sName = rName[0];
        sName = sName.replace(/\s+/, ' ');
        let sa = sName.split(' ');
        let enumName = sa[1];
        //删除"{"
        let ind;
        if ((ind = enumName.indexOf('{')) !== -1) {
            enumName = enumName.substr(0, ind);
        }
        let props = [];
        //遍历处理属性和方法
        for (;;) {
            let re = util_1.Util.regNote.exec(srcStr);
            if (re === null) {
                break;
            }
            srcStr = srcStr.substr(re.index + re[0].length + 1);
            //找到第一行字符开头的字符串
            let line = '';
            for (; srcStr !== '';) {
                line = util_1.Util.getLine(srcStr);
                let len = line.length;
                line = line.trim();
                if (line !== '') {
                    break;
                }
                srcStr = srcStr.substr(len + 1);
            }
            if (line === '') {
                continue;
            }
            let rp = regProp.exec(line);
            if (rp !== null) { //property处理
                //处理属性
                let sa = line.split('=');
                let obj = {
                    name: sa[0].trim(),
                    annotation: {}
                };
                if (sa.length > 1) {
                    let v = sa[1].trim();
                    if ((ind = v.indexOf(',')) > 0) {
                        v = v.substr(0, ind);
                    }
                    obj.value = v;
                }
                obj.annoStr = re[0].trim();
                util_1.Util.handleAnnotation(obj);
                props.push(obj);
            }
        }
        util_1.Util.sortName(props);
        let rObj = {
            name: enumName,
            type: 'enum',
            props: props,
            annoStr: annoStr,
            annotation: {}
        };
        util_1.Util.handleAnnotation(rObj);
        return rObj;
    }
    /**
     * 写文件
     * @param cObj
     */
    write(cObj) {
        const pathMdl = require('path');
        const fsMdl = require('fs');
        let writeStr = '';
        let dstPath = util_1.Util.wholeConfig.dst;
        let fn = pathMdl.resolve(dstPath, cObj.name + '.md');
        //类名
        writeStr = util_1.Util.addLine(writeStr, '# Enum ' + cObj.name);
        //类描述
        writeStr = util_1.Util.addLine(writeStr, '## ' + util_1.Util.tips.desc);
        //开始于
        let psince = cObj.annotation['since'] || util_1.Util.wholeConfig.defaultSince;
        if (psince) {
            writeStr = util_1.Util.addLine(writeStr, '<font class="since">' + util_1.Util.tips.since + ':v' + psince + '</font>');
        }
        //删除since
        delete cObj.annotation['since'];
        for (let o in cObj.annotation) {
            if (o !== 'default') {
                writeStr = util_1.Util.addLine(writeStr, '### ' + o);
            }
            writeStr = util_1.Util.addLine(writeStr, cObj.annotation[o]);
        }
        //枚举值
        if (cObj.props.length > 0) {
            //属性描述
            writeStr = util_1.Util.addLine(writeStr, '## ' + util_1.Util.tips.enumvalue);
            for (let p of cObj.props) {
                writeStr = util_1.Util.addLine(writeStr, '### <a id="PROP_' + p.name + '">' + p.name + '</a>');
                //开始于
                let since = p.annotation['since'] || psince || util_1.Util.wholeConfig.defaultSince;
                if (since) {
                    writeStr = util_1.Util.addLine(writeStr, '<font class="since">' + util_1.Util.tips.since + ':v' + since + '</font>');
                }
                delete p.annotation['since'];
                for (let o in p.annotation) {
                    if (o !== 'default') {
                        writeStr = util_1.Util.addLine(writeStr, '#### ' + o);
                    }
                    writeStr = util_1.Util.addLine(writeStr, p.annotation[o]);
                }
                if (p.value) {
                    writeStr = util_1.Util.addLine(writeStr, '### ' + util_1.Util.tips.initvalue);
                    writeStr = util_1.Util.addLine(writeStr, p.value);
                }
            }
        }
        fsMdl.writeFileSync(fn, writeStr);
    }
}
exports.EnumParser = EnumParser;
//# sourceMappingURL=enumparser.js.map