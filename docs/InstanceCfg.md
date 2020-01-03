# Interface:InstanceCfg
## 属性
+ [class](#PROP_class)
+ [instance](#PROP_instance)
+ [name](#PROP_name)
+ [params](#PROP_params)
+ [path](#PROP_path)
+ [properties](#PROP_properties)
+ [singleton](#PROP_singleton)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
实例配置对象  
## 属性
### <a id="PROP_class">class</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
类名或类  
### <a id="PROP_instance">instance</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
实例与path 二选一  
### <a id="PROP_name">name</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
实例名  
### <a id="PROP_params">params</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
参数列表，初始化时需要传入的参数  
### <a id="PROP_path">path</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
模块路径（相对noomi.ini配置的modulepath），与instance二选一  
### <a id="PROP_properties">properties</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
属性列表，定义需要注入的属性  
### <a id="PROP_singleton">singleton</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
单例模式，如果为true，表示该类只创建一个实例，调用时，共享调用  
