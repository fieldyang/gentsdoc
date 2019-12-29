import { NoomiError } from "./errorfactory";
import { MysqlConnectionManager } from "./mysqlconnectionmanager";
import { InstanceFactory } from "./instancefactory";
import { TransactionManager } from "./transactionmanager";
import { SequelizeConnectionManager } from "./sequelizeconnectionmanager";
import { App } from "./application";
import { OracleConnectionManager } from "./oracleconnectionmanager";
import { MssqlConnectionManager } from "./mssqlconnectionmanager";
import { MongoConnectionManager } from "./mongoconnectionmanager";
import { TypeormConnectionManager } from "./typeormconnectionmanager";


/**
 * 数据库管理器
 */
class DBManager{
    /**
     * 连接管理器名
     */
    static connectionManagerName:string;
    /**
     * 事务类名
     */   
    static transactionName:string;
    /**
     * 数据库类型
     */          
    static product:string;        
    
    /**
     * 
     * @param cfg 初始化
     * cfg.product||'mysql' 默认初始化数据库为mysql
     * cfg.connection_manager || 'noomi_connection_manager' 默认连接器
     * 在初始化时判断是否使用事务，若有事务，则初始化事务管理器
     */
    static init(cfg:any){
      
        let product:string = cfg.product||'mysql';
        this.product = product;
        
        let cm:any;
        let cmName:string = cfg.connection_manager || 'noomi_connection_manager';
      
        if(cfg.connection_manager){
            cm = InstanceFactory.getInstance(cmName);
        }
        
        if(!cm && product){
            let opt = cfg.options;
            opt.usePool = cfg.use_pool;
            opt.useTransaction = cfg.transaction?true:false;
            switch(product){
                case "mysql":
                    cm = new MysqlConnectionManager(opt);
                    InstanceFactory.addInstance({
                        name:cmName,
                        instance:cm,
                        class:MysqlConnectionManager
                    });
                    break;
                case "mssql":
                    cm = new MssqlConnectionManager(opt);
                    InstanceFactory.addInstance({
                        name:cmName,
                        instance:cm,
                        class:MssqlConnectionManager
                    });
                    break;
                case "oracle":
                    cm = new OracleConnectionManager(opt);
                    InstanceFactory.addInstance({
                        name:cmName,
                        instance:cm,
                        class:OracleConnectionManager
                    });
                    break;
                case "mongodb":
                        cm = new MongoConnectionManager(opt);
                        InstanceFactory.addInstance({
                            name:cmName,
                            instance:cm,
                            class:MongoConnectionManager
                        });
                        break;
                case "sequelize":
                    cm = new SequelizeConnectionManager(opt);
                    InstanceFactory.addInstance({
                        name:cmName,
                        instance:cm,
                        class:SequelizeConnectionManager
                    });
                    break;
                case "typeorm":
                    cm = new TypeormConnectionManager(opt);
                    InstanceFactory.addInstance({
                        name:cmName,
                        instance:cm,
                        class:TypeormConnectionManager
                    });
                    break;
            }
        }
        this.connectionManagerName = cmName;
      
        if(cfg.transaction){
            let opt = cfg.transaction;
            opt.product = product;
            TransactionManager.init(opt);
        }
    }

    /**
     * 获取connection manager
     */
    static getConnectionManager(){
        return InstanceFactory.getInstance(this.connectionManagerName);
    }
    static parseFile(path:string){
      
        let json:any = null;
        try{
            let jsonStr:string = App.fs.readFileSync(path,'utf-8');
            json = App.JSON.parse(jsonStr);
            this.init(json);    
        }catch(e){
            throw new NoomiError("2800") + '\n' + e;
        }
    }
}

export{DBManager}