import { Transaction } from "./transaction";
/**
 * mysql 事务类
 */
class SequelizeTransaction extends Transaction{
    /**
     * 事务开始
     */
    async begin():Promise<void>{}
    /**
     * 事务提交
     */
    async commit():Promise<void>{}
    /**
     * 事务回滚
     */
    async rollback():Promise<void>{}
}

export {SequelizeTransaction};