# Class:SessionFactory   
## 方法
+ [Map](#METHOD_Map)
+ [getSession](#METHOD_getSession)
+ [delSession](#METHOD_delSession)
+ [genSessionId](#METHOD_genSessionId)
+ [getSessionId](#METHOD_getSessionId)
---   
## 描述
   
### summary   
session 工厂类  
   
## 方法   
### <a id="METHOD_Map">Map()</a>   
***public &  static***   
#### 描述   
sessions   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_getSession">getSession(req)</a>   
***public &  static***   
#### 描述   
获取session   
#### 返回值   
void   
#### 参数   
+ req *&lt;[HttpRequest](#/webroute/api/HttpRequest)&gt;*   request   
### <a id="METHOD_delSession">delSession(sessionId)</a>   
***public &  static***   
#### 描述   
删除session   
#### 返回值   
void   
#### 参数   
+ sessionId *&lt;string&gt;* session id   
### <a id="METHOD_genSessionId">genSessionId()</a>   
***public &  static***   
#### 描述   
创建sessionid   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_getSessionId">getSessionId(req)</a>   
***public &  static***   
#### 描述   
获取当前sessionId   
#### 返回值   
void   
#### 参数   
+ req *&lt;[HttpRequest](#/webroute/api/HttpRequest)&gt;*   request   
