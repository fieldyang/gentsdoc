import { WebCache } from "./webcache";
import { NoomiError } from "./errorfactory";
import { SessionFactory } from "./sessionfactory";
import { App } from "./application";
import { PageFactory } from "./pagefactory";
import { StaticResource } from "./staticresource";
import { Util } from "./util";

/**
 * web 配置
 */
export class WebConfig{
    /**
     * 参数
     */
    static config:any;
    /**
     * 是否是https
     */
    static useHttps:boolean;
    /**
     * 是否使用cache,默认fasle
     */
    static useServerCache:boolean = false; 
    /**
     * httpsCfg
     */ 
    static httpsCfg:object;
    /**
     * 跨域域名
     */
    static crossDomain:string; 
    /**
     * 欢迎页面
     */             
    static welcomePage:string;              
    /**
     * 获取参数
     * @param name 
     */
    static get(name:string){
        if(!this.config || !this.config.hasOwnProperty(name)){
            return null;
        }
        return this.config[name];
    }

    static init(config:any){
        if(config.hasOwnProperty('web_config')){
            let cfg:any = config['web_config'];
            //static path
            if(cfg.hasOwnProperty('static_path')){
                StaticResource.addPath(cfg['static_path']);
            }
            this.crossDomain = cfg['cross_domain'];
            this.welcomePage = cfg['welcome'];
            this.config = cfg;
            //cache
            if(cfg.cache === true){
                let opt = cfg.cache_option;
                WebConfig.useServerCache = true;
                WebCache.init({
                    save_type:opt.save_type,
                    max_age:opt.max_age,
                    max_size:opt.max_size,
                    max_single_size:opt.max_single_size,
                    public:opt.public,
                    no_cache:opt.no_cache,
                    no_store:opt.no_store,
                    file_type:opt.file_type
                });
            }
        }

        if(config.hasOwnProperty('session')){
            SessionFactory.init(config['session']);    
        }

        //errorPage
        if(config.hasOwnProperty('error_page')){
            this.setErrorPages(config['error_page']);
        }

        //https 配置
        if(config.hasOwnProperty('https')){
            let opt = config['https'];
            if(opt['key_file'] && typeof opt['key_file'] === 'string' && opt['key_file'] !== ''
               && opt['cert_file'] && typeof opt['cert_file'] === 'string' && opt['cert_file'] !== ''){
                this.useHttps = true;
                this.httpsCfg = {
                    'only_https':opt['only_https'],
                    'key_file':Util.getAbsPath([opt['key_file']]),
                    'cert_file':Util.getAbsPath([opt['cert_file']])
                }; 
            }
        }
    }

    /**
     * 解析路由文件
     * @param path  文件路径
     * @param ns    命名空间，默认 /
     */
    static parseFile(path:string){
        //读取文件
        let json:any;
        try{
            let jsonStr:string = App.fs.readFileSync(path,'utf-8');
            json = App.JSON.parse(jsonStr);
        }catch(e){
            throw new NoomiError("2100") + '\n' + e;
        }
        this.init(json);
    }

    /**
     * 设置异常提示页面
     * @param pages page配置（json数组）
     */
    static setErrorPages(pages:Array<object>){
        if(Array.isArray(pages)){
            pages.forEach((item)=>{
                //需要判断文件是否存在
                if(App.fs.existsSync(Util.getAbsPath([item['location']]))){
                    PageFactory.addErrorPage(item['code'],item['location']);
                }
            });
        }
    }
    
}