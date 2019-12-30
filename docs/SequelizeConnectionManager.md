# Class:SequelizeConnectionManager   
## 属性
+ [dbMdl](#PROP_dbMdl)
+ [options](#PROP_options)
+ [poolAlias](#PROP_poolAlias)
+ [sequelize](#PROP_sequelize)
## 方法
+ [close](#METHOD_close)
+ [getConnection](#METHOD_getConnection)
+ [release](#METHOD_release)
---   
## 描述
   
### summary   
sequelize连接管理器  
   
## 属性   
### <a id="PROP_dbMdl">dbMdl</a>   
***public***   

     
### <a id="PROP_options">options</a>   
***public***   
cfg参数
     
### <a id="PROP_poolAlias">poolAlias</a>   
***public***   
pool别名
     
### <a id="PROP_sequelize">sequelize</a>   
***public***   
Sequelize
     
## 方法   
### <a id="METHOD_close">close()</a>   
***public***   
#### 描述   
关闭连接   
#### 参数   
#### 返回值   
void   
### <a id="METHOD_getConnection">getConnection()</a>   
***public***   
#### 描述   
获取连接   
#### 参数   
#### 返回值   
void   
### <a id="METHOD_release">release([conn])</a>   
***public***   
#### 描述   
释放连接   
#### 参数   
+ conn *&lt;any&gt;*    
#### 返回值   
void   
