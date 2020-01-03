# Class:RouteFactory
## 属性
+ [dynaRouteArr](#PROP_dynaRouteArr)
+ [staticRouteMap](#PROP_staticRouteMap)
  
## 方法
+ [addRoute](#METHOD_addRoute)
+ [getRoute](#METHOD_getRoute)
+ [handleException](#METHOD_handleException)
+ [handleOneResult](#METHOD_handleOneResult)
+ [handleResult](#METHOD_handleResult)
+ [handleRoute](#METHOD_handleRoute)
+ [init](#METHOD_init)
+ [parseFile](#METHOD_parseFile)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
路由工厂类  
用于管理所有路由对象  
## 属性
### <a id="PROP_dynaRouteArr">dynaRouteArr</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
带通配符的路由集合  
### <a id="PROP_staticRouteMap">staticRouteMap</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
不带通配符的路由  
## 方法
### <a id="METHOD_addRoute">addRoute(path,clazz[,method[,results]])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加路由  
#### 参数
+ path *&lt;<font class='datatype'>string</font>&gt;*      路由路径，支持通配符*，需要method支持
+ clazz *&lt;<font class='datatype'>string</font>&gt;*     对应类
+ method *&lt;<font class='datatype'>string</font>&gt;*    方法，path中包含*，则不设置
+ results *&lt;<font class='datatype'>Array&lt;[RouteResult](/webroute/api/RouteResult)&gt;</font>&gt;*   路由处理结果集
  
#### 返回值
void  
### <a id="METHOD_getRoute">getRoute(path)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
根据路径获取路由对象  
#### 参数
+ path *&lt;<font class='datatype'>string</font>&gt;*      url路径
  
#### 返回值
<font class='datatype'>[RouteObj](./docsRouteObj)</font>  
路由对象  
### <a id="METHOD_handleException">handleException(res,e)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
处理异常信息  
#### 参数
+ res *&lt;<font class='datatype'>HttpResponse</font>&gt;*   response 对象
+ e *&lt;<font class='datatype'>any</font>&gt;*     异常
  
#### 返回值
void  
### <a id="METHOD_handleOneResult">handleOneResult(res,result,data[,instance])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
处理一个路由结果  
#### 参数
+ res *&lt;<font class='datatype'>HttpResponse</font>&gt;*           response 对象
+ result *&lt;<font class='datatype'>[RouteResult](/webroute/api/RouteResult)</font>&gt;*        route result
+ data *&lt;<font class='datatype'>any</font>&gt;*          路由执行结果
+ instance *&lt;<font class='datatype'>any</font>&gt;*      路由实例
  
#### 返回值
<font class='datatype'>void</font>  
### <a id="METHOD_handleResult">handleResult(res,data,instance,results)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
处理路由结果  
#### 参数
+ res *&lt;<font class='datatype'>HttpResponse</font>&gt;*       response 对象
+ data *&lt;<font class='datatype'>any</font>&gt;*      路由对应方法返回值
+ instance *&lt;<font class='datatype'>any</font>&gt;*  路由对应实例
+ results *&lt;<font class='datatype'>Array&lt;[RouteResult](/webroute/api/RouteResult)&gt;</font>&gt;*   route结果数组
  
#### 返回值
<font class='datatype'>void</font>  
### <a id="METHOD_handleRoute">handleRoute(pathOrRoute,params,req,res)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
路由方法执行  
#### 参数
+ pathOrRoute *&lt;<font class='datatype'>string|RouteObj</font>&gt;*   路径或路由
+ params *&lt;<font class='datatype'>object</font>&gt;*        调用参数对象
+ req *&lt;<font class='datatype'>[HttpRequest](/webroute/api/HttpRequest)</font>&gt;*           request 对象
+ res *&lt;<font class='datatype'>HttpResponse</font>&gt;*           response 对象
  
#### 返回值
<font class='datatype'>number</font>  
错误码或0  
### <a id="METHOD_init">init(config[,ns])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
初始化路由工厂  
#### 参数
+ config *&lt;<font class='datatype'>any</font>&gt;*    配置文件
+ ns *&lt;<font class='datatype'>string</font>&gt;*        命名空间（上级路由路径）
  
#### 返回值
void  
### <a id="METHOD_parseFile">parseFile(path[,ns])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
解析路由文件  
#### 参数
+ path *&lt;<font class='datatype'>string</font>&gt;*  文件路径
+ ns *&lt;<font class='datatype'>string</font>&gt;*    命名空间，默认
  
#### 返回值
void  
