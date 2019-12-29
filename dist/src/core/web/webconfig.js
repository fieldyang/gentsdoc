"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webcache_1 = require("./webcache");
const errorfactory_1 = require("../tools/errorfactory");
const sessionfactory_1 = require("./sessionfactory");
const application_1 = require("../tools/application");
const pagefactory_1 = require("../tools/pagefactory");
const staticresource_1 = require("./staticresource");
const util_1 = require("../tools/util");
/**
 * web 配置
 */
class WebConfig {
    /**
     * 获取参数
     * @param name
     */
    static get(name) {
        if (!this.config || !this.config.hasOwnProperty(name)) {
            return null;
        }
        return this.config[name];
    }
    static init(config) {
        if (config.hasOwnProperty('web_config')) {
            let cfg = config['web_config'];
            //static path
            if (cfg.hasOwnProperty('static_path')) {
                staticresource_1.StaticResource.addPath(cfg['static_path']);
            }
            this.crossDomain = cfg['cross_domain'];
            this.welcomePage = cfg['welcome'];
            this.config = cfg;
            //cache
            if (cfg.cache === true) {
                let opt = cfg.cache_option;
                WebConfig.useServerCache = true;
                webcache_1.WebCache.init({
                    save_type: opt.save_type,
                    max_age: opt.max_age,
                    max_size: opt.max_size,
                    max_single_size: opt.max_single_size,
                    public: opt.public,
                    no_cache: opt.no_cache,
                    no_store: opt.no_store,
                    file_type: opt.file_type
                });
            }
        }
        if (config.hasOwnProperty('session')) {
            sessionfactory_1.SessionFactory.init(config['session']);
        }
        //errorPage
        if (config.hasOwnProperty('error_page')) {
            this.setErrorPages(config['error_page']);
        }
        //https 配置
        if (config.hasOwnProperty('https')) {
            let opt = config['https'];
            if (opt['key_file'] && typeof opt['key_file'] === 'string' && opt['key_file'] !== ''
                && opt['cert_file'] && typeof opt['cert_file'] === 'string' && opt['cert_file'] !== '') {
                this.useHttps = true;
                this.httpsCfg = {
                    'only_https': opt['only_https'],
                    'key_file': util_1.Util.getAbsPath([opt['key_file']]),
                    'cert_file': util_1.Util.getAbsPath([opt['cert_file']])
                };
            }
        }
    }
    /**
     * 解析路由文件
     * @param path  文件路径
     * @param ns    命名空间，默认 /
     */
    static parseFile(path) {
        //读取文件
        let json;
        try {
            let jsonStr = application_1.App.fs.readFileSync(path, 'utf-8');
            json = application_1.App.JSON.parse(jsonStr);
        }
        catch (e) {
            throw new errorfactory_1.NoomiError("2100") + '\n' + e;
        }
        this.init(json);
    }
    /**
     * 设置异常提示页面
     * @param pages page配置（json数组）
     */
    static setErrorPages(pages) {
        if (Array.isArray(pages)) {
            pages.forEach((item) => {
                //需要判断文件是否存在
                if (application_1.App.fs.existsSync(util_1.Util.getAbsPath([item['location']]))) {
                    pagefactory_1.PageFactory.addErrorPage(item['code'], item['location']);
                }
            });
        }
    }
}
exports.WebConfig = WebConfig;
WebConfig.useServerCache = false; //是否使用cache
//# sourceMappingURL=webconfig.js.map