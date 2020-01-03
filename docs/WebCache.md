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
<font class="since">开始于:v0.0.1</font>  
web 缓存类  
### remarks
用于管理缓存资源  
## 属性
### <a id="PROP_cache">cache</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
cache对象  
### <a id="PROP_excludeFileTypes">excludeFileTypes</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
不能缓存的媒体类型  
### <a id="PROP_expires">expires</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
expires  
### <a id="PROP_fileTypes">fileTypes</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
缓存文件类型，默认[*]  
### <a id="PROP_isPrivate">isPrivate</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
cache-control privite  
### <a id="PROP_isPublic">isPublic</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
cache-control public  
### <a id="PROP_maxAge">maxAge</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
cache-control max-age  
### <a id="PROP_maxSingleSize">maxSingleSize</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
单个文件最大size  
### <a id="PROP_mustRevalidation">mustRevalidation</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
cache-control must-revalidation  
### <a id="PROP_noCache">noCache</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
cache-control no-cache  
### <a id="PROP_noStore">noStore</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
cache-control no-store  
### <a id="PROP_proxyRevalidation">proxyRevalidation</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
cache-control proxy-revalidation  
## 方法
### <a id="METHOD_add">add(url,path[,response])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加资源到缓存中  
#### 参数
+ url *&lt;<font class='datatype'>string</font>&gt;*       url请求url
+ path *&lt;<font class='datatype'>string</font>&gt;*      url对应路径
+ response *&lt;<font class='datatype'>HttpResponse</font>&gt;*  response对象
  
#### 返回值
<font class='datatype'>Promise&lt;Object&gt;</font>  
{data:文件内容,type:mime type}  
### <a id="METHOD_check">check(request,url)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
资源check，如果需要更改，则从服务器获取  
#### 参数
+ request *&lt;<font class='datatype'>[HttpRequest](/webroute/api/HttpRequest)</font>&gt;*   request对象
+ url *&lt;<font class='datatype'>string</font>&gt;* 
  
#### 返回值
<font class='datatype'>Promise&lt;number&gt;</font>  
0:从浏览器获取 1:已更新 2:资源不在缓存  
### <a id="METHOD_init">init(cfg)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
初始化  
#### 参数
+ cfg *&lt;<font class='datatype'>any</font>&gt;*   配置项，包括:  
file_type           缓存文件类型，默认[*]  
max_age             cache-control max-age  
no_cache            cache-control no-cache  
no_store            cache-control no-store  
public              cache-control public  
private             cache-control privite  
must_revalidation   cache-control must-revalidation  
proxy_revalidation  cache-control proxy-revalidation  
expires             过期时间(秒)  
max_single_size     单个缓存文件最大尺寸
  
#### 返回值
void  
### <a id="METHOD_load">load(request,response,url)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
加载资源  
#### 参数
+ request *&lt;<font class='datatype'>[HttpRequest](/webroute/api/HttpRequest)</font>&gt;*   request
+ response *&lt;<font class='datatype'>HttpResponse</font>&gt;*  response
+ url *&lt;<font class='datatype'>string</font>&gt;*       url
  
#### 返回值
<font class='datatype'>Promise&lt;number|object&gt;</font>  
0不用回写数据 或 {data:data,type:mimetype}  
### <a id="METHOD_writeCacheToClient">writeCacheToClient(response[,etag[,lastModified]])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
写cache到客户端  
#### 参数
+ response *&lt;<font class='datatype'>HttpResponse</font>&gt;*          response对象
+ etag *&lt;<font class='datatype'>string</font>&gt;*              etag            文件hash码
+ lastModified *&lt;<font class='datatype'>string</font>&gt;*      lasmodified     最后修改时间
  
#### 返回值
void  
