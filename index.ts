import { FileGenerator } from './core/filegenerator';

console.log("Generating files ...");
    let r = require('fs').readFileSync(require('path').posix.resolve("genconfig.json"), 'utf8');
    let obj;
    try{
        obj = require('json5').parse(r);
    }catch(e){
        console.log("Config file is wrong,generating file failure!");
    }
    FileGenerator.genMdFiles(obj);
    if(obj.html){
        FileGenerator.markToHtml(obj);   
    }
    console.log("Generate files successfully!");
