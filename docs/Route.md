# Class Route
## 属性列表
+ [children](#PROP_children)
+ [data](#PROP_data)
+ [dataUrl](#PROP_dataUrl)
+ [fullPath](#PROP_fullPath)
+ [id](#PROP_id)
+ [module](#PROP_module)
+ [moduleName](#PROP_moduleName)
+ [onEnter](#PROP_onEnter)
+ [onLeave](#PROP_onLeave)
+ [params](#PROP_params)
+ [parent](#PROP_parent)
+ [path](#PROP_path)
+ [useParentPath](#PROP_useParentPath)
  
## 方法列表
+ [addChild](#METHOD_addChild)
+ [setLinkActive](#METHOD_setLinkActive)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
路由类  
## 构造方法
### <a id="METHOD_constructor">constructor(config)</a>
#### 参数
+ config *&lt;<font class='datatype'>[IRouteCfg](/webroute/api/iroutecfg)</font>&gt;* 路由配置项
  
## 属性
### <a id="PROP_children">children</a>
子路由  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;[Route](/webroute/api/route)&gt;</font>  
#### 初始值
[]  
### <a id="PROP_data">data</a>
路由参数数据  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>any</font>  
#### 初始值
{}  
### <a id="PROP_dataUrl">dataUrl</a>
模块绑定数据url  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_fullPath">fullPath</a>
完整路径  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_id">id</a>
路由id  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_module">module</a>
路由对应模块id或类名  
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
### <a id="PROP_params">params</a>
路由参数名数组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;string&gt;</font>  
#### 初始值
[]  
### <a id="PROP_parent">parent</a>
父路由  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[Route](/webroute/api/route)</font>  
### <a id="PROP_path">path</a>
路由路径  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_useParentPath">useParentPath</a>
是否使用父路由路径  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
## 方法
### <a id="METHOD_addChild">addChild(child)</a>
#### 描述
添加子路由  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ child *&lt;<font class='datatype'>[Route](/webroute/api/route)</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_setLinkActive">setLinkActive()</a>
#### 描述
设置关联标签激活状态  
#### 修饰符
<font class="modifier">public</font>  
#### 返回值
void  
