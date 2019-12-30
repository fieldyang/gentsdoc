# Class:WebCache   
## 属性
+ [cache](#PROP_cache)
+ [excludeFileTypes](#PROP_excludeFileTypes)
+ [expires](#PROP_expires)
+ [fileTypes](#PROP_fileTypes)
+ [isPrivate](#PROP_isPrivate)
+ [isPublic](#PROP_isPublic)
+ [maxAge](#PROP_maxAge)
+ [maxSingleSize](#PROP_maxSingleSize)
+ [mustRevalidation](#PROP_mustRevalidation)
+ [noCache](#PROP_noCache)
+ [noStore](#PROP_noStore)
+ [proxyRevalidation](#PROP_proxyRevalidation)
## 方法
+ [add](#METHOD_add)
+ [check](#METHOD_check)
+ [init](#METHOD_init)
+ [load](#METHOD_load)
+ [writeCacheToClient](#METHOD_writeCacheToClient)
---   
## 描述
   
### summary   
web 缓存类  
   
## 属性   
### <a id="PROP_cache">cache</a>   
***public &  static***   
cache类
     
### <a id="PROP_excludeFileTypes">excludeFileTypes</a>   
***public &  static***   
不能缓存的媒体类型
     
### <a id="PROP_expires">expires</a>   
***public &  static***   
expires
     
### <a id="PROP_fileTypes">fileTypes</a>   
***public &  static***   
缓存文件类型
     
### <a id="PROP_isPrivate">isPrivate</a>   
***public &  static***   
cache-control privite
     
### <a id="PROP_isPublic">isPublic</a>   
***public &  static***   
cache-control public
     
### <a id="PROP_maxAge">maxAge</a>   
***public &  static***   
cache-control max-age 值
     
### <a id="PROP_maxSingleSize">maxSingleSize</a>   
***public &  static***   
单个文件最大size
     
### <a id="PROP_mustRevalidation">mustRevalidation</a>   
***public &  static***   
cache-control must revalidation
     
### <a id="PROP_noCache">noCache</a>   
***public &  static***   
cache-control no cache
     
### <a id="PROP_noStore">noStore</a>   
***public &  static***   
cache-control no store
     
### <a id="PROP_proxyRevalidation">proxyRevalidation</a>   
***public &  static***   
cache-control proxy revalidation
     
## 方法   
### <a id="METHOD_add">add(url,path[,response])</a>   
***public &  static***   
#### 描述   
添加资源   
#### 参数   
+ url *&lt;string&gt;*       url 请求url   
+ path *&lt;string&gt;*      url对应路径   
+ response *&lt;HttpResponse&gt;*  http response   
#### 返回值   
object data:文件内容,type:mime type   
### <a id="METHOD_check">check(request,url)</a>   
***public &  static***   
#### 描述   
资源check，如果需要更改，则从服务器获取   
#### 参数   
+ request *&lt;[HttpRequest](#/webroute/api/HttpRequest)&gt;*    
+ url *&lt;string&gt;*    
#### 返回值   
0从浏览器获取 1已更新 2资源不在缓存   
### <a id="METHOD_init">init(cfg)</a>   
***public &  static***   
#### 描述   
初始化   
#### 参数   
+ cfg *&lt;any&gt;*    
#### 返回值   
void   
### <a id="METHOD_load">load(request,response,url)</a>   
***public &  static***   
#### 描述   
加载资源   
#### 参数   
+ request *&lt;[HttpRequest](#/webroute/api/HttpRequest)&gt;*   request   
+ response *&lt;HttpResponse&gt;*  response   
+ url *&lt;string&gt;*       url   
#### 返回值   
0不用回写数据 或 object data:data,type:mimetype   
### <a id="METHOD_writeCacheToClient">writeCacheToClient(response[,etag[,lastModified]])</a>   
***public &  static***   
#### 描述   
写cache到客户端   
#### 参数   
+ response *&lt;HttpResponse&gt;*          httpresponse   
+ etag *&lt;string&gt;*              etag   
+ lastModified *&lt;string&gt;*      lasmodified   
#### 返回值   
void   
