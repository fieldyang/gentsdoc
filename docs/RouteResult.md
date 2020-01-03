# Interface:RouteResult
## 属性
+ [params](#PROP_params)
+ [type](#PROP_type)
+ [url](#PROP_url)
+ [value](#PROP_value)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
路由结果类型  
## 属性
### <a id="PROP_params">params</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
参数名数组，当type为chain时，从当前路由对应类中获取参数数组对应的属性值并以参数对象传递到下一个路由  
### <a id="PROP_type">type</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
结果类型，包括:redirect(重定向),chain(路由链,和redirect不同，url不会改变,json(ajax json数据),none(什么都不做)。默认json  
### <a id="PROP_url">url</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
路径，type 为redirect 和 url时，必须设置  
### <a id="PROP_value">value</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
返回值，当返回值与value一致时，将执行此结果  
