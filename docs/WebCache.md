# Class:WebCache   
## 属性
+ [cache](#PROP_cache)
+ [maxAge](#PROP_maxAge)
+ [isPublic](#PROP_isPublic)
+ [isPrivate](#PROP_isPrivate)
+ [noCache](#PROP_noCache)
+ [noStore](#PROP_noStore)
+ [mustRevalidation](#PROP_mustRevalidation)
+ [proxyRevalidation](#PROP_proxyRevalidation)
+ [expires](#PROP_expires)
+ [fileTypes](#PROP_fileTypes)
+ [maxSingleSize](#PROP_maxSingleSize)
+ [excludeFileTypes](#PROP_excludeFileTypes)
## 方法
+ [init](#METHOD_init)
+ [add](#METHOD_add)
+ [load](#METHOD_load)
+ [writeCacheToClient](#METHOD_writeCacheToClient)
+ [check](#METHOD_check)
---   
## 描述
   
### summary   
web 缓存类  
   
## 属性   
### <a id="PROP_cache">cache</a>   
cache类
     
### <a id="PROP_maxAge">maxAge</a>   
cache-control max-age 值
     
### <a id="PROP_isPublic">isPublic</a>   
cache-control public
     
### <a id="PROP_isPrivate">isPrivate</a>   
cache-control privite
     
### <a id="PROP_noCache">noCache</a>   
cache-control no cache
     
### <a id="PROP_noStore">noStore</a>   
cache-control no store
     
### <a id="PROP_mustRevalidation">mustRevalidation</a>   
cache-control must revalidation
     
### <a id="PROP_proxyRevalidation">proxyRevalidation</a>   
cache-control proxy revalidation
     
### <a id="PROP_expires">expires</a>   
expires
     
### <a id="PROP_fileTypes">fileTypes</a>   
缓存文件类型
     
### <a id="PROP_maxSingleSize">maxSingleSize</a>   
单个文件最大size
     
### <a id="PROP_excludeFileTypes">excludeFileTypes</a>   
不能缓存的媒体类型
     
## 方法   
### <a id="METHOD_init">init(cfg)</a>   
***public &  static***   
#### 描述   
初始化   
#### 返回值   
void   
#### 参数   
+ cfg *&lt;any&gt;*    
### <a id="METHOD_add">add(url,path[,response])</a>   
***public &  static***   
#### 描述   
添加资源   
#### 返回值   
object data:文件内容,type:mime type   
#### 参数   
+ url *&lt;string&gt;*       url 请求url   
+ path *&lt;string&gt;*      url对应路径   
+ response *&lt;HttpResponse&gt;*  http response   
### <a id="METHOD_load">load(request,response,url)</a>   
***public &  static***   
#### 描述   
加载资源   
#### 返回值   
0不用回写数据 或 object data:data,type:mimetype   
#### 参数   
+ request *&lt;[HttpRequest](#/webroute/api/HttpRequest)&gt;*   request   
+ response *&lt;HttpResponse&gt;*  response   
+ url *&lt;string&gt;*       url   
### <a id="METHOD_writeCacheToClient">writeCacheToClient(response[,etag[,lastModified]])</a>   
***public &  static***   
#### 描述   
写cache到客户端   
#### 返回值   
void   
#### 参数   
+ response *&lt;HttpResponse&gt;*          httpresponse   
+ etag *&lt;string&gt;*              etag   
+ lastModified *&lt;string&gt;*      lasmodified   
### <a id="METHOD_check">check(request,url)</a>   
***public &  static***   
#### 描述   
资源check，如果需要更改，则从服务器获取   
#### 返回值   
0从浏览器获取 1已更新 2资源不在缓存   
#### 参数   
+ request *&lt;[HttpRequest](#/webroute/api/HttpRequest)&gt;*    
+ url *&lt;string&gt;*    
