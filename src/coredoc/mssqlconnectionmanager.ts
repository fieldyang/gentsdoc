import { ConnectionManager } from "./connectionmanager";
import { TransactionManager } from "./transactionmanager";
/**
 * mssql连接管理器
 */
class MssqlConnectionManager implements ConnectionManager{
    /**
     * 连接池
     */
    pool:any;
    /**
     * 是否开启连接池，默认为false
     */
    usePool:boolean;
    /**
     * 数据库连接
     */
    connection:any;
    /**
     * cfg参数
     */
    options:object;
    /**
     * mssqldb
     */
    dbMdl:any;
    constructor(cfg){
        this.dbMdl = require('mssql');
        this.usePool = cfg.usePool || false;
        delete cfg.useTransaction;
        delete cfg.usePool;
        this.options = cfg;
        this.pool = new this.dbMdl.ConnectionPool(this.options);
    }

    /**
     * 获取连接
     */
    async getConnection(){
        let conn = TransactionManager.getConnection();
        if(conn){
            return conn;
        }
        let tr:any = TransactionManager.get(false);
        let co:any;
        if(tr){
            co = new this.dbMdl.Request(tr.tr);
        }else{
            let c = await this.pool.connect();
            co = c.request();
        }
        return co;
    }

    /**
     * 释放连接
     * @param conn 
     */
    async release(conn:any){
        if(!conn){
            return;
        }
        conn._currentRequest.connection.close({drop:false});
    }
}

export{MssqlConnectionManager}