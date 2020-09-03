# Class Module
## 属性列表
+ [/**](#PROP_/**)
+ [beforeFirstRenderOps](#PROP_beforeFirstRenderOps)
+ [beforeRenderOps](#PROP_beforeRenderOps)
+ [children](#PROP_children)
+ [container](#PROP_container)
+ [containerKey](#PROP_containerKey)
+ [dataUrl](#PROP_dataUrl)
+ [firstRender](#PROP_firstRender)
+ [firstRenderOps](#PROP_firstRenderOps)
+ [id](#PROP_id)
+ [initConfig](#PROP_initConfig)
+ [isMain](#PROP_isMain)
+ [loadNewData](#PROP_loadNewData)
+ [methodFactory](#PROP_methodFactory)
+ [model](#PROP_model)
+ [modelFactory](#PROP_modelFactory)
+ [moduleMap](#PROP_moduleMap)
+ [name](#PROP_name)
+ [parentId](#PROP_parentId)
+ [plugins](#PROP_plugins)
+ [renderDoms](#PROP_renderDoms)
+ [renderOps](#PROP_renderOps)
+ [renderTree](#PROP_renderTree)
+ [selector](#PROP_selector)
+ [state](#PROP_state)
+ [template](#PROP_template)
+ [virtualDom](#PROP_virtualDom)
  
## 方法列表
+ [active](#METHOD_active)
+ [addBeforeFirstRenderOperation](#METHOD_addBeforeFirstRenderOperation)
+ [addBeforeRenderOperation](#METHOD_addBeforeRenderOperation)
+ [addChild](#METHOD_addChild)
+ [addFirstRenderOperation](#METHOD_addFirstRenderOperation)
+ [addPlugin](#METHOD_addPlugin)
+ [addRenderOperation](#METHOD_addRenderOperation)
+ [broadcast](#METHOD_broadcast)
+ [clone](#METHOD_clone)
+ [dataChange](#METHOD_dataChange)
+ [destroy](#METHOD_destroy)
+ [doFirstRender](#METHOD_doFirstRender)
+ [doModuleEvent](#METHOD_doModuleEvent)
+ [doRenderOp](#METHOD_doRenderOp)
+ [getContainerKey](#METHOD_getContainerKey)
+ [getPlugin](#METHOD_getPlugin)
+ [hasContainer](#METHOD_hasContainer)
+ [init](#METHOD_init)
+ [receive](#METHOD_receive)
+ [render](#METHOD_render)
+ [send](#METHOD_send)
+ [setContainerKey](#METHOD_setContainerKey)
+ [unactive](#METHOD_unactive)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
模块类  
## 构造方法
### <a id="METHOD_constructor">constructor([config])</a>
#### 参数
+ config *&lt;<font class='datatype'>[IModuleCfg](/webroute/api/imodulecfg)</font>&gt;*    模块配置
  
## 属性
### <a id="PROP_/**">/**</a>
**********事件**************/  
#### 修饰符
<font class="modifier">public</font>  
### <a id="PROP_beforeFirstRenderOps">beforeFirstRenderOps</a>
首次渲染前执行操作数组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array &lt; Function &gt;</font>  
#### 初始值
[]  
### <a id="PROP_beforeRenderOps">beforeRenderOps</a>
每次渲染前执行操作数组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;Function&gt;</font>  
#### 初始值
[]  
### <a id="PROP_children">children</a>
子模块id数组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array &lt; number &gt;</font>  
#### 初始值
[]  
### <a id="PROP_container">container</a>
放置模块的容器  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>HTMLElement</font>  
#### 初始值
null  
### <a id="PROP_containerKey">containerKey</a>
容器key  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_dataUrl">dataUrl</a>
数据url  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_firstRender">firstRender</a>
是否是首次渲染  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
#### 初始值
true  
### <a id="PROP_firstRenderOps">firstRenderOps</a>
首次渲染后执行操作数组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array &lt; Function &gt;</font>  
#### 初始值
[]  
### <a id="PROP_id">id</a>
模块id(全局唯一)  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_initConfig">initConfig</a>
初始配置  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[IModuleCfg](/webroute/api/imodulecfg)</font>  
### <a id="PROP_isMain">isMain</a>
是否主模块，一个app只有一个根模块  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
### <a id="PROP_loadNewData">loadNewData</a>
需要加载新数据  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
#### 初始值
false  
### <a id="PROP_methodFactory">methodFactory</a>
方法工厂  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[MethodFactory](/webroute/api/methodfactory)</font>  
### <a id="PROP_model">model</a>
模型  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[Model](/webroute/api/model)</font>  
### <a id="PROP_modelFactory">modelFactory</a>
数据模型工厂  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[ModelFactory](/webroute/api/modelfactory)</font>  
#### 初始值
new ModelFactory()  
### <a id="PROP_moduleMap">moduleMap</a>
子模块名id映射，如 {modulea:1}  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Map&lt;string,number&gt;</font>  
#### 初始值
new Map()  
### <a id="PROP_name">name</a>
模块名(模块内(父模块的子模块之间)唯一)，如果不设置，则系统会自动生成Module+id  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_parentId">parentId</a>
父模块名  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_plugins">plugins</a>
插件集合  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Map&lt;string,Plugin&gt;</font>  
#### 初始值
new Map()  
### <a id="PROP_renderDoms">renderDoms</a>
待渲染的虚拟dom数组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array &lt; ChangedDom &gt;</font>  
#### 初始值
[]  
### <a id="PROP_renderOps">renderOps</a>
每次渲染后执行操作数组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;Function&gt;</font>  
#### 初始值
[]  
### <a id="PROP_renderTree">renderTree</a>
渲染树  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[Element](/webroute/api/element)</font>  
### <a id="PROP_selector">selector</a>
container 选择器  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_state">state</a>
状态 0 create(创建)、1 init(初始化，已编译)、2 unactive(渲染后被置为非激活) 3 active(激活，可渲染显示)  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
#### 初始值
0  
### <a id="PROP_template">template</a>
模版串  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_virtualDom">virtualDom</a>
根虚拟dom  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[Element](/webroute/api/element)</font>  
## 方法
### <a id="METHOD_active">active()</a>
#### 描述
激活模块(添加到渲染器)  
#### 修饰符
<font class="modifier">public  async</font>  
#### 返回值
void  
### <a id="METHOD_addBeforeFirstRenderOperation">addBeforeFirstRenderOperation(foo)</a>
#### 描述
添加首次渲染前执行操作  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ foo *&lt;<font class='datatype'>Function</font>&gt;*  	操作方法
  
#### 返回值
void  
### <a id="METHOD_addBeforeRenderOperation">addBeforeRenderOperation(foo)</a>
#### 描述
添加渲染前执行操作  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ foo *&lt;<font class='datatype'>Function</font>&gt;*  	操作方法
  
#### 返回值
void  
### <a id="METHOD_addChild">addChild(moduleId)</a>
#### 描述
添加子模块  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ moduleId *&lt;<font class='datatype'>number</font>&gt;*      模块id
  
#### 返回值
void  
### <a id="METHOD_addFirstRenderOperation">addFirstRenderOperation(foo)</a>
#### 描述
添加首次渲染后执行操作  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ foo *&lt;<font class='datatype'>Function</font>&gt;*  	操作方法
  
#### 返回值
void  
### <a id="METHOD_addPlugin">addPlugin(name,plugin)</a>
#### 描述
添加插件  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ name *&lt;<font class='datatype'>string</font>&gt;*      插件名
+ plugin *&lt;<font class='datatype'>[Plugin](/webroute/api/plugin)</font>&gt;*    插件
  
#### 返回值
void  
### <a id="METHOD_addRenderOperation">addRenderOperation(foo)</a>
#### 描述
添加渲染后执行操作  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ foo *&lt;<font class='datatype'>Function</font>&gt;*  	操作方法
  
#### 返回值
void  
### <a id="METHOD_broadcast">broadcast(data)</a>
#### 描述
广播给父、兄弟和孩子（第一级）节点  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ data *&lt;<font class='datatype'>any</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_clone">clone(moduleName)</a>
#### 描述
克隆模块  
共享virtual Dom，但是名字为新名字  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ moduleName *&lt;<font class='datatype'>string</font>&gt;*    新模块名
  
#### 返回值
<font class='datatype'>any</font>  
### <a id="METHOD_dataChange">dataChange()</a>
#### 描述
数据改变  
#### 修饰符
<font class="modifier">public</font>  
#### 返回值
void  
### <a id="METHOD_destroy">destroy()</a>
#### 描述
模块终结  
#### 修饰符
<font class="modifier">public</font>  
#### 返回值
void  
### <a id="METHOD_doFirstRender">doFirstRender(root)</a>
#### 描述
执行首次渲染  
#### 修饰符
<font class="modifier">private</font>  
#### 参数
+ root *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;* 	根虚拟dom
  
#### 返回值
void  
### <a id="METHOD_doModuleEvent">doModuleEvent(eventName[,param])</a>
#### 描述
执行模块事件  
#### 修饰符
<font class="modifier">private</font>  
#### 参数
+ eventName *&lt;<font class='datatype'>string</font>&gt;* 	事件名
+ param *&lt;<font class='datatype'>Array&lt;any&gt;</font>&gt;* 		参数，为数组
  
#### 返回值
void  
### <a id="METHOD_doRenderOp">doRenderOp(renderOps)</a>
#### 描述
执行渲染相关附加操作  
#### 修饰符
<font class="modifier">private</font>  
#### 参数
+ renderOps *&lt;<font class='datatype'>Function[]</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_getContainerKey">getContainerKey()</a>
#### 描述
获取模块容器 key  
#### 修饰符
<font class="modifier">public</font>  
#### 返回值
void  
### <a id="METHOD_getPlugin">getPlugin(name)</a>
#### 描述
获取插件  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ name *&lt;<font class='datatype'>string</font>&gt;*  插件名
  
#### 返回值
<font class='datatype'>[Plugin](/webroute/api/plugin)</font>  
插件实例  
### <a id="METHOD_hasContainer">hasContainer()</a>
#### 描述
检查容器是否存在，如果不存在，则尝试找到  
#### 修饰符
<font class="modifier">public</font>  
#### 返回值
void  
### <a id="METHOD_init">init()</a>
#### 描述
初始化模块（加载和编译）  
#### 修饰符
<font class="modifier">public  async</font>  
#### 返回值
<font class='datatype'>Promise&lt;any&gt; </font>  
### <a id="METHOD_receive">receive(fromName,data)</a>
#### 描述
接受消息  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ fromName *&lt;any&gt;* 		来源模块名
+ data *&lt;any&gt;* 			消息内容
  
#### 返回值
void  
### <a id="METHOD_render">render()</a>
#### 描述
模型渲染  
##### return
false 渲染失败 true 渲染成功  
#### 修饰符
<font class="modifier">public</font>  
#### 返回值
<font class='datatype'>boolean</font>  
### <a id="METHOD_send">send(toName,data)</a>
#### 描述
发送  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ toName *&lt;<font class='datatype'>string|number</font>&gt;* 		接收模块名或模块id，如果为模块id，则直接发送，不需要转换
+ data *&lt;<font class='datatype'>any</font>&gt;* 			消息内容
  
#### 返回值
void  
### <a id="METHOD_setContainerKey">setContainerKey(key)</a>
#### 描述
设置模块容器 key  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ key *&lt;<font class='datatype'>string</font>&gt;*   模块容器key
  
#### 返回值
void  
### <a id="METHOD_unactive">unactive()</a>
#### 描述
取消激活  
#### 修饰符
<font class="modifier">public</font>  
#### 返回值
void  
