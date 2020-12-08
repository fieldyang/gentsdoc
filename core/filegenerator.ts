import { Parser } from "./parser";

class FileGenerator{
    /**
     * 生成markdown files
     * @param cfg   全局配置
    */
    static genMdFiles(cfg){
        new Parser().parse(cfg);
    }
  
  /**
   * markdown file to html
   * @param cfg   全局配置 
   */
  static markToHtml(cfg){
      const marked = require('marked');
      marked.setOptions({
          highlight:function (code, lang) {
              return require('highlight').Highlight(code);
          }
      });
      let inputDir = cfg.dst;
      let outputDir = cfg.html.dst;
      let apiHtml = '';
      handleDir(inputDir,outputDir);
      this.genHtmlFile(cfg,apiHtml);
      
      /**
       * 处理markdown 目录
       * @param srcDir        源目录
       * @param outputDir     输出目录
       */
      function handleDir(srcDir,outputDir){
          const marked = require('marked');
          const fsMdl = require('fs');
          const dir = fsMdl.readdirSync(srcDir,{withFileTypes:true});
          if(!fsMdl.existsSync(outputDir)){
              fsMdl.mkdirSync(outputDir);
          }
          for (const dirent of dir) {
              if(dirent.isDirectory()){
                  handleDir(srcDir + '/' + dirent.name,outputDir + '/' + dirent.name);
              }else if(dirent.isFile() && dirent.name.indexOf('.md') !== -1){
                  let data = fsMdl.readFileSync(srcDir + '/' + dirent.name,'utf8'); 
                  let title = dirent.name.substr(0,dirent.name.lastIndexOf('.'));
                  let fn =  + title + '.html';
                  apiHtml += `<div id='${title}'>${marked(data)}</div>\r\n<hr>`;
              }            
          }
      }
  }
  
  /**
   * 产生api html文件
   * @param cfg       全局配置
   * @param apiHtml   api内容
   */
  static genHtmlFile(cfg,apiHtml){
      const fs = require('fs');
      const pathMdl = require('path');
      
      let data = fs.readFileSync(pathMdl.resolve(cfg.dst,'data.json'));
      let json = JSON.parse(data);
      
      let linkHtml = '';
      
      if(json.funcs.length>0){
          linkHtml += `\t\t<div class='first'>Functions</div> \r\n`;
          for(let t of json.funcs){
              linkHtml += `\t\t\t<a href='#${t.title}'>${t.title}</a> \r\n`;
          }
      }
      if(json.enums.length>0){
          linkHtml += `\t\t<div class='first'>Enumerations</div> \r\n`;
          for(let t of json.enums){
              linkHtml += `\t\t\t<a href='#${t.title}'>${t.title}</a> \r\n`;
          }
      }
      
      if(json.interfaces.length>0){
          linkHtml += `\t\t<div class='first'>Interfaces</div> \r\n`;
          for(let t of json.interfaces){
              linkHtml += `\t\t\t<a href='#${t.title}'>${t.title}</a> \r\n`;
          }
      }
      
      if(json.classes.length>0){
          linkHtml += `\t\t<div class='first'>Classes</div> \r\n`;
          for(let t of json.classes){
              linkHtml += `\t\t\t<a href='#${t.title}'>${t.title}</a> \r\n`;
          }
      }
      
      let gitcss = fs.readFileSync(pathMdl.resolve(__dirname,'..','css','github.css'));
      let gencss = fs.readFileSync(pathMdl.resolve(__dirname,'..','css','gents.css'));
  
      //index.html
      let htmlTitle = cfg.html.title || 'Gentsdoc';
      let html = `
  <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" generator='gentsdoc tool'>
          <title>API-${htmlTitle}</title>
          <style>
              ${gitcss}
              ${gencss}
          </style>
      </head>
      <body>
      <div class='gentsdoc'>
      <div class='nav'>
          ${linkHtml}
      </div>
      <div class='container'>
          <a href='javascript:scrollTo(0,0)' class='totop'>⬆</a>
          ${apiHtml}
      </div>
      </div>
      </body>
  </html>
  `;
  
      //写文件
      fs.writeFileSync(pathMdl.resolve(cfg.html.dst,'api.html'),html);
  }
  
}

export {FileGenerator}