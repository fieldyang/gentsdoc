# Class:DBManager   
## 属性
+ [connectionManagerName](#PROP_connectionManagerName)
+ [product](#PROP_product)
+ [transactionName](#PROP_transactionName)
## 方法
+ [getConnectionManager](#METHOD_getConnectionManager)
+ [init](#METHOD_init)
---   
## 描述
   
### summary   
数据库管理器  
   
## 属性   
### <a id="PROP_connectionManagerName">connectionManagerName</a>   
***public &  static***   
连接管理器名
     
### <a id="PROP_product">product</a>   
***public &  static***   
数据库类型
     
### <a id="PROP_transactionName">transactionName</a>   
***public &  static***   
事务类名
     
## 方法   
### <a id="METHOD_getConnectionManager">getConnectionManager()</a>   
***public &  static***   
#### 描述   
获取connection manager   
#### 参数   
#### 返回值   
void   
### <a id="METHOD_init">init(cfg)</a>   
***public &  static***   
#### 参数   
+ cfg *&lt;any&gt;* 初始化  
cfg.product||'mysql' 默认初始化数据库为mysql  
cfg.connection_manager || 'noomi_connection_manager' 默认连接器  
在初始化时判断是否使用事务，若有事务，则初始化事务管理器   
#### 返回值   
void   
