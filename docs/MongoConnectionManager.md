# Class:MongoConnectionManager   
## 属性
+ [pool](#PROP_pool)
+ [usePool](#PROP_usePool)
+ [connection](#PROP_connection)
+ [options](#PROP_options)
+ [dbMdl](#PROP_dbMdl)
## 方法
+ [getConnection](#METHOD_getConnection)
+ [release](#METHOD_release)
---   
## 描述
   
### summary   
连接管理器  
   
## 属性   
### <a id="PROP_pool">pool</a>   
连接池
     
### <a id="PROP_usePool">usePool</a>   
是否开启连接池，默认为false
     
### <a id="PROP_connection">connection</a>   
数据库连接
     
### <a id="PROP_options">options</a>   
cfg参数
     
### <a id="PROP_dbMdl">dbMdl</a>   
mongodb
     
## 方法   
### <a id="METHOD_getConnection">getConnection()</a>   
***public***   
#### 描述   
获取连接   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_release">release(conn)</a>   
***public***   
#### 描述   
释放连接   
#### 返回值   
void   
#### 参数   
+ conn *&lt;any&gt;*    
