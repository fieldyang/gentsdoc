import { InstanceFactory } from "./instancefactory";
import { AopFactory } from "./aopfactory";
import { TransactionAdvice } from "./transactionadvice";
import { NoomiError } from "./errorfactory";
import { MysqlTransaction } from "./mysqltransaction";
import { SequelizeTransaction } from "./sequelizetransaction";
import { Transaction } from "./transaction";

import { DBManager } from "./dbmanager";
import { Transaction as SeqTransaction } from "sequelize";
import { OracleTransaction } from "./oracletransaction";
import { App } from "./application";
import { MssqlTransaction } from "./mssqltransaction";
import { TypeormTransaction } from "./typeormtransaction";

/**
 * 事务管理器
 */
class TransactionManager{
    /**
     * transaction map
     */
    static transactionMap:Map<number,Transaction> = new Map();  //transaction map
    /**
     * transaction 实例名
     */
    static transactionMdl:string;
    /**
     * expressions 纳入事务的过滤串
     */                            
    static expressions:Array<string>; 
    /**
     * 引入cls-hooked
     * cls namespace NOOMI_TX_NAMESPACE
     */                            
    static namespace:any = require('cls-hooked')
                .createNamespace('NOOMI_TX_NAMESPACE');
    /**
     * transactionId 事务id, 初始为1
     */ 
    static transactionId:number=1; 
    /**
     * pointcutId 事务切点NOOMI_TX_POINTCU 
     */                              
    static pointcutId:string = 'NOOMI_TX_POINTCUT';
    /**
     * 待添加到transaction aop的表达式串
     */           
    static addToAopExpressions:Array<string> = [];
    /**
     * 隔离级别
     * 隔离级 
     * 1read uncommited 
     * 2read commited 
     * 3repeatable read 
     * 4serializable
     */               
    static isolationLevel:number=0; 
     /**
      *事务配置项
      *  
      */                           
    static transactionOption:any; 
    /**
     * 初始化
     * @param cfg 
     */                             
    static init(cfg:any){
        this.transactionMdl = cfg.transaction||'noomi_transaction';
        if(cfg.isolation_level && typeof cfg.isolation_level === 'number'){
            this.isolationLevel = cfg.isolation_level;
        }
        let adviceInstance = InstanceFactory.addInstance({
            name:'NoomiTransactionAdvice',           //实例名
            instance:new TransactionAdvice(),
            class:TransactionAdvice
        });
        AopFactory.addPointcut(this.pointcutId,[]);
        setImmediate(()=>{
            AopFactory.addExpression(TransactionManager.pointcutId,TransactionManager.addToAopExpressions);
        });
        
        AopFactory.addAdvice({
            pointcut_id:this.pointcutId,
            type:'before',
            method:'before',
            instance:adviceInstance
        });

        AopFactory.addAdvice({
            pointcut_id:this.pointcutId,
            type:'after-return',
            method:'afterReturn',
            instance:adviceInstance
        });

        AopFactory.addAdvice({
            pointcut_id:this.pointcutId,
            type:'after-throw',
            method:'afterThrow',
            instance:adviceInstance
        });
        
        let tn:string = this.transactionMdl;
        if(tn){
            let ins = InstanceFactory.getInstance(tn);
            if(ins === null){
                switch(cfg.product){
                    case "mysql":
                    InstanceFactory.addInstance({
                        name:tn,
                        class:MysqlTransaction,
                        singleton:false
                    });
                    break;
                    case "mssql":
                        InstanceFactory.addInstance({
                            name:tn,
                            class:MssqlTransaction,
                            singleton:false
                        });
                        break;
                    case "oracle":
                        InstanceFactory.addInstance({
                            name:tn,
                            class:OracleTransaction,
                            singleton:false
                        });
                        break;
                    case "sequelize":
                        InstanceFactory.addInstance({
                            name:tn,
                            class:SequelizeTransaction,
                            singleton:false
                        }); 
                       
                        this.transactionOption = {
                            autocommit:false
                        }
            
                        if(this.isolationLevel !== 0){
                            switch(TransactionManager.isolationLevel){
                                case 1:  
                                    this.transactionOption.isolationLevel = SeqTransaction.ISOLATION_LEVELS.READ_UNCOMMITTED;
                                    break;
                                case 2:
                                    this.transactionOption.isolationLevel = SeqTransaction.ISOLATION_LEVELS.READ_COMMITTED;
                                    break;
                                case 3:
                                    this.transactionOption.isolationLevel = SeqTransaction.ISOLATION_LEVELS.REPEATABLE_READ;
                                    break;
                                case 4:
                                    this.transactionOption.isolationLevel = SeqTransaction.ISOLATION_LEVELS.SERIALIZABLE;
                            }
                        }
                        break;
                    case 'typeorm': 
                            InstanceFactory.addInstance({
                                name:tn,
                                class:TypeormTransaction,
                                singleton:false
                            }); 
                            this.transactionOption = {};
                            if(this.isolationLevel !== 0){
                                switch(TransactionManager.isolationLevel){
                                    case 1:  
                                        this.transactionOption.isolationLevel = "READ UNCOMMITTED";
                                        break;
                                    case 2:
                                        this.transactionOption.isolationLevel = "READ COMMITTED";
                                        break;
                                    case 3:
                                        this.transactionOption.isolationLevel = "REPEATABLE READ";
                                        break;
                                    case 4:
                                        this.transactionOption.isolationLevel = "SERIALIZABLE";
                                }
                            }
                            break;
                }
            }
        }
        
    }

    /**
     * 添加为事务
     * @param instance      实例 或 类
     * @param methodName    方法名
     */
    static addTransaction(instance:any,methodName:any){
        let pc = AopFactory.getPointcutById(this.pointcutId);
        let name:string = typeof instance === 'string'?instance:instance.__name;
        let expr:string = name + '.' + methodName;
        if(pc){ 
            AopFactory.addExpression(this.pointcutId,expr);
        }else{  
            this.addToAopExpressions.push(expr);
        }
    }

    /**
     * 获取transaction
     * @param newOne    如果不存在，是否新建
     * @returns         transacton
     */
    
    static get(newOne?:boolean):Transaction{
        let tr:Transaction;
        let id:number = this.namespace.get('tr_id');
        if(!id){
            if(!newOne){
                return null;
            }else{
                id = this.transactionId++;
            }  
        }
        if(this.transactionMap.has(id)){
            tr = this.transactionMap.get(id);
        }else if(newOne){          
            tr = InstanceFactory.getInstance(this.transactionMdl,[id]);
            this.transactionMap.set(id,tr);
        }
        return tr;
    }

    /**
     * 删除事务
     * @param tr    事务 
     */
    static del(tr:Transaction){
        for(let id of tr.asyncIds){
            this.transactionMap.delete(id);
        }
    }
    
    /**
     * 往local thread中设置transaction id;
     */
    static setIdToLocal(){
        try{
            this.namespace.set('tr_id',this.transactionId++);
        }catch(e){
            console.log(e);
        }
        
    }

    /**
     * 从thread获取transcton id
     */
    static getIdFromLocal(){
        return this.namespace.get('tr_id');
    }
    
    /**
     * 获取connection
     */
    static getConnection(id?:number){
        if(!id){
            id = this.namespace.get('tr_id');
        }
        if(!this.transactionMap.has(id)){
            return null;
        }
        let tr:Transaction = this.transactionMap.get(id);
        return tr.connection;
    }

    /**
     * 释放连接
     * @param tr 
     */
    static releaseConnection(tr:Transaction){
        DBManager.getConnectionManager().release(tr.connection);
    }

    /**
     * 解析实例配置文件
     * @param path      文件路径
     * @param mdlPath   模型路径
     */
    static parseFile(path:string){
        interface InstanceJSON{
            files:Array<string>;        
            instances:Array<any>; 
        }
        let jsonStr:string = App.fs.readFileSync(path,'utf-8');
        let json:InstanceJSON = null;
        try{
            json = App.JSON.parse(jsonStr);
        }catch(e){
            throw new NoomiError("2800") + '\n' + e;
        }
        this.init(json);
    }
}

export {TransactionManager}