let regMethod = /^\s*(public|private)?(static)?.*\([\s\S]*\)(:\S+)?\s?/;
const regClass = /^\s*(export\s*)?(default\s*)?\s*(class|interface)\s+\S+\s*\{?/;
// let regMethod = /^\s*(public|private)?(static)?.*\([\s\S]*\)(:\S+)?\s?/;
let reg = /^\s*\S+(\s+\S+)*?\s*(\=\s*\S+)?[\n\r;]/;
// console.log(regMethod.exec("static dynaRouteArr:RouteCfg[] = new Array();"));
// console.log(regMethod.exec("static addRoute(path:string,clazz:string,method?:string,results?:Array<RouteResult>) {"));
console.log(regClass.exec('export class NCache{'));