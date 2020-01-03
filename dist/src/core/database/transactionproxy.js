"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbmanager_1 = require("./dbmanager");
const transactionmanager_1 = require("./transactionmanager");
const connectionmanager_1 = require("./connectionmanager");
const instancefactory_1 = require("../main/instancefactory");

/**
 * 事务Aop代理
 * @remarks
 * 用于事务方法代理
 */
class TransactionProxy {
    /**
     * 代理方法
     * @param instanceName  实例名
     * @param methodName    方法名
     * @param func          执行函数
     * @param instance      实例
     */
    static invoke(instanceName, methodName, func, instance) {
        return async (params) => {
            let retValue;
            switch (dbmanager_1.DBManager.product) {
                case 'sequelize':
                    retValue = await new Promise(async (resolve, reject) => {
                        transactionmanager_1.TransactionManager.namespace.run(async () => {
                            let v = await doSequelize();
                            resolve(v);
                        });
                    });
                    break;
                case 'typeorm':
                    retValue = await new Promise(async (resolve, reject) => {
                        transactionmanager_1.TransactionManager.namespace.run(async () => {
                            let v = await doTypeorm();
                            resolve(v);
                        });
                    });
                    break;
                default: //datasource
                    retValue = await new Promise((resolve, reject) => {
                        transactionmanager_1.TransactionManager.namespace.run(async () => {
                            let v = await doDataScource();
                            resolve(v);
                        });
                    });
            }
            if (retValue instanceof Error) {
                throw retValue;
            }
            return retValue;
            /**
             * 数据源处理
             */
            async function doDataScource() {
                if (!transactionmanager_1.TransactionManager.getIdFromLocal()) {
                    //保存transaction id
                    transactionmanager_1.TransactionManager.setIdToLocal();
                }
                //advices获取
                let adviceInstance = instancefactory_1.InstanceFactory.getInstance('NoomiTransactionAdvice');
                let result;
                //before aop执行
                await adviceInstance.before.apply(adviceInstance);
                try {
                    result = await func.apply(instance, params);
                    //return aop执行
                    await adviceInstance.afterReturn.apply(adviceInstance);
                }
                catch (e) {
                    //异常aop执行
                    await adviceInstance.afterThrow.apply(adviceInstance);
                    result = e;
                }
                return result;
            }
            /**
             * sequelize 处理
             */
            async function doSequelize() {
                let result;
                if (!transactionmanager_1.TransactionManager.getIdFromLocal()) {
                    //保存transaction id
                    transactionmanager_1.TransactionManager.setIdToLocal();
                    let trOpt = transactionmanager_1.TransactionManager.transactionOption || {};
                    let sequelize = await connectionmanager_1.getConnection();
                    result = await new Promise((res, rej) => {
                        sequelize.transaction(trOpt, async (t) => {
                            let v = await func.apply(instance, params);
                            res(v);
                        }).catch((e) => {
                            res(e);
                        });
                    });
                }
                else {
                    try {
                        result = await func.apply(instance, params);
                    }
                    catch (e) {
                        result = e;
                    }
                }
                return result;
            }
            /**
             * typeorm 处理
             */
            async function doTypeorm() {
                let result;
                if (!transactionmanager_1.TransactionManager.getIdFromLocal()) {
                    //保存transaction id
                    transactionmanager_1.TransactionManager.setIdToLocal();
                    let isoLevel;
                    if (transactionmanager_1.TransactionManager.transactionOption) {
                        isoLevel = transactionmanager_1.TransactionManager.transactionOption.isolationLevel;
                    }
                    let conn = await connectionmanager_1.getConnection();
                    const queryRunner = conn.createQueryRunner();
                    await queryRunner.startTransaction(isoLevel);
                    let tr = transactionmanager_1.TransactionManager.get(true);
                    tr.manager = queryRunner.manager;
                    let r;
                    try {
                        r = await func.apply(instance, params);
                        await queryRunner.commitTransaction();
                    }
                    catch (e) {
                        r = e;
                        await queryRunner.rollbackTransaction();
                    }
                    finally {
                        await queryRunner.release();
                        //从头事务管理器删除事务
                        transactionmanager_1.TransactionManager.del(tr);
                    }
                    return r;
                }
                else {
                    try {
                        result = await func.apply(instance, params);
                    }
                    catch (e) {
                        result = e;
                    }
                }
                return result;
            }
        };
    }
}
exports.TransactionProxy = TransactionProxy;
//# sourceMappingURL=transactionproxy.js.map