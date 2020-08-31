"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const util_1 = require("./util");
const classparser_1 = require("./classparser");
const enumparser_1 = require("./enumparser");
const functionparser_1 = require("./functionparser");
/**
 * 解析器
 */
class Parser {
    constructor() {
        /**
         * 解析器实例集合
         */
        this.parsers = [new classparser_1.ClassParser(), new functionparser_1.FunctionParser(), new enumparser_1.EnumParser()];
        /**
         * 类集合
         */
        this.classes = [];
        /**
         * 函数集合
         */
        this.functions = [];
        /**
         * enum集合
         */
        this.enums = [];
    }
    /**
     * 解析
     * @param cfg   解析初始化配置
     */
    parse(cfg) {
        let srcPath = cfg.src;
        let dstPath = cfg.dst;
        const fsMdl = require('fs');
        const pathMdl = require('path');
        util_1.Util.wholeConfig = cfg;
        let tipfn;
        if (cfg.language === 'en') {
            tipfn = pathMdl.resolve(__dirname, '../locales/msg_en.json');
        }
        else {
            tipfn = pathMdl.resolve(__dirname, '../locales/msg_zh.json');
        }
        //提示
        util_1.Util.tips = require('json5').parse(fsMdl.readFileSync(tipfn, 'utf8'));
        this.handleDir(srcPath);
        if (!fsMdl.existsSync(util_1.Util.wholeConfig.src)) {
            throw new Error('file is not exist');
        }
        //删除重建dst目录
        if (fsMdl.existsSync(dstPath)) {
            fsMdl.rmdirSync(dstPath, { recursive: true });
        }
        fsMdl.mkdirSync(dstPath, { recursive: true });
        //json文件，构建标题和url
        let jsonObj = {
            funcs: [],
            classes: [],
            interfaces: [],
            enums: []
        };
        //类名排序
        util_1.Util.sortName(this.classes);
        //外部函数排序
        util_1.Util.sortName(this.functions);
        //枚举名排序
        util_1.Util.sortName(this.enums);
        //处理函数注释
        for (let i = 0; i < this.functions.length; i++) {
            let fObj = this.functions[i];
            jsonObj.funcs.push({
                title: fObj.name,
                url: util_1.Util.genLinkUrl(fObj.name)
            });
        }
        //处理类
        for (let i = 0; i < this.classes.length; i++) {
            let cObj = this.classes[i];
            util_1.Util.addType(cObj);
            let obj = {
                title: cObj.name,
                url: util_1.Util.genLinkUrl(cObj.name)
            };
            //接口和类分别存储
            if (cObj.type === 'interface') {
                jsonObj.interfaces.push(obj);
            }
            else {
                jsonObj.classes.push(obj);
            }
        }
        //处理枚举
        for (let i = 0; i < this.enums.length; i++) {
            let fObj = this.enums[i];
            util_1.Util.addType(fObj);
            jsonObj.enums.push({
                title: fObj.name,
                url: util_1.Util.genLinkUrl(fObj.name)
            });
        }
        //写json文件
        fsMdl.writeFileSync(pathMdl.resolve(dstPath, "data.json"), JSON.stringify(jsonObj));
        //写class
        for (let cObj of this.classes) {
            this.parsers[0].write(cObj);
        }
        //写函数
        for (let cObj of this.functions) {
            this.parsers[1].write(cObj);
        }
        //写enum
        for (let cObj of this.enums) {
            this.parsers[2].write(cObj);
        }
    }
    /**
     * 处理目录结构
     * @param dirPath   目录路径
     * @returns         void
     */
    handleDir(dirPath) {
        const fsMdl = require('fs');
        const pathMdl = require('path');
        const dir = fsMdl.readdirSync(dirPath, { withFileTypes: true });
        for (const dirent of dir) {
            if (dirent.isDirectory()) {
                this.handleDir(pathMdl.resolve(dirPath, dirent.name));
            }
            else if (dirent.isFile()) {
                this.handleFile(pathMdl.resolve(dirPath, dirent.name));
            }
        }
    }
    /**
     * 处理单个文件
     * @param filePath  file路径
     * @returns         void
     */
    handleFile(filePath) {
        //存储所有类和接口
        const fsMdl = require('fs');
        let fileStr = fsMdl.readFileSync(filePath, 'utf8');
        //需要设置class关闭或方法关闭
        for (;;) {
            let re = util_1.Util.regNote.exec(fileStr);
            if (re === null) {
                break;
            }
            //截断注释
            fileStr = fileStr.substr(re.index + re[0].length);
            let parser;
            let minIndex = 10000000;
            for (let p of this.parsers) {
                let re = p.check(fileStr);
                if (re !== null && re.index < minIndex) {
                    minIndex = re.index;
                    parser = p;
                }
            }
            if (!parser) {
                return;
            }
            let block = util_1.Util.findBlockCode(fileStr);
            let src = block[0];
            //截断代码
            if (block[1] > 0) {
                fileStr = fileStr.substr(block[1]);
            }
            let obj = parser.parse(src, re[0].trim());
            switch (obj.type) {
                case 'class': //类
                    this.classes.push(obj);
                    break;
                case 'function': //函数
                    this.functions.push(obj);
                    break;
                case 'enum': //枚举
                    this.enums.push(obj);
                    break;
            }
        }
    }
}
exports.default = Parser;
exports.Parser = Parser;
//# sourceMappingURL=parser.js.map