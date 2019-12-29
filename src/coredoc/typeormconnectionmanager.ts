import { Connection, getConnectionManager } from 'typeorm';
import { Util } from './util';

/**
 * Typeorm连接管理器
 */
class TypeormConnectionManager{
    connection:Connection;
    transactionManager:any;
    constructor(cfg){
        if(cfg.entities){
            cfg.entities.forEach((item,i)=>{
                if(typeof item === 'string'){
                    cfg.entities[i] = Util.getAbsPath([item]);
                }
            });
        }
        this.connection = getConnectionManager().create(cfg);
    }
 
    /**
     * 获取连接
     */
    async getConnection():Promise<Connection>{
        if(!this.connection.isConnected){
            await this.connection.connect();
        }
        return this.connection;
    }

    /**
     *  获取manager
     */
    async getManager(){
        let conn = await this.getConnection();
        return conn.manager;
    }

    /**
     * 释放连接
     * @param conn 
     */
    async release(conn?:any){
    }

    /**
     * 关闭连接
     */
    async close(){
        if(this.connection){
            this.connection.close();
        }
    }
}

export{TypeormConnectionManager}