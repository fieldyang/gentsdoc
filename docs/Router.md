# Class Router
## 属性列表
+ [activeDomMap](#PROP_activeDomMap)
+ [currentIndex](#PROP_currentIndex)
+ [currentPath](#PROP_currentPath)
+ [loading](#PROP_loading)
+ [onDefaultEnter](#PROP_onDefaultEnter)
+ [onDefaultLeave](#PROP_onDefaultLeave)
+ [routerKeyMap](#PROP_routerKeyMap)
+ [routes](#PROP_routes)
+ [showPath](#PROP_showPath)
+ [startStyle](#PROP_startStyle)
+ [waitList](#PROP_waitList)
  
## 方法列表
+ [addPath](#METHOD_addPath)
+ [addRoute](#METHOD_addRoute)
+ [changeActive](#METHOD_changeActive)
+ [compare](#METHOD_compare)
+ [getRoute](#METHOD_getRoute)
+ [load](#METHOD_load)
+ [start](#METHOD_start)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
路由，主要用于模块间跳转，一个应用中存在一个router，多个route  
采用修改页面hash方式进行路由历史控制，每个route 可设置onEnter事件(钩子) 和 onLeave事件(钩子)  
回调调用的几个问题  
onLeave事件在路由切换时响应，如果存在多级路由切换，则从底一直到相同祖先路由，都会进行onLeave事件响应  
如：从/r1/r2/r3  到 /r1/r4/r5，则onLeave响应顺序为r3、r2  
onEnter事件则从上往下执行  
## 属性
### <a id="PROP_activeDomMap">activeDomMap</a>
激活Dom map，格式为{moduleId:[]}  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Map&lt;number,Array&lt;string&gt;&gt;</font>  
#### 初始值
new Map()  
### <a id="PROP_currentIndex">currentIndex</a>
当前路由在路由链中的index  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>number</font>  
#### 初始值
0  
### <a id="PROP_currentPath">currentPath</a>
当前路径  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>string</font>  
#### 初始值
''  
### <a id="PROP_loading">loading</a>
加载中标志  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
#### 初始值
false  
### <a id="PROP_onDefaultEnter">onDefaultEnter</a>
默认路由进入事件方法  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Function</font>  
### <a id="PROP_onDefaultLeave">onDefaultLeave</a>
默认路由离开事件  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Function</font>  
### <a id="PROP_routerKeyMap">routerKeyMap</a>
绑定到module的router指令对应的key，即router容器对应的key，格式为 {moduleId:routerKey,...}  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Map&lt;number,string&gt;</font>  
#### 初始值
new Map()  
### <a id="PROP_routes">routes</a>
路由map  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Map&lt;number,Route&gt;</font>  
#### 初始值
new Map()  
### <a id="PROP_showPath">showPath</a>
显示路径（useParentPath时，实际路由路径与显示路径不一致）  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>string</font>  
#### 初始值
''  
### <a id="PROP_startStyle">startStyle</a>
启动方式 0:直接启动 1:由element active改变启动 2:popstate 启动  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>number</font>  
#### 初始值
0  
### <a id="PROP_waitList">waitList</a>
path等待链表  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Array&lt;string&gt;</font>  
#### 初始值
[]  
## 方法
### <a id="METHOD_addPath">addPath(path)</a>
#### 描述
往路由管理器中添加路径  
#### 修饰符
<font class="modifier">public  static  async</font>  
#### 参数
+ path *&lt;<font class='datatype'>string</font>&gt;* 	路径
  
#### 返回值
void  
### <a id="METHOD_addRoute">addRoute(route,parent)</a>
#### 描述
添加路由  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ route *&lt;<font class='datatype'>[Route](/webroute/api/route)</font>&gt;* 	路由配置
+ parent *&lt;<font class='datatype'>[Route](/webroute/api/route)</font>&gt;* 	父路由
  
#### 返回值
void  
### <a id="METHOD_changeActive">changeActive(module,path)</a>
#### 描述
修改模块active view（如果为view active为true，则需要路由跳转）  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ module *&lt;any&gt;* 	模块
+ path *&lt;any&gt;* 		view对应的route路径
  
#### 返回值
void  
### <a id="METHOD_compare">compare(path1,path2)</a>
#### 描述
比较两个路径对应的路由链  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ path1 *&lt;<font class='datatype'>string</font>&gt;* 	第一个路径
+ path2 *&lt;<font class='datatype'>string</font>&gt;* 	第二个路径
  
#### 返回值
<font class='datatype'>Array&lt;any&gt; </font>  
[不同路由的父路由，第一个需要销毁的路由数组，第二个需要增加的路由数组，上2级路由]  
### <a id="METHOD_getRoute">getRoute(path[,last])</a>
#### 描述
获取路由  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ path *&lt;<font class='datatype'>string</font>&gt;* 	路径
+ last *&lt;<font class='datatype'>boolean</font>&gt;* 	是否获取最后一个路由,默认false
  
#### 返回值
<font class='datatype'>Array&lt;[Route](/webroute/api/route)&gt; </font>  
### <a id="METHOD_load">load()</a>
#### 描述
启动加载  
#### 修饰符
<font class="modifier">public  static  async</font>  
#### 返回值
void  
### <a id="METHOD_start">start(path)</a>
#### 描述
切换路由  
#### 修饰符
<font class="modifier">public  static  async</font>  
#### 参数
+ path *&lt;<font class='datatype'>string</font>&gt;* 	路径
  
#### 返回值
void  
