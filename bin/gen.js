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
    genMdFiles();
}

/**
 * 初始化配置文件
 */
function initConfigFile(){
    let datas = `{
        //语言 zh(中文) en(英文)
        "language":"zh",
        //源ts文件目录
        "src":"./src",
        //存储markdown文件的目录
        "dst":"./docs",
        //api基础路径，生成文件内部和文件间超链接时需要
        "baseUrl":"/api/", 
        //路径后缀名，比如".html"，如果最后由markdown文件生成html文件，则可能需要url指向为html文件
        "fileSuffix":"",            
        //是否显示私有属性和方法
        "showPrivate":true,         
        //默认版本号，如果有@since，则显示@since值，否则显示defaultSince，如果不设置，则不显示
        "defaultSince":"0.0.1"
    }`;
    const fs = require('fs');
    fs.writeFileSync("genconfig.json",datas,{encoding:'utf8',flag:'w'});
}

/**
 * 生成markdown files
 */
function genMdFiles(){
    console.log('generating markdown files...');
    require('fs').readFile("genconfig.json", 'utf8', (err, data) => {
        if (err) {
            console.log("generate markdown files failure！");
            throw err;
        }
        else {
            let obj = require('json5').parse(data);
            const parser_1 = require("./parser");
            let parser = new parser_1.Parser();
            parser.parse(obj);
            console.log('generate markdown files successfully!');
        }
    });    
}
