# Class:Noomi   
## 属性
+ [port](#PROP_port)
+ [sslPort](#PROP_sslPort)
+ [server](#PROP_server)
+ [httpsServer](#PROP_httpsServer)
## 方法
+ [constructor](#METHOD_constructor)
+ [init](#METHOD_init)
---   
## 描述
   
### summary   
程序执行入口  
   
## 属性   
### <a id="PROP_port">port</a>   
http port
     
### <a id="PROP_sslPort">sslPort</a>   
https port
     
### <a id="PROP_server">server</a>   
http server
     
### <a id="PROP_httpsServer">httpsServer</a>   
https server
     
## 方法   
### <a id="METHOD_constructor">constructor([port[,configPath[,sslPort]]])</a>   
***public***   
#### 返回值   
void   
#### 参数   
+ port *&lt;number&gt;*          http port,默认 3000   
+ configPath *&lt;string&gt;*    配置文件路径，默认 /config   
+ sslPort *&lt;number&gt;*       https port，默认4000   
### <a id="METHOD_init">init(basePath)</a>   
***public***   
#### 描述   
初始化   
#### 返回值   
void   
#### 参数   
+ basePath *&lt;string&gt;*    
