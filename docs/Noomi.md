# Class:Noomi   
## 属性
+ [httpsServer](#PROP_httpsServer)
+ [port](#PROP_port)
+ [server](#PROP_server)
+ [sslPort](#PROP_sslPort)
## 方法
+ [constructor](#METHOD_constructor)
+ [init](#METHOD_init)
---   
## 描述
   
### summary   
程序执行入口  
   
## 属性   
### <a id="PROP_httpsServer">httpsServer</a>   
***public***   
https server
     
### <a id="PROP_port">port</a>   
***public***   
http port
     
### <a id="PROP_server">server</a>   
***public***   
http server
     
### <a id="PROP_sslPort">sslPort</a>   
***public***   
https port
     
## 方法   
### <a id="METHOD_constructor">constructor([port[,configPath[,sslPort]]])</a>   
***public***   
#### 参数   
+ port *&lt;number&gt;*          http port,默认 3000   
+ configPath *&lt;string&gt;*    配置文件路径，默认 /config   
+ sslPort *&lt;number&gt;*       https port，默认4000   
#### 返回值   
void   
### <a id="METHOD_init">init(basePath)</a>   
***public***   
#### 描述   
初始化   
#### 参数   
+ basePath *&lt;string&gt;*    
#### 返回值   
void   
