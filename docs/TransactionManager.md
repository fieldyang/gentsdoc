# Class:TransactionManager   
## 方法
+ [Map](#METHOD_Map)
+ [addTransaction](#METHOD_addTransaction)
+ [del](#METHOD_del)
+ [get](#METHOD_get)
+ [getConnection](#METHOD_getConnection)
+ [getIdFromLocal](#METHOD_getIdFromLocal)
+ [parseFile](#METHOD_parseFile)
+ [releaseConnection](#METHOD_releaseConnection)
+ [setIdToLocal](#METHOD_setIdToLocal)
---   
## 描述
   
### summary   
事务管理器  
   
## 方法   
### <a id="METHOD_Map">Map()</a>   
***public &  static***   
#### 描述   
transaction map   
#### 参数   
#### 返回值   
void   
### <a id="METHOD_addTransaction">addTransaction(instance,methodName)</a>   
***public &  static***   
#### 描述   
添加为事务   
#### 参数   
+ instance *&lt;any&gt;*      实例 或 类   
+ methodName *&lt;any&gt;*    方法名   
#### 返回值   
void   
### <a id="METHOD_del">del(tr)</a>   
***public &  static***   
#### 描述   
删除事务   
#### 参数   
+ tr *&lt;[Transaction](#/webroute/api/Transaction)&gt;*    事务   
#### 返回值   
void   
### <a id="METHOD_get">get([newOne])</a>   
***public &  static***   
#### 描述   
获取transaction   
#### 参数   
+ newOne *&lt;boolean&gt;*    如果不存在，是否新建   
#### 返回值   
transacton   
### <a id="METHOD_getConnection">getConnection([id])</a>   
***public &  static***   
#### 描述   
获取connection   
#### 参数   
+ id *&lt;number&gt;*    
#### 返回值   
void   
### <a id="METHOD_getIdFromLocal">getIdFromLocal()</a>   
***public &  static***   
#### 描述   
从thread获取transcton id   
#### 参数   
#### 返回值   
void   
### <a id="METHOD_parseFile">parseFile(path)</a>   
***public &  static***   
#### 描述   
解析实例配置文件   
#### 参数   
+ path *&lt;string&gt;*      文件路径   
#### 返回值   
void   
### <a id="METHOD_releaseConnection">releaseConnection(tr)</a>   
***public &  static***   
#### 描述   
释放连接   
#### 参数   
+ tr *&lt;[Transaction](#/webroute/api/Transaction)&gt;*    
#### 返回值   
void   
### <a id="METHOD_setIdToLocal">setIdToLocal()</a>   
***public &  static***   
#### 描述   
往local thread中设置transaction id;   
#### 参数   
#### 返回值   
void   
