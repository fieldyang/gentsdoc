#!/usr/bin/env node
process.title = 'gentsdoc';
const program = require('commander');
let version = require('../package').version;

program.version(version,'','show version')
.option('-i, --init','init config file genconfig.json')
.option('-g, --gen','gen markdown files');

program.helpOption('','show help');
program.parse(process.argv);
if(program.init){  //npm 源安装
    initConfigFile();
}else if(program.gen){ //生成markdown
    genFiles();
}

/**
 * 初始化配置文件
 */
function initConfigFile(){
    const fs = require('fs');
    let datas = fs.readFileSync(require('path').resolve(__dirname,'genconfig.json'));
    fs.writeFileSync("genconfig.json",datas,{encoding:'utf8',flag:'w'});
}

/**
 * 创建文件
 */
function genFiles(){
    const FileGen = require("./core/filegenerator").FileGenerator;
    // let parser:Parser = new Parser();
    console.log("Generating files ...");
    let r = require('fs').readFileSync(require('path').posix.resolve("genconfig.json"), 'utf8');
    let obj;
    try {
        obj = require('json5').parse(r);
    }
    catch (e) {
        console.log("Config file is wrong,generating file failure!");
    }
    FileGen.genMdFiles(obj);
    if (obj.html) {
        FileGen.markToHtml(obj);
    }
    console.log("Generate files successfully!");
}
