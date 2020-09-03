# Interface IAppCfg
## 属性列表
+ [language](#PROP_language)
+ [module](#PROP_module)
+ [modules](#PROP_modules)
+ [path](#PROP_path)
+ [routes](#PROP_routes)
+ [scheduleCircle](#PROP_scheduleCircle)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
应用初始化配置类型  
## 属性
### <a id="PROP_language">language</a>
语言，默认 zh  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_module">module</a>
主模块配置  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[IModuleCfg](/webroute/api/imodulecfg)</font>  
### <a id="PROP_modules">modules</a>
模块配置数组，数组元素包括  
class:模块类名,  
path:模块路径(相对于app module路径),  
data:数据路径(字符串)或数据(object),  
singleton:单例(全应用公用同一个实例，默认true),  
lazy:懒加载(默认false)  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>IMdlClassObj[]</font>  
### <a id="PROP_path">path</a>
路径参数，请参阅Application path属性  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>any</font>  
### <a id="PROP_routes">routes</a>
路由配置  
class:模块类名,  
moduleName:模块名  
data:数据url  
routes:子路由  
onEnter:路由进入事件  
onLeave:路由离开事件  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>IRouteCfg[]</font>  
### <a id="PROP_scheduleCircle">scheduleCircle</a>
调度器间隔时间(ms)，如果支持requestAnimationFrame，则不需要  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
