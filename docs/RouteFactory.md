# Class:RouteFactory   
## 方法
+ [Array](#METHOD_Array)
+ [getRoute](#METHOD_getRoute)
+ [handleRoute](#METHOD_handleRoute)
+ [handleResult](#METHOD_handleResult)
+ [handleOneResult](#METHOD_handleOneResult)
+ [handleException](#METHOD_handleException)
+ [init](#METHOD_init)
+ [parseFile](#METHOD_parseFile)
---   
## 描述
   
### summary   
route工厂  
   
## 方法   
### <a id="METHOD_Array">Array()</a>   
***public &  static***   
#### 描述   
带通配符的路由   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_getRoute">getRoute(path)</a>   
***public &  static***   
#### 描述   
根据路径获取路由   
#### 返回值   
instance:**,method:**,results?:**   
#### 参数   
+ path *&lt;string&gt;*      url path   
### <a id="METHOD_handleRoute">handleRoute(pathOrRoute,params,req,res)</a>   
***public &  static***   
#### 描述   
处理路径   
#### 返回值   
错误码或0   
#### 参数   
+ pathOrRoute *&lt;any&gt;*   路径或路由参数   
+ params *&lt;object&gt;*        调用参数   
+ req *&lt;[HttpRequest](#/webroute/api/HttpRequest)&gt;*           httprequest   
+ res *&lt;HttpResponse&gt;*           response   
### <a id="METHOD_handleResult">handleResult(res,data,instance,results)</a>   
***public &  static***   
#### 描述   
处理结果   
#### 返回值   
void   
#### 参数   
+ res *&lt;HttpResponse&gt;*       response   
+ data *&lt;any&gt;*      返回值   
+ instance *&lt;any&gt;*  路由对应实例   
+ results *&lt;Array[RouteResult](#/webroute/api/RouteResult)>&gt;*   route结果数组   
### <a id="METHOD_handleOneResult">handleOneResult(res,result,data[,instance])</a>   
***public &  static***   
#### 描述   
处理一个结果   
#### 返回值   
void   
#### 参数   
+ res *&lt;HttpResponse&gt;*           response   
+ result *&lt;[RouteResult](#/webroute/api/RouteResult)&gt;*        route result   
+ data *&lt;any&gt;*          数据   
+ instance *&lt;any&gt;*      实例   
### <a id="METHOD_handleException">handleException(res,e)</a>   
***public &  static***   
#### 描述   
处理异常信息   
#### 返回值   
void   
#### 参数   
+ res *&lt;HttpResponse&gt;*   response   
+ e *&lt;any&gt;*     异常   
### <a id="METHOD_init">init(config[,ns])</a>   
***public &  static***   
#### 描述   
初始化   
#### 返回值   
void   
#### 参数   
+ config *&lt;any&gt;*    
+ ns *&lt;string&gt;*        命名空间（上级路由路径）   
### <a id="METHOD_parseFile">parseFile(path[,ns])</a>   
***public &  static***   
#### 描述   
解析路由文件   
#### 返回值   
void   
#### 参数   
+ path *&lt;string&gt;*  文件路径   
+ ns *&lt;string&gt;*    命名空间，默认 /   
