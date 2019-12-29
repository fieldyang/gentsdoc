import { Transaction, TransactionType } from "./transaction";
import { getConnection } from "./connectionmanager";
import { DBManager } from "./dbmanager";

/**
 * mssql 事务类
 */
class MssqlTransaction extends Transaction{
    tr:any;
    constructor(id:number,connection?:any,type?:TransactionType){
        super(id,connection,type);
        let cm = DBManager.getConnectionManager();
        let pool = cm.pool;
        this.tr = new cm.dbMdl.Transaction(pool);
    }
    /**
     * 事务开始
     */
    async begin():Promise<void>{
        if(!this.connection){
            this.connection = await getConnection();
        }
        await this.tr.begin();
    }
    /**
     * 事务提交
     */
    async commit():Promise<void>{
        await this.tr.commit();
    }
    /**
     * 事务回滚
     */
    async rollback():Promise<void>{
        await this.tr.rollback();
    }
}

export {MssqlTransaction};