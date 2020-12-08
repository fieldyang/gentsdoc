"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filegenerator_1 = require("./core/filegenerator");
console.log("Generating files ...");
let r = require('fs').readFileSync(require('path').posix.resolve("genconfig.json"), 'utf8');
let obj;
try {
    obj = require('json5').parse(r);
}
catch (e) {
    console.log("Config file is wrong,generating file failure!");
}
filegenerator_1.FileGenerator.genMdFiles(obj);
if (obj.html) {
    filegenerator_1.FileGenerator.markToHtml(obj);
}
console.log("Generate files successfully!");
//# sourceMappingURL=index.js.map