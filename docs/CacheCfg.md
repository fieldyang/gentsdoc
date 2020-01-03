# Interface:CacheCfg
## 属性
+ [maxSize](#PROP_maxSize)
+ [name](#PROP_name)
+ [redis](#PROP_redis)
+ [saveType](#PROP_saveType)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
cache配置类型，初始化cache时使用  
## 属性
### <a id="PROP_maxSize">maxSize</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
最大空间，默认为0(表示不限制)，如果saveType=1，设置无效  
### <a id="PROP_name">name</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
cache 名  
### <a id="PROP_redis">redis</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
redis名，如果saveType=1，则必须设置，默认default  
### <a id="PROP_saveType">saveType</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
存储类型 0内存，1redis，默认0，如果应用设置为集群部署，则设置无效(强制为1)  
