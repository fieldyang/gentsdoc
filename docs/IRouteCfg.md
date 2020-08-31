# Interface IRouteCfg
## 属性列表
+ [module](#PROP_module)
+ [moduleName](#PROP_moduleName)
+ [notAdd](#PROP_notAdd)
+ [onEnter](#PROP_onEnter)
+ [onLeave](#PROP_onLeave)
+ [parent](#PROP_parent)
+ [path](#PROP_path)
+ [routes](#PROP_routes)
+ [useParentPath](#PROP_useParentPath)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
路由配置  
## 属性
### <a id="PROP_module">module</a>
路由模块id或模块类名，id为数字，类名为string  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number|string</font>  
### <a id="PROP_moduleName">moduleName</a>
模块名  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_notAdd">notAdd</a>
不添加到路由树  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
### <a id="PROP_onEnter">onEnter</a>
进入路由事件方法  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Function</font>  
### <a id="PROP_onLeave">onLeave</a>
离开路由方法  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Function</font>  
### <a id="PROP_parent">parent</a>
父路由  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[Route](/webroute/api/route)</font>  
### <a id="PROP_path">path</a>
路由路径，可以带通配符*，可以带参数 /:  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_routes">routes</a>
子路由数组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;[IRouteCfg](/webroute/api/iroutecfg)&gt;</font>  
### <a id="PROP_useParentPath">useParentPath</a>
是否使用父路由路径  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
