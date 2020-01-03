# Class:WebConfig
## 属性
+ [config](#PROP_config)
+ [crossDomain](#PROP_crossDomain)
+ [httpsCfg](#PROP_httpsCfg)
+ [useHttps](#PROP_useHttps)
+ [useServerCache](#PROP_useServerCache)
+ [welcomePage](#PROP_welcomePage)
  
## 方法
+ [get](#METHOD_get)
+ [init](#METHOD_init)
+ [setErrorPages](#METHOD_setErrorPages)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
web 配置类  
### remarks
用于管理web配置参数  
## 属性
### <a id="PROP_config">config</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
配置项  
### <a id="PROP_crossDomain">crossDomain</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
跨域域名，多个域名用','分割  
### <a id="PROP_httpsCfg">httpsCfg</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
https配置，useHttps为true时有效，包括：  
only_https:是否只采用https，如果为true，则不会启动http server，只启动https server  
key_file:私钥文件路径，相对于根目录  
cert_file:证书文件路径，相对与根目录  
### <a id="PROP_useHttps">useHttps</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
是否使用https  
### <a id="PROP_useServerCache">useServerCache</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
是否使用cache  
### <a id="PROP_welcomePage">welcomePage</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
欢迎页面，访问根目录时跳转到该页面  
## 方法
### <a id="METHOD_get">get(name)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获取参数  
#### 参数
+ name *&lt;<font class='datatype'>string</font>&gt;* webconfig参数名
  
#### 返回值
void  
### <a id="METHOD_init">init(config)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
初始化  
#### 参数
+ config *&lt;<font class='datatype'>any</font>&gt;* 参阅web.json配置
  
#### 返回值
void  
### <a id="METHOD_setErrorPages">setErrorPages(pages)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
设置异常页面  
#### 参数
+ pages *&lt;<font class='datatype'>Array&lt;object&gt;</font>&gt;* page配置数组[{code:http异常码,location:异常码对应页面地址(相对于项目根目录)}]
  
#### 返回值
void  
