# Class:TransactionManager   
## 方法
+ [Map](#METHOD_Map)
+ [addTransaction](#METHOD_addTransaction)
+ [get](#METHOD_get)
+ [del](#METHOD_del)
+ [setIdToLocal](#METHOD_setIdToLocal)
+ [getIdFromLocal](#METHOD_getIdFromLocal)
+ [getConnection](#METHOD_getConnection)
+ [releaseConnection](#METHOD_releaseConnection)
+ [parseFile](#METHOD_parseFile)
---   
## 描述
   
### summary   
事务管理器  
   
## 方法   
### <a id="METHOD_Map">Map()</a>   
***public &  static***   
#### 描述   
transaction map   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_addTransaction">addTransaction(instance,methodName)</a>   
***public &  static***   
#### 描述   
添加为事务   
#### 返回值   
void   
#### 参数   
+ instance *&lt;any&gt;*      实例 或 类   
+ methodName *&lt;any&gt;*    方法名   
### <a id="METHOD_get">get([newOne])</a>   
***public &  static***   
#### 描述   
获取transaction   
#### 返回值   
transacton   
#### 参数   
+ newOne *&lt;boolean&gt;*    如果不存在，是否新建   
### <a id="METHOD_del">del(tr)</a>   
***public &  static***   
#### 描述   
删除事务   
#### 返回值   
void   
#### 参数   
+ tr *&lt;[Transaction](#/webroute/api/Transaction)&gt;*    事务   
### <a id="METHOD_setIdToLocal">setIdToLocal()</a>   
***public &  static***   
#### 描述   
往local thread中设置transaction id;   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_getIdFromLocal">getIdFromLocal()</a>   
***public &  static***   
#### 描述   
从thread获取transcton id   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_getConnection">getConnection([id])</a>   
***public &  static***   
#### 描述   
获取connection   
#### 返回值   
void   
#### 参数   
+ id *&lt;number&gt;*    
### <a id="METHOD_releaseConnection">releaseConnection(tr)</a>   
***public &  static***   
#### 描述   
释放连接   
#### 返回值   
void   
#### 参数   
+ tr *&lt;[Transaction](#/webroute/api/Transaction)&gt;*    
### <a id="METHOD_parseFile">parseFile(path)</a>   
***public &  static***   
#### 描述   
解析实例配置文件   
#### 返回值   
void   
#### 参数   
+ path *&lt;string&gt;*      文件路径   
