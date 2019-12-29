"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transactionmanager_1 = require("./transactionmanager");
/**
 * 连接管理器
 */
class MongoConnectionManager {
    constructor(cfg) {
        this.dbMdl = require('mongodb');
        this.options = cfg;
    }
    /**
     * 获取连接
     */
    async getConnection() {
        let conn = transactionmanager_1.TransactionManager.getConnection();
        if (conn) {
            return conn;
        }
        const client = new this.dbMdl.MongoClient(this.options['url']);
        await client.connect();
        return client;
    }
    /**
     * 释放连接
     * @param conn
     */
    async release(conn) {
        if (!conn) {
            return;
        }
        conn.close();
    }
}
exports.MongoConnectionManager = MongoConnectionManager;
//# sourceMappingURL=mongoconnectionmanager.js.map