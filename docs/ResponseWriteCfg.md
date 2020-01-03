# Interface:ResponseWriteCfg
## 属性
+ [charset](#PROP_charset)
+ [crossDomain](#PROP_crossDomain)
+ [data](#PROP_data)
+ [statusCode](#PROP_statusCode)
+ [type](#PROP_type)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
response回写配置项  
## 属性
### <a id="PROP_charset">charset</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
字符集，默认utf8  
### <a id="PROP_crossDomain">crossDomain</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
跨域配置串，多个域名用','分割，默认用webconfig中配置的网址数组，如果都没配置，则使用*  
### <a id="PROP_data">data</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
待写数据，可以是数据串或stream  
### <a id="PROP_statusCode">statusCode</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
http状态码，默认200  
### <a id="PROP_type">type</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
数据类型，默认text/html  
