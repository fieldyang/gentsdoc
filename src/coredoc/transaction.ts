import { getConnection } from "./connectionmanager";

/**
 * 事务类
 */
class Transaction{
    /**
     * 事务id
     */
    id:number;
    /**
     * 数据库连接
     */
    connection:any;
    /**
     * 数据库管理器
     */
    manager:any;
    /**
     * 事务资源
     */
    src:TransactionSource;
    /**
     * 资源类型
     */
    type:TransactionType;
    /**
     * 是否开启事务
     */
    isBegin:boolean;
    /**
     * 绑定的的async id
     */
    asyncIds:Array<number>=[];
    /**
     * 有开始事务的async id数组
     */     
    trIds:Array<number>=[];         
    constructor(id:number,connection?:any,type?:TransactionType){
        this.id = id; 
        this.connection = connection;
        this.type = type || TransactionType.NESTED;
        this.asyncIds.push(id);
    }
    /**
     * 开启事务
     */
    async begin():Promise<void>{
        this.isBegin = true;
        if(!this.connection){
            await getConnection();
        }
    }
    /**
     *事务提交
     */
    async commit():Promise<void>{}
    /**
     *事务回滚
     */
    async rollback():Promise<void>{}
}
/**
 * NESTED  嵌套（默认） 
 * NEW     新建
 */
enum TransactionType {
    NESTED,       
    NEW             
}

enum TransactionSource{
    MYSQL='mysql',
    ORACLE='oracle',
    MSSQL='mssql',
    MONGODB='mongodb',
    SEQUALIZE='sequalize',
    TYPEORM='typeorm'
}

export{Transaction,TransactionType}