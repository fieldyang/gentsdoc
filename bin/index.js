"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./core/parser");
let parser = new parser_1.Parser();
console.log('开始创建markdown文件...');
require('fs').readFile("genconfig.json", 'utf8', (err, data) => {
    if (err) {
        console.log("创建markdown文件失败！");
        throw err;
    }
    else {
        let obj = require('json5').parse(data);
        parser.parse(obj);
        console.log('完成markdown文件创建!');
    }
});
//# sourceMappingURL=index.js.map