# Class:FilterFactory   
## 方法
+ [addFilter](#METHOD_addFilter)
+ [doChain](#METHOD_doChain)
+ [getFilterChain](#METHOD_getFilterChain)
+ [init](#METHOD_init)
+ [parseFile](#METHOD_parseFile)
---   
## 描述
   
### summary   
过滤器工厂类  
   
## 方法   
### <a id="METHOD_addFilter">addFilter(cfg)</a>   
***public &  static***   
#### 描述   
添加过滤器到工厂   
#### 参数   
+ cfg *&lt;FilterConfig&gt;*    
#### 返回值   
void   
### <a id="METHOD_doChain">doChain(url,request,response)</a>   
***public &  static***   
#### 描述   
执行过滤器链   
#### 参数   
+ url *&lt;string&gt;*       url路径   
+ request *&lt;[HttpRequest](#/webroute/api/HttpRequest)&gt;*   httprequest   
+ response *&lt;HttpResponse&gt;*  httpresponse   
#### 返回值   
void   
### <a id="METHOD_getFilterChain">getFilterChain(url)</a>   
***public &  static***   
#### 描述   
获取过滤器链   
#### 参数   
+ url *&lt;string&gt;*   url   
#### 返回值   
filter名数组   
### <a id="METHOD_init">init(config)</a>   
***public &  static***   
#### 描述   
初始化   
#### 参数   
+ config *&lt;any&gt;*    
#### 返回值   
void   
### <a id="METHOD_parseFile">parseFile(path)</a>   
***public &  static***   
#### 描述   
文件解析   
#### 参数   
+ path *&lt;string&gt;*  filter的json文件   
#### 返回值   
void   
