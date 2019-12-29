# Class:SequelizeConnectionManager   
## 属性
+ [sequelize](#PROP_sequelize)
+ [options](#PROP_options)
+ [dbMdl](#PROP_dbMdl)
+ [poolAlias](#PROP_poolAlias)
## 方法
+ [getConnection](#METHOD_getConnection)
+ [release](#METHOD_release)
+ [close](#METHOD_close)
---   
## 描述
   
### summary   
sequelize连接管理器  
   
## 属性   
### <a id="PROP_sequelize">sequelize</a>   
Sequelize
     
### <a id="PROP_options">options</a>   
cfg参数
     
### <a id="PROP_dbMdl">dbMdl</a>   

     
### <a id="PROP_poolAlias">poolAlias</a>   
pool别名
     
## 方法   
### <a id="METHOD_getConnection">getConnection()</a>   
***public***   
#### 描述   
获取连接   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_release">release([conn])</a>   
***public***   
#### 描述   
释放连接   
#### 返回值   
void   
#### 参数   
+ conn *&lt;any&gt;*    
### <a id="METHOD_close">close()</a>   
***public***   
#### 描述   
关闭连接   
#### 返回值   
void   
#### 参数   
