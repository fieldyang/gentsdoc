# Class Application
## 属性列表
+ [path](#PROP_path)
+ [renderTick](#PROP_renderTick)
+ [rootContainer](#PROP_rootContainer)
  
## 方法列表
+ [getPath](#METHOD_getPath)
+ [setPath](#METHOD_setPath)
  
---
## 描述
<font class="since">开始于 : v2.0</font>  
应用类  
全局对象  
## 属性
### <a id="PROP_path">path</a>
路径对象 包含 {  
app:appPath(应用基础路径),  
css:css路径(css加载基础路径 app+css),  
js:js路径(js加载基础路径 app+css),  
template:模版路径(模版加载基础 app+template)  
route:路由前置路径(路由完整路径为 route + routePath)  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>any</font>  
### <a id="PROP_renderTick">renderTick</a>
调度器执行间隔，如果支持requestAnimationFrame，则不需要  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_rootContainer">rootContainer</a>
根容器  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>HTMLElement|string</font>  
## 方法
### <a id="METHOD_getPath">getPath(type)</a>
#### 描述
获取路径  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ type *&lt;<font class='datatype'>string</font>&gt;*  路径类型 app,template,css,js,module,route
  
#### 返回值
<font class='datatype'>string</font>  
type对应的基础路径  
### <a id="METHOD_setPath">setPath(pathObj)</a>
#### 描述
设置path 对象  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ pathObj *&lt;<font class='datatype'>object</font>&gt;*   路径对象
  
#### 返回值
void  
