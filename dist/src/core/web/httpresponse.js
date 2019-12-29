"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const httpcookie_1 = require("./httpcookie");
const webconfig_1 = require("./webconfig");
class HttpResponse extends http_1.ServerResponse {
    constructor() {
        super(...arguments);
        this.cookie = new httpcookie_1.HttpCookie(); //cookie
    }
    init(req, res) {
        this.request = req;
        this.srcRes = res;
    }
    /**
     * 回写到浏览器端
     * @param data          待写数据
     * @param charset       字符集
     * @param type          MIME类型
     * @param crossDomain   跨域串
     */
    writeToClient(config) {
        let data = config.data || '';
        if (typeof data === 'object') {
            data = JSON.stringify(data);
        }
        let charset = config.charset || 'utf8';
        let status = config.statusCode || 200;
        let type = config.type || 'text/html';
        //设置cookie
        this.writeCookie();
        let headers = {};
        let crossDomain = config.crossDomain || webconfig_1.WebConfig.crossDomain;
        //跨域
        if (config.crossDomain || webconfig_1.WebConfig.crossDomain) {
            headers['Access-Control-Allow-Origin'] = crossDomain;
            headers['Access-Control-Allow-Headers'] = 'Content-Type,x-requested-with';
            headers['Access-Control-Allow-Credentials'] = 'true';
        }
        //contenttype 和 字符集
        headers['Content-Type'] = type + ';charset=' + charset;
        //数据长度
        headers['Content-Length'] = Buffer.byteLength(data);
        this.srcRes.writeHead(status, headers);
        this.srcRes.write(data, charset);
        this.srcRes.end();
    }
    /**
     * 写数据流
     * @param config
     */
    writeStreamToClient(config) {
        let charset = config.charset || 'utf8';
        let status = config.statusCode || 200;
        let type = config.type || 'text/html';
        //设置cookie
        this.writeCookie();
        let headers = {};
        //跨域
        if (config.crossDomain) {
            headers['Access-Control-Allow-Origin'] = '*';
            headers['Access-Control-Allow-Headers'] = 'Content-Type';
        }
        //contenttype 和 字符集
        headers['Content-Type'] = type + ';charset=' + charset;
        let stream = config.data;
        //数据长度
        this.srcRes.writeHead(status, headers);
        stream.on('data', (chunk) => {
            this.srcRes.write(chunk);
        });
        stream.on('end', () => {
            this.srcRes.end();
        });
    }
    /**
     * 设置header
     * @param key       键
     * @param value     值
     */
    setHeader(key, value) {
        this.srcRes.setHeader(key, value);
    }
    /**
     * 写header
     * @param key
     * @return     返回值
     */
    getHeader(key) {
        return this.srcRes.getHeader(key);
    }
    /**
     * 重定向
     * @param response
     * @param page          跳转路径
     */
    redirect(page) {
        this.writeCookie();
        this.srcRes.writeHead(302, {
            'Location': page,
            'Content-Type': 'text/html'
        });
        this.srcRes.end();
    }
    /**
     * 写cookie到头部
     */
    writeCookie() {
        let kvs = this.cookie.getAll();
        let str = '';
        for (let kv of kvs) {
            str += kv[0] + '=' + kv[1] + ';';
        }
        if (str !== '') {
            str += 'Path=/';
            this.srcRes.setHeader('Set-Cookie', str);
        }
        return str;
    }
}
exports.HttpResponse = HttpResponse;
//# sourceMappingURL=httpresponse.js.map