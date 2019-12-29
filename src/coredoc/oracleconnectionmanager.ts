import { ConnectionManager } from "./connectionmanager";
import { TransactionManager } from "./transactionmanager";
/**
 * 连接管理器
 */
class OracleConnectionManager implements ConnectionManager{
    /**
     * 连接池
     */
    pool:any;
    /**
     * 数据库连接
     */
    connection:any;
    /**
     * cfg参数
     */
    options:object;
    /**
     * oracledb
     */
    dbMdl:any;
    /**
     * 是否开启连接池
     */
    usePool:boolean;
    /**
     * pool别名
     */    
    poolAlias:string; 
    constructor(cfg){
        this.dbMdl = require('oracledb');
        this.usePool = cfg.usePool || false;
        this.poolAlias = cfg.poolAlias;
        if(cfg.useTransaction){
            this.dbMdl.autoCommit = false;
        }
        delete cfg.useTransaction;
        delete cfg.usePool;
        this.options = cfg;
    }

    /**
     * 获取连接
     */
    async getConnection(){
        let conn = TransactionManager.getConnection();
        if(conn){
            return conn;
        }

        if(this.usePool){
            if(!this.pool){
                this.pool = await this.dbMdl.createPool(this.options);
            }
            let pool = this.poolAlias?this.dbMdl.getPool(this.poolAlias):this.dbMdl.getPool();
            return await pool.getConnection();
        }else{
            return await this.dbMdl.createConnection(this.options);
        }
    }

    /**
     * 释放连接
     * @param conn 
     */
    async release(conn:any){
        if(!conn){
            return;
        }
        if(this.pool){
            conn.close({drop:false});
        }else{
            try{
                await conn.close();
            }catch(e){
                console.log(e);
            }
        }
    }
}


export{OracleConnectionManager}