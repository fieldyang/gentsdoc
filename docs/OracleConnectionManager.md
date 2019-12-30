# Class:OracleConnectionManager   
## 属性
+ [connection](#PROP_connection)
+ [dbMdl](#PROP_dbMdl)
+ [options](#PROP_options)
+ [pool](#PROP_pool)
+ [poolAlias](#PROP_poolAlias)
+ [usePool](#PROP_usePool)
## 方法
+ [getConnection](#METHOD_getConnection)
+ [release](#METHOD_release)
---   
## 描述
   
### summary   
连接管理器  
   
## 属性   
### <a id="PROP_connection">connection</a>   
***public***   
数据库连接
     
### <a id="PROP_dbMdl">dbMdl</a>   
***public***   
oracledb
     
### <a id="PROP_options">options</a>   
***public***   
cfg参数
     
### <a id="PROP_pool">pool</a>   
***public***   
连接池
     
### <a id="PROP_poolAlias">poolAlias</a>   
***public***   
pool别名
     
### <a id="PROP_usePool">usePool</a>   
***public***   
是否开启连接池
     
## 方法   
### <a id="METHOD_getConnection">getConnection()</a>   
***public***   
#### 描述   
获取连接   
#### 参数   
#### 返回值   
void   
### <a id="METHOD_release">release(conn)</a>   
***public***   
#### 描述   
释放连接   
#### 参数   
+ conn *&lt;any&gt;*    
#### 返回值   
void   
