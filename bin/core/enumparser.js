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
        const regProp = /^\s*\S+(:?\s*\S+)?(\=\s*\S+)?,?/;
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
                if (line.charAt(line.length - 1) === '}') {
                    line = line.substr(0, line.length - 1);
                }
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
                let obj = this.handleProp(line);
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
        //描述
        writeStr = util_1.Util.addLine(writeStr, '## ' + util_1.Util.tips.desc);
        //开始于
        let psince = cObj.annotation['since'] || util_1.Util.wholeConfig.defaultSince;
        if (psince) {
            writeStr = util_1.Util.addLine(writeStr, '<font class="since">' + util_1.Util.tips.since + ' : v' + psince + '</font>');
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
                writeStr = util_1.Util.addLine(writeStr, '#### ' + p.name);
                //开始于
                let since = p.annotation['since'];
                if (since) {
                    writeStr = util_1.Util.addLine(writeStr, '<font class="since">' + util_1.Util.tips.since + ' : v' + since + '</font>');
                }
                delete p.annotation['since'];
                for (let o in p.annotation) {
                    if (o !== 'default') {
                        writeStr = util_1.Util.addLine(writeStr, '##### ' + o);
                    }
                    writeStr = util_1.Util.addLine(writeStr, p.annotation[o]);
                }
                if (p.type) {
                    writeStr = util_1.Util.addLine(writeStr, '#### ' + util_1.Util.tips.datatype);
                    let pt = util_1.Util.genLink(p.type);
                    writeStr = util_1.Util.addLine(writeStr, pt);
                }
                if (p.value) {
                    writeStr = util_1.Util.addLine(writeStr, '##### ' + util_1.Util.tips.initvalue);
                    writeStr = util_1.Util.addLine(writeStr, p.value);
                }
            }
        }
        fsMdl.writeFileSync(fn, writeStr);
    }
    /**
     * 处理属性
     * @param srcStr    源串
     * @returns         {name:属性名,need:不可选,type:类型}
     */
    handleProp(srcStr) {
        //去掉最后一个;
        let ind = srcStr.indexOf(',');
        if (ind === srcStr.length - 1) {
            srcStr = srcStr.substr(0, srcStr.length - 1);
        }
        let a = srcStr.split(':');
        let name;
        let type;
        let value;
        name = a[0].trim();
        if (a.length > 1) {
            type = a[1].trim();
        }
        //处理 =
        if ((ind = name.indexOf('=')) !== -1) {
            value = name.substr(ind + 1).trim();
            name = name.substr(0, ind).trim();
        }
        if (type) {
            if ((ind = type.indexOf('=')) !== -1) {
                value = type.substr(ind + 1).trim();
                type = type.substr(0, ind).trim();
            }
        }
        let sa = name.split(' ');
        name = sa[sa.length - 1];
        return {
            name: name,
            type: type,
            value: value,
            annotation: {}
        };
    }
}
exports.EnumParser = EnumParser;
//# sourceMappingURL=enumparser.js.map