import{Parser} from './parser'

let parser:Parser = new Parser();
console.log('开始创建markdown文件...');
parser.parse({
    src:'./src',
    dst:'./docs',
    baseUrl:'/webroute/api/',
    fileSuffix:'',          //路径后缀名
    showPrivate:true,       //释放显示私有属性和方法
    defaultSince:'0.0.1',   //默认版本号
});
console.log('完成markdown文件创建!');