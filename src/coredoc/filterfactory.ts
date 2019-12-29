import { InstanceFactory } from "./instancefactory";
import { NoomiError } from "./errorfactory";
import { Util } from "./util";
import { App } from "./application";
import { HttpRequest } from "./httprequest";
import { HttpResponse } from "./httpresponse";

interface FilterConfig{
    /**
     * 实例名(与instance二选一)
     */
    instance_name?:string; 
    /**
     * 方法名,默认do
     */ 
    method_name?:string;
    /**
     * 正则表达式串，或数组
     */ 
    url_pattern?:string|Array<string>;
    /**
     * 实例
     */     
    instance?:any;  
     /**
     * 优先级，越小越高
     */      
    order?:number;
}


interface Filter{
     /**
     * 实例或实例名
     */
    instance:any; 
     /**
     * 方法名
     */          
    method:string;  
     /**
     * 正则表达式
     */  
    patterns:Array<RegExp>; 
     /**
     * 优先级，越小越高，默认100000
     */
    order:number; 
}



/**
 * 过滤器工厂类
 */
class FilterFactory{
    static filters:Array<Filter> = [];
    
    /**
     * 添加过滤器到工厂
     * @param name          过滤器名
     * @param instanceName  实例名
     */
    static addFilter(cfg:FilterConfig):void{
        let ins:any = cfg.instance || cfg.instance_name;
        let ptns:Array<RegExp> = [];
        if(!cfg.url_pattern){
            ptns = [/^\/*/];
        }else if(Array.isArray(cfg.url_pattern)){ 
            cfg.url_pattern.forEach((item)=>{
                ptns.push(Util.toReg(item));
            });
        }else{ 
            ptns.push(Util.toReg(cfg.url_pattern));
        }
        
        this.filters.push({
            instance:ins,
            method:cfg.method_name || 'do', 
            patterns:ptns,
            order:cfg.order===undefined?10000:cfg.order
        });

        this.filters.sort((a,b)=>{
            return a.order - b.order;
        });
    }

    /**
     * 文件解析
     * @param path  filter的json文件
     */
    static parseFile(path:string):void{
        //读取文件
        let jsonStr:string = App.fs.readFileSync(path,'utf-8');
        let json:object = null;
        try{
            json = App.JSON.parse(jsonStr);
        }catch(e){
            throw new NoomiError("2200") + '\n' + e;
        }
        this.init(json);
    }

    /**
     * 初始化
     * @param config 
     */
    static init(config){
        //处理filters
        if(Array.isArray(config.filters)){
            config.filters.forEach((item:FilterConfig)=>{
                this.addFilter(item);
            });
        }
    }
    /**
     * 获取过滤器链
     * @param url   url
     * @returns  filter名数组
     */
    static getFilterChain(url:string):Array<Filter>{
        let arr:Array<Filter> = [];
        this.filters.forEach((item:Filter)=>{
            let reg:RegExp;
            for(reg of item.patterns){
                //找到匹配
                if(reg.test(url)){
                    arr.push(item);
                    return;
                }
            }
        });
        return arr;
    }

    /**
     * 执行过滤器链
     * @param url       url路径
     * @param request   httprequest    
     * @param response  httpresponse
     * @param           promise boolean
     */
    static async doChain(url:string,request:HttpRequest,response:HttpResponse):Promise<boolean>{
        let arr:Array<Filter> = FilterFactory.getFilterChain(url);
        if(arr.length === 0){
            return true;
        }
        let methods:Array<Function> = [];
        arr.forEach(item=>{
            let ins = typeof item.instance === 'string'? InstanceFactory.getInstance(item.instance):item.instance;
            if(!ins){
                return;
            }
            if(typeof ins[item.method] === 'function'){
                methods.push(ins[item.method]);
            }
        });

        for(let i=0;i<methods.length;i++){
            if(!await methods[i](request,response)){
                return false;
            }
        }
        return true;
    }
}

export{FilterFactory}