import { Transaction } from "./transaction";
import { getConnection } from "./connectionmanager";

/**
 * oracle 事务类
 */
class OracleTransaction extends Transaction{
    /**
     * 事务开始
     */
    async begin():Promise<void>{
        if(!this.connection){
            this.connection = await getConnection();
        }
    }
    /**
     * 事务提交
     */
    async commit():Promise<void>{
        await this.connection.commit();
    }
    /**
     * 事务回滚
     */
    async rollback():Promise<void>{
        await this.connection.rollback();
    }
}
export {OracleTransaction};