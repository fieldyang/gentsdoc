"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser");
let parser = new parser_1.Parser();
console.log('开始创建markdown文件...');
parser.parse('./src', './docs');
console.log('完成markdown文件创建!');
//# sourceMappingURL=index.js.map