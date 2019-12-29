"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const transactionmanager_1 = require("./transactionmanager");
const util_1 = require("../tools/util");
/**
 * 连接管理器
 */
class SequelizeConnectionManager {
    constructor(cfg) {
        //使用cli-hooked
        // sequelize-typescript不支持cls，要用sequelize
        sequelize_1.Sequelize.useCLS(transactionmanager_1.TransactionManager.namespace);
        //处理models路径
        if (cfg.models && Array.isArray(cfg.models)) {
            cfg.models.forEach((item, i) => {
                if (typeof item === 'string') {
                    cfg.models[i] = util_1.Util.getAbsPath([item]);
                }
            });
        }
        this.sequelize = new sequelize_typescript_1.Sequelize(cfg);
    }
    /**
     * 获取连接
     */
    async getConnection() {
        return this.sequelize;
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
        if (this.sequelize) {
            this.sequelize.close();
        }
    }
}
exports.SequelizeConnectionManager = SequelizeConnectionManager;
//# sourceMappingURL=sequelizeconnectionmanager.js.map