"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const util_1 = require("../tools/util");
/**
 * 连接管理器
 */
class TypeormConnectionManager {
    constructor(cfg) {
        if (cfg.entities) {
            cfg.entities.forEach((item, i) => {
                if (typeof item === 'string') {
                    cfg.entities[i] = util_1.Util.getAbsPath([item]);
                }
            });
        }
        this.connection = typeorm_1.getConnectionManager().create(cfg);
    }
    /**
     * 获取连接
     */
    async getConnection() {
        if (!this.connection.isConnected) {
            await this.connection.connect();
        }
        return this.connection;
    }
    /**
     *  获取manager
     */
    async getManager() {
        let conn = await this.getConnection();
        return conn.manager;
    }
    /**
     * 释放连接
     * @param conn
     */
    async release(conn) {
    }
    /**
     * 关闭连接
     */
    async close() {
        if (this.connection) {
            this.connection.close();
        }
    }
}
exports.TypeormConnectionManager = TypeormConnectionManager;
//# sourceMappingURL=typeormconnectionmanager.js.map