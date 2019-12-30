import{Parser} from './parser'

let parser:Parser = new Parser();
console.log('开始创建markdown文件...');
parser.parse('./src','./docs','/webroute/api/');
console.log('完成markdown文件创建!');