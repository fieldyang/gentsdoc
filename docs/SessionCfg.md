# Interface:SessionCfg
## 属性
+ [max_size](#PROP_max_size)
+ [name](#PROP_name)
+ [redis](#PROP_redis)
+ [save_type](#PROP_save_type)
+ [timeout](#PROP_timeout)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
session配置项  
## 属性
### <a id="PROP_max_size">max_size</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
缓存最大尺寸，save_type=0时有效  
### <a id="PROP_name">name</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
sessionId名  
### <a id="PROP_redis">redis</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
redis名，save_type=1时有效  
### <a id="PROP_save_type">save_type</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
存储类型 0:memory 1:redis  
### <a id="PROP_timeout">timeout</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
超时时间  
