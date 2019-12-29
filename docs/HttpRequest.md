# Class:HttpRequest   
## 属性
+ [srcReq](#PROP_srcReq)
+ [response](#PROP_response)
## 方法
+ [Object](#METHOD_Object)
+ [init](#METHOD_init)
+ [getHeader](#METHOD_getHeader)
+ [getMethod](#METHOD_getMethod)
+ [getUrl](#METHOD_getUrl)
+ [setParameter](#METHOD_setParameter)
+ [getParameter](#METHOD_getParameter)
+ [getAllParameters](#METHOD_getAllParameters)
+ [initQueryString](#METHOD_initQueryString)
+ [getSession](#METHOD_getSession)
+ [formHandle](#METHOD_formHandle)
---   
## 描述
   
### summary   
HttpRequest  
   
## 属性   
### <a id="PROP_srcReq">srcReq</a>   
源request
     
### <a id="PROP_response">response</a>   
response
     
## 方法   
### <a id="METHOD_Object">Object()</a>   
***public***   
#### 描述   
参数   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_init">init()</a>   
***public***   
#### 描述   
初始化   
#### 返回值   
promise 请求参数   
#### 参数   
### <a id="METHOD_getHeader">getHeader(key)</a>   
***public***   
#### 描述   
获取header信息   
#### 返回值   
void   
#### 参数   
+ key *&lt;string&gt;*       header参数 name   
### <a id="METHOD_getMethod">getMethod()</a>   
***public***   
#### 描述   
获取请求方法   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_getUrl">getUrl()</a>   
***public***   
#### 描述   
获取来源url路径   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_setParameter">setParameter(name,value)</a>   
***public***   
#### 描述   
设置参数   
#### 返回值   
void   
#### 参数   
+ name *&lt;string&gt;*      参数名   
+ value *&lt;string&gt;*     参数值   
### <a id="METHOD_getParameter">getParameter(name)</a>   
***public***   
#### 描述   
获取参数   
#### 返回值   
参数值   
#### 参数   
+ name *&lt;string&gt;*      参数名   
### <a id="METHOD_getAllParameters">getAllParameters()</a>   
***public***   
#### 描述   
获取所有paramter   
#### 返回值   
parameter object   
#### 参数   
### <a id="METHOD_initQueryString">initQueryString()</a>   
***public***   
#### 描述   
初始化url查询串   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_getSession">getSession()</a>   
***public***   
#### 描述   
获取session   
#### 返回值   
session   
#### 参数   
### <a id="METHOD_formHandle">formHandle(req)</a>   
***public***   
#### 描述   
处理输入流   
#### 返回值   
void   
#### 参数   
+ req *&lt;IncomingMessage&gt;*    
