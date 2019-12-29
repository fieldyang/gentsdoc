# Class:FilterFactory   
## 方法
+ [addFilter](#METHOD_addFilter)
+ [parseFile](#METHOD_parseFile)
+ [init](#METHOD_init)
+ [getFilterChain](#METHOD_getFilterChain)
+ [doChain](#METHOD_doChain)
---   
## 描述
   
### summary   
过滤器工厂类  
   
## 方法   
### <a id="METHOD_addFilter">addFilter(cfg)</a>   
***public &  static***   
#### 描述   
添加过滤器到工厂   
#### 返回值   
void   
#### 参数   
+ cfg *&lt;FilterConfig&gt;*    
### <a id="METHOD_parseFile">parseFile(path)</a>   
***public &  static***   
#### 描述   
文件解析   
#### 返回值   
void   
#### 参数   
+ path *&lt;string&gt;*  filter的json文件   
### <a id="METHOD_init">init(config)</a>   
***public &  static***   
#### 描述   
初始化   
#### 返回值   
void   
#### 参数   
+ config *&lt;any&gt;*    
### <a id="METHOD_getFilterChain">getFilterChain(url)</a>   
***public &  static***   
#### 描述   
获取过滤器链   
#### 返回值   
filter名数组   
#### 参数   
+ url *&lt;string&gt;*   url   
### <a id="METHOD_doChain">doChain(url,request,response)</a>   
***public &  static***   
#### 描述   
执行过滤器链   
#### 返回值   
void   
#### 参数   
+ url *&lt;string&gt;*       url路径   
+ request *&lt;[HttpRequest](#/webroute/api/HttpRequest)&gt;*   httprequest   
+ response *&lt;HttpResponse&gt;*  httpresponse   
