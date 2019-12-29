import { Transaction } from "./transaction";
/**
 * mysql 事务类
 */
class TypeormTransaction extends Transaction{
    manager:any;
    /**
     * 事务开启
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

export {TypeormTransaction};