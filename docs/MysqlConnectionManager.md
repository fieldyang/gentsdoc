# Class:MysqlConnectionManager
## 属性
+ [connection](#PROP_connection)
+ [dbMdl](#PROP_dbMdl)
+ [options](#PROP_options)
+ [pool](#PROP_pool)
+ [usePool](#PROP_usePool)
  
## 方法
+ [getConnection](#METHOD_getConnection)
+ [getManager](#METHOD_getManager)
+ [release](#METHOD_release)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
mysql连接管理器  
### Implements:
<font class='datatype'>[ConnectionManager](/webroute/api/ConnectionManager)</font>  
## 构造方法
### <a id="METHOD_constructor">constructor(cfg)</a>
#### 参数
+ cfg *&lt;<font class='datatype'>any</font>&gt;* 配置对象 {usePool:使用连接池,useTransaction:是否启用事务机制,其它配置参考options属性说明}
  
## 属性
### <a id="PROP_connection">connection</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
mysql connection对象  
### <a id="PROP_dbMdl">dbMdl</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
module mysql  
### <a id="PROP_options">options</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
数据库配置项，示例如下：  
```  
 {  
   "host":"localhost",  
   "port":3306,  
   "user":"your user",  
   "password":"your password",  
   "database":"your db",  
   "connectionLimit":10         
 }  
```  
更多细节参考npm mysql  
### <a id="PROP_pool">pool</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
连接池  
### <a id="PROP_usePool">usePool</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
是否使用连接池  
## 方法
### <a id="METHOD_getConnection">getConnection()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
#### 描述
获取连接  
#### 返回值
void  
### <a id="METHOD_getManager">getManager()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
#### 描述
获取EntityManager，TypeormConnectionManager有效，其它返回null  
#### 返回值
<font class='datatype'>Promise&lt;EntityManager&gt;</font>  
### <a id="METHOD_release">release(conn)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
#### 描述
释放连接  
#### 参数
+ conn *&lt;<font class='datatype'>any</font>&gt;* mysql connection对象
  
#### 返回值
void  
