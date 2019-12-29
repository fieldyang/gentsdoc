import { Transaction } from "./transaction";
import { getConnection } from "./connectionmanager";
/**
 * mysql 事务类
 */
class MysqlTransaction extends Transaction{
    /**
     * 事务开始
     */
    async begin():Promise<void>{
        if(!this.connection){
            this.connection = await getConnection();
        }
        
        return new Promise((resolve,reject)=>{
            this.connection.beginTransaction((err,conn)=>{
                if(err){
                    reject(err);
                }
                resolve();
            });
        });
    }
    /**
     * 事务提交
     */
    async commit():Promise<void>{
        return new Promise((resolve,reject)=>{
            this.connection.commit((err)=>{
                if(err){
                    reject(err);
                }
                resolve();
            });
        });
    }
    /**
     * 事务回滚
     */
    async rollback():Promise<void>{
        return new Promise((resolve,reject)=>{
            this.connection.rollback((err)=>{
                if(err){
                    reject(err);
                }
                resolve();
            });
        });
    }
}
export {MysqlTransaction};