# Class:HttpRequest   
## 属性
+ [response](#PROP_response)
+ [srcReq](#PROP_srcReq)
## 方法
+ [Object](#METHOD_Object)
+ [formHandle](#METHOD_formHandle)
+ [getAllParameters](#METHOD_getAllParameters)
+ [getHeader](#METHOD_getHeader)
+ [getMethod](#METHOD_getMethod)
+ [getParameter](#METHOD_getParameter)
+ [getSession](#METHOD_getSession)
+ [getUrl](#METHOD_getUrl)
+ [init](#METHOD_init)
+ [initQueryString](#METHOD_initQueryString)
+ [setParameter](#METHOD_setParameter)
---   
## 描述
   
***extends: IncomingMessage***   
### summary   
HttpRequest  
   
## 属性   
### <a id="PROP_response">response</a>   
***public***   
response
     
### <a id="PROP_srcReq">srcReq</a>   
***public***   
源request
     
## 方法   
### <a id="METHOD_Object">Object()</a>   
***public***   
#### 描述   
参数   
#### 参数   
#### 返回值   
void   
### <a id="METHOD_formHandle">formHandle(req)</a>   
***public***   
#### 描述   
处理输入流   
#### 参数   
+ req *&lt;IncomingMessage&gt;*    
#### 返回值   
void   
### <a id="METHOD_getAllParameters">getAllParameters()</a>   
***public***   
#### 描述   
获取所有paramter   
#### 参数   
#### 返回值   
parameter object   
### <a id="METHOD_getHeader">getHeader(key)</a>   
***public***   
#### 描述   
获取header信息   
#### 参数   
+ key *&lt;string&gt;*       header参数 name   
#### 返回值   
void   
### <a id="METHOD_getMethod">getMethod()</a>   
***public***   
#### 描述   
获取请求方法   
#### 参数   
#### 返回值   
void   
### <a id="METHOD_getParameter">getParameter(name)</a>   
***public***   
#### 描述   
获取参数   
#### 参数   
+ name *&lt;string&gt;*      参数名   
#### 返回值   
参数值   
### <a id="METHOD_getSession">getSession()</a>   
***public***   
#### 描述   
获取session   
#### 参数   
#### 返回值   
session   
### <a id="METHOD_getUrl">getUrl()</a>   
***public***   
#### 描述   
获取来源url路径   
#### 参数   
#### 返回值   
void   
### <a id="METHOD_init">init()</a>   
***public***   
#### 描述   
初始化   
#### 参数   
#### 返回值   
promise 请求参数   
### <a id="METHOD_initQueryString">initQueryString()</a>   
***public***   
#### 描述   
初始化url查询串   
#### 参数   
#### 返回值   
void   
### <a id="METHOD_setParameter">setParameter(name,value)</a>   
***public***   
#### 描述   
设置参数   
#### 参数   
+ name *&lt;string&gt;*      参数名   
+ value *&lt;string&gt;*     参数值   
#### 返回值   
void   
