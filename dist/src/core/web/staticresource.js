"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webcache_1 = require("./webcache");
const webconfig_1 = require("./webconfig");
const util_1 = require("../tools/util");
const application_1 = require("../tools/application");
/**
 * 静态资源加载器
 */
class StaticResource {
    /**
     *
     * @param path      文件路径
     * @param request   request
     * @param response  response
     */
    static async load(request, response, path) {
        let finded = false;
        //检测路径是否在static map中
        for (let p of this.staticMap) {
            if (p[1].test(path)) {
                finded = true;
                break;
            }
        }
        if (!finded) {
            return 404;
        }
        let errCode;
        let data; //file data
        let mimeType; //mimetype
        //静态资源
        let filePath = util_1.Util.getAbsPath([path]);
        if (webconfig_1.WebConfig.useServerCache) { //从缓存取，如果用浏览器缓存数据，则返回0，不再操作
            let ro = await webcache_1.WebCache.load(request, response, path);
            if (ro === 0) {
                //回写没修改标志
                response.writeToClient({
                    statusCode: 304
                });
            }
            else if (ro !== undefined) {
                data = ro['data'];
                mimeType = ro['type'];
            }
        }
        if (data === undefined) { //读取文件
            if (!application_1.App.fs.existsSync(filePath) || !application_1.App.fs.statSync(filePath).isFile()) {
                errCode = 404;
            }
            else {
                let cacheData;
                //存到cache
                if (webconfig_1.WebConfig.useServerCache) {
                    cacheData = await webcache_1.WebCache.add(path, filePath, response);
                }
                //文件流输出
                if (cacheData === undefined) {
                    mimeType = application_1.App.mime.getType(filePath);
                    let stream = application_1.App.fs.createReadStream(filePath);
                    response.writeStreamToClient({
                        data: stream,
                        type: mimeType
                    });
                }
                else {
                    response.writeToClient({
                        data: cacheData['data'],
                        type: cacheData['type']
                    });
                }
            }
        }
        return errCode || 0;
    }
    /**
     * 添加静态路径
     * @param paths   待添加的目录或目录数组
     */
    static addPath(paths) {
        if (!Array.isArray(paths)) {
            if (typeof paths === 'string') {
                if (application_1.App.fs.existsSync(util_1.Util.getAbsPath([paths]))) {
                    this.staticMap.set(paths, util_1.Util.toReg(paths, 1));
                }
            }
        }
        else {
            paths.forEach(item => {
                if (typeof item === 'string') {
                    this.addPath(item);
                }
            });
        }
    }
}
exports.StaticResource = StaticResource;
StaticResource.staticMap = new Map(); //forbidden path map
//# sourceMappingURL=staticresource.js.map