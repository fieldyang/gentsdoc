"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instancefactory_1 = require("./instancefactory");
const routefactory_1 = require("./route/routefactory");
const aopfactory_1 = require("./aopfactory");
const filterfactory_1 = require("../web/filterfactory");
const httprequest_1 = require("../web/httprequest");
const redisfactory_1 = require("../tools/redisfactory");
const errorfactory_1 = require("../tools/errorfactory");
const webconfig_1 = require("../web/webconfig");
const requestqueue_1 = require("../web/requestqueue");
const dbmanager_1 = require("../database/dbmanager");
const msg_zh_1 = require("../locales/msg_zh");
const msg_en_1 = require("../locales/msg_en");
const util_1 = require("../tools/util");
const application_1 = require("../tools/application");
const securityfactory_1 = require("../tools/securityfactory");
class Noomi {
    /**
     * @param port          //http port,默认 3000
     * @param sslPort       //https port，默认4000
     * @param configPath    //配置文件路径，默认 /config
     */
    constructor(port, configPath, sslPort) {
        this.port = port || 3000;
        this.sslPort = sslPort || 4000;
        application_1.App.configPath = configPath || '/config';
        this.init(application_1.App.configPath);
    }
    /**
     * 初始化
     */
    async init(basePath) {
        console.log('Server is startup ...');
        let iniJson = null;
        try {
            let iniStr = application_1.App.fs.readFileSync(util_1.Util.getAbsPath([basePath, 'noomi.json']), 'utf-8');
            iniJson = application_1.App.JSON.parse(iniStr);
        }
        catch (e) {
            throw new errorfactory_1.NoomiError("1001") + '\n' + e;
        }
        if (iniJson === null) {
            throw new errorfactory_1.NoomiError("1001");
        }
        application_1.App.appName = iniJson['app_name'] || 'APP';
        let language = iniJson['language'] || 'zh';
        let msgTip;
        switch (language) {
            case 'zh':
                msgTip = msg_zh_1.NoomiTip_zh;
                break;
            case 'en':
                msgTip = msg_en_1.NoomiTip_en;
                break;
        }
        //异常
        errorfactory_1.ErrorFactory.init(language);
        //设置是否集群
        application_1.App.isCluster = iniJson['cluster'] === true ? true : false;
        if (application_1.App.isCluster && iniJson['redis'] === undefined) {
            throw new errorfactory_1.NoomiError("0600");
        }
        //redis初始化
        if (iniJson.hasOwnProperty('redis')) {
            console.log(msgTip["0101"]);
            let cfg = iniJson['redis'];
            if (typeof cfg === 'object') { //配置为对象
                redisfactory_1.RedisFactory.init(cfg);
            }
            else { //配置为路径
                redisfactory_1.RedisFactory.parseFile(util_1.Util.getAbsPath([basePath, cfg]));
            }
            console.log(msgTip["0102"]);
        }
        //web config
        if (iniJson.hasOwnProperty('web')) {
            console.log(msgTip["0103"]);
            let cfg = iniJson['web'];
            if (typeof cfg === 'object') { //配置为对象
                webconfig_1.WebConfig.init(cfg);
            }
            else { //配置为路径
                webconfig_1.WebConfig.parseFile(util_1.Util.getAbsPath([basePath, cfg]));
            }
            console.log(msgTip["0104"]);
        }
        //实例初始化
        if (iniJson.hasOwnProperty('instance')) {
            console.log(msgTip["0105"]);
            let cfg = iniJson['instance'];
            if (typeof cfg === 'string') {
                cfg = util_1.Util.getAbsPath([basePath, cfg]);
            }
            instancefactory_1.InstanceFactory.init(cfg);
            console.log(msgTip["0106"]);
        }
        //filter初始化
        if (iniJson.hasOwnProperty('filter')) {
            console.log(msgTip["0107"]);
            let cfg = iniJson['filter'];
            if (typeof cfg === 'object') { //配置为对象
                filterfactory_1.FilterFactory.init(cfg);
            }
            else { //配置为路径
                filterfactory_1.FilterFactory.parseFile(util_1.Util.getAbsPath([basePath, cfg]));
            }
            console.log(msgTip["0108"]);
        }
        //路由初始化
        if (iniJson.hasOwnProperty('route')) {
            console.log(msgTip["0109"]);
            let cfg = iniJson['route'];
            if (typeof cfg === 'object') { //配置为对象
                routefactory_1.RouteFactory.init(cfg);
            }
            else { //配置为路径
                routefactory_1.RouteFactory.parseFile(util_1.Util.getAbsPath([basePath, cfg]));
            }
            console.log(msgTip["0110"]);
        }
        //数据源初始化
        if (iniJson.hasOwnProperty('database')) {
            console.log(msgTip["0111"]);
            let cfg = iniJson['database'];
            if (typeof cfg === 'object') { //配置为对象
                dbmanager_1.DBManager.init(cfg);
            }
            else { //配置为路径
                dbmanager_1.DBManager.parseFile(util_1.Util.getAbsPath([basePath, cfg]));
            }
            console.log(msgTip["0112"]);
        }
        //aop初始化
        if (iniJson.hasOwnProperty('aop')) {
            console.log(msgTip["0113"]);
            let cfg = iniJson['aop'];
            if (typeof cfg === 'object') { //配置为对象
                aopfactory_1.AopFactory.init(cfg);
            }
            else { //配置为路径
                aopfactory_1.AopFactory.parseFile(util_1.Util.getAbsPath([basePath, cfg]));
            }
            console.log(msgTip["0114"]);
        }
        //security初始化
        if (iniJson.hasOwnProperty('security')) {
            console.log(msgTip["0115"]);
            let cfg = iniJson['security'];
            if (typeof cfg === 'object') { //配置为对象
                await securityfactory_1.SecurityFactory.init(cfg);
            }
            else { //配置为路径
                await securityfactory_1.SecurityFactory.parseFile(util_1.Util.getAbsPath([basePath, cfg]));
            }
            console.log(msgTip["0116"]);
        }
        //如果web config 配置为only https，则不创建http server
        if (!webconfig_1.WebConfig.httpsCfg || !webconfig_1.WebConfig.httpsCfg['only_https']) {
            // http 服务器
            this.server = application_1.App.http.createServer((req, res) => {
                requestqueue_1.RequestQueue.handleOne(new httprequest_1.HttpRequest(req, res));
            }).listen(this.port, (e) => {
                console.log(`Http Server is running,listening port ${this.port}`);
                //启动队列执行
            }).on('error', (err) => {
                if (err.code === 'EADDRINUSE') {
                    console.log(msgTip["0118"]);
                    //1秒后重试
                    setTimeout(() => {
                        this.server.close();
                        this.server.listen(this.port);
                    }, 1000);
                }
            }).on('clientError', (err, socket) => {
                socket.end('HTTP/1.1 400 Bad Request\r\n');
            });
        }
        //https 服务器
        if (webconfig_1.WebConfig.useHttps) {
            this.httpsServer = require('https').createServer({
                key: application_1.App.fs.readFileSync(webconfig_1.WebConfig.httpsCfg['key_file']),
                cert: application_1.App.fs.readFileSync(webconfig_1.WebConfig.httpsCfg['cert_file'])
            }, (req, res) => {
                requestqueue_1.RequestQueue.handleOne(new httprequest_1.HttpRequest(req, res));
            }).listen(this.sslPort, (e) => {
                console.log(`Https Server is running,listening port ${this.sslPort}`);
                //启动队列执行
            }).on('error', (err) => {
                if (err.code === 'EADDRINUSE') {
                    console.log(msgTip["0118"]);
                    //1秒后重试
                    setTimeout(() => {
                        this.httpsServer.close();
                        this.httpsServer.listen(this.sslPort);
                    }, 1000);
                }
            }).on('clientError', (err, socket) => {
                socket.end('HTTP/1.1 400 Bad Request\r\n');
            });
        }
    }
}
exports.Noomi = Noomi;
/**
 * @param port          //http port,默认 3000
 * @param sslPort       //https port，默认4000
 * @param configPath    //配置文件路径，默认 /config
 */
function noomi(port, contextPath, sslPort) {
    return new Noomi(port, contextPath, sslPort);
}
exports.noomi = noomi;
//# sourceMappingURL=noomi.js.map