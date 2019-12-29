"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
}
exports.App = App;
App.appName = 'APP'; //应用名
App.http = require('http');
App.fs = require('fs');
App.path = require('path');
App.url = require('url');
App.mime = require('mime');
App.uuid = require('uuid');
App.util = require('util');
App.qs = require('querystring');
App.crypto = require('crypto');
App.redis = require('redis');
App.JSON = require('json5');
App.isCluster = false; //应用是否部署为为集群
//# sourceMappingURL=application.js.map