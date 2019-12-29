import {Sequelize as SequelizeOrigin} from 'sequelize';
import { Sequelize } from "sequelize-typescript";
import { TransactionManager } from "./transactionmanager";
import { Util } from './util';

/**
 * sequelize连接管理器
 */
class SequelizeConnectionManager{
    /**
     * Sequelize
     */
    sequelize:Sequelize;
    /**
     * cfg参数
     */
    options:object;
    /**
     * 
     */
    dbMdl:any;
    /**
     * pool别名
     */
    poolAlias:string;       
    constructor(cfg){
        SequelizeOrigin.useCLS(TransactionManager.namespace);
        if(cfg.models && Array.isArray(cfg.models)){
            cfg.models.forEach((item,i)=>{
                if(typeof item === 'string'){
                    cfg.models[i] = Util.getAbsPath([item]);
                }
            });
        }
        this.sequelize = new Sequelize(cfg);
    }

    /**
     * 获取连接
     */
    async getConnection(){
        return this.sequelize;
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
        if(this.sequelize){
            this.sequelize.close();
        }
    }
}

export{SequelizeConnectionManager}