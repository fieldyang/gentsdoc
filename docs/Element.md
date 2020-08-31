# Class Element
## 属性列表
+ [assets](#PROP_assets)
+ [children](#PROP_children)
+ [directives](#PROP_directives)
+ [dontRender](#PROP_dontRender)
+ [events](#PROP_events)
+ [exprProps](#PROP_exprProps)
+ [expressions](#PROP_expressions)
+ [key](#PROP_key)
+ [modelId](#PROP_modelId)
+ [parent](#PROP_parent)
+ [parentKey](#PROP_parentKey)
+ [plugin](#PROP_plugin)
+ [props](#PROP_props)
+ [tagName](#PROP_tagName)
+ [textContent](#PROP_textContent)
+ [tmpData](#PROP_tmpData)
+ [type](#PROP_type)
  
## 方法列表
+ [add](#METHOD_add)
+ [addClass](#METHOD_addClass)
+ [addDirective](#METHOD_addDirective)
+ [addEvent](#METHOD_addEvent)
+ [clone](#METHOD_clone)
+ [compare](#METHOD_compare)
+ [contains](#METHOD_contains)
+ [delProp](#METHOD_delProp)
+ [doDontRender](#METHOD_doDontRender)
+ [getDirective](#METHOD_getDirective)
+ [getParent](#METHOD_getParent)
+ [getProp](#METHOD_getProp)
+ [handleAssets](#METHOD_handleAssets)
+ [handleDirectives](#METHOD_handleDirectives)
+ [handleEvents](#METHOD_handleEvents)
+ [handleExpression](#METHOD_handleExpression)
+ [handleProps](#METHOD_handleProps)
+ [handleTextContent](#METHOD_handleTextContent)
+ [hasClass](#METHOD_hasClass)
+ [hasDirective](#METHOD_hasDirective)
+ [hasProp](#METHOD_hasProp)
+ [query](#METHOD_query)
+ [remove](#METHOD_remove)
+ [removeChild](#METHOD_removeChild)
+ [removeClass](#METHOD_removeClass)
+ [removeDirectives](#METHOD_removeDirectives)
+ [removeFromHtml](#METHOD_removeFromHtml)
+ [render](#METHOD_render)
+ [renderToHtml](#METHOD_renderToHtml)
+ [replace](#METHOD_replace)
+ [setProp](#METHOD_setProp)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
虚拟dom  
## 构造方法
### <a id="METHOD_constructor">constructor([tag])</a>
#### 参数
+ tag *&lt;<font class='datatype'>string</font>&gt;* 标签名
  
## 属性
### <a id="PROP_assets">assets</a>
直接属性 不是来自于attribute，而是直接作用于html element，如el.checked,el.value等  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Map&lt;string,any&gt;</font>  
#### 初始值
new Map()  
### <a id="PROP_children">children</a>
子element  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;[Element](/webroute/api/element)&gt;</font>  
#### 初始值
[]  
### <a id="PROP_directives">directives</a>
指令集  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;[Directive](/webroute/api/directive)&gt;</font>  
#### 初始值
[]  
### <a id="PROP_dontRender">dontRender</a>
不渲染标志，单次渲染有效  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
#### 初始值
false  
### <a id="PROP_events">events</a>
事件集合,{eventName1:nodomEvent1,...}  
一个事件名，可以绑定多个事件方法对象  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Map&lt;string,NodomEvent|NodomEvent[]&gt;</font>  
#### 初始值
new Map()  
### <a id="PROP_exprProps">exprProps</a>
含表达式的属性集合  
{prop1:value1,...}  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>object</font>  
#### 初始值
{}  
### <a id="PROP_expressions">expressions</a>
表达式+字符串数组，用于textnode  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;Expression|string&gt;</font>  
#### 初始值
[]  
### <a id="PROP_key">key</a>
key，整颗虚拟dom树唯一  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_modelId">modelId</a>
绑定的模型id，如果没有，则从父继承  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_parent">parent</a>
父虚拟dom  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[Element](/webroute/api/element)</font>  
### <a id="PROP_parentKey">parentKey</a>
父element key  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_plugin">plugin</a>
绑定插件  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[Plugin](/webroute/api/plugin)</font>  
### <a id="PROP_props">props</a>
静态属性(attribute)集合  
{prop1:value1,...}  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>object</font>  
#### 初始值
{}  
### <a id="PROP_tagName">tagName</a>
元素名，如div  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_textContent">textContent</a>
element为textnode时有效  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string|HTMLElement</font>  
### <a id="PROP_tmpData">tmpData</a>
临时数据  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>any</font>  
### <a id="PROP_type">type</a>
类型，包括: html fragment 或 html element  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
## 方法
### <a id="METHOD_add">add(dom)</a>
#### 描述
添加子节点  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ dom *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;* 	子节点
  
#### 返回值
void  
### <a id="METHOD_addClass">addClass(cls)</a>
#### 描述
添加css class  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ cls *&lt;<font class='datatype'>string</font>&gt;* class名
  
#### 返回值
void  
### <a id="METHOD_addDirective">addDirective(directive[,sort])</a>
#### 描述
添加指令  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ directive *&lt;<font class='datatype'>[Directive](/webroute/api/directive)</font>&gt;*     指令对象
+ sort *&lt;<font class='datatype'>boolean</font>&gt;*          是否排序
  
#### 返回值
void  
### <a id="METHOD_addEvent">addEvent(event)</a>
#### 描述
添加事件  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ event *&lt;<font class='datatype'>[NodomEvent](/webroute/api/nodomevent)</font>&gt;*         事件对象
  
#### 返回值
void  
### <a id="METHOD_clone">clone([changeKey])</a>
#### 描述
克隆  
changeKey    是否更改key，主要用于创建时克隆，渲染时克隆不允许修改key  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ changeKey *&lt;<font class='datatype'>boolean</font>&gt;* 
  
#### 返回值
<font class='datatype'>[Element](/webroute/api/element)</font>  
### <a id="METHOD_compare">compare(dst,retArr[,parentNode])</a>
#### 描述
比较节点  
##### returns	{type:类型
text/rep/add/upd,node:节点,parent:父节点,  
changeProps:改变属性,[{k:prop1,v:value1},...],removeProps:删除属性,[prop1,prop2,...]}  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ dst *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;* 	待比较节点
+ retArr *&lt;<font class='datatype'>Array&lt;[ChangedDom](/webroute/api/changeddom)&gt;</font>&gt;* 
+ parentNode *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_contains">contains(dom)</a>
#### 描述
是否包含节点  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ dom *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;* 	包含的节点
  
#### 返回值
void  
### <a id="METHOD_delProp">delProp(props[,isExpr])</a>
#### 描述
删除属性  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ props *&lt;<font class='datatype'>string|string[]</font>&gt;*     属性名或属性名数组
+ isExpr *&lt;<font class='datatype'>boolean</font>&gt;*    是否是表达式属性 默认false
  
#### 返回值
void  
### <a id="METHOD_doDontRender">doDontRender()</a>
#### 描述
执行不渲染关联操作  
关联操作，包括:  
1 节点(子节点)含有module指令，需要unactive  
#### 修饰符
<font class="modifier">public</font>  
#### 返回值
void  
### <a id="METHOD_getDirective">getDirective(directiveType)</a>
#### 描述
获取某个类型的指令  
##### return
directive  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ directiveType *&lt;any&gt;* 	指令类型名
  
#### 返回值
<font class='datatype'>Directive </font>  
### <a id="METHOD_getParent">getParent(module)</a>
#### 描述
获取parent  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;* 模块
  
#### 返回值
<font class='datatype'>[Element](/webroute/api/element)</font>  
父element  
### <a id="METHOD_getProp">getProp(propName[,isExpr])</a>
#### 描述
获取属性值  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ propName *&lt;<font class='datatype'>string</font>&gt;*  属性名
+ isExpr *&lt;<font class='datatype'>boolean</font>&gt;*    是否是表达式属性 默认false
  
#### 返回值
void  
### <a id="METHOD_handleAssets">handleAssets(el)</a>
#### 描述
处理asset，在渲染到html时执行  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ el *&lt;<font class='datatype'>HTMLElement</font>&gt;*    dom对应的html element
  
#### 返回值
void  
### <a id="METHOD_handleDirectives">handleDirectives(module)</a>
#### 描述
处理指令  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;*    模块
  
#### 返回值
void  
### <a id="METHOD_handleEvents">handleEvents(module,el,parent[,parentEl])</a>
#### 描述
处理事件  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;*    模块
+ el *&lt;<font class='datatype'>Node</font>&gt;*        html element
+ parent *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*    父virtual dom
+ parentEl *&lt;<font class='datatype'>Node</font>&gt;*  父html element
  
#### 返回值
void  
### <a id="METHOD_handleExpression">handleExpression(exprArr,module)</a>
#### 描述
表达式处理，添加到expression计算队列  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ exprArr *&lt;<font class='datatype'>Array&lt;Expression|string&gt;</font>&gt;*   表达式或字符串数组
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;*    模块
  
#### 返回值
void  
### <a id="METHOD_handleProps">handleProps(module)</a>
#### 描述
处理属性（带表达式）  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;*    模块
  
#### 返回值
void  
### <a id="METHOD_handleTextContent">handleTextContent(module)</a>
#### 描述
处理文本（表达式）  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;any&gt;*    模块
  
#### 返回值
void  
### <a id="METHOD_hasClass">hasClass(cls)</a>
#### 描述
是否存在某个class  
##### return
true/false  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ cls *&lt;<font class='datatype'>string</font>&gt;*   classname
  
#### 返回值
<font class='datatype'>boolean</font>  
### <a id="METHOD_hasDirective">hasDirective(directiveType)</a>
#### 描述
是否有某个类型的指令  
##### return
true/false  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ directiveType *&lt;any&gt;* 	指令类型名
  
#### 返回值
<font class='datatype'>boolean </font>  
### <a id="METHOD_hasProp">hasProp(propName[,isExpr])</a>
#### 描述
是否拥有属性  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ propName *&lt;<font class='datatype'>string</font>&gt;*  属性名
+ isExpr *&lt;<font class='datatype'>boolean</font>&gt;*    是否是表达式属性 默认false
  
#### 返回值
void  
### <a id="METHOD_query">query(key)</a>
#### 描述
查找子孙节点  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ key *&lt;<font class='datatype'>string</font>&gt;* 	element key
  
#### 返回值
void  
### <a id="METHOD_remove">remove(module[,delHtml])</a>
#### 描述
从虚拟dom树和html dom树删除自己  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;* 	模块
+ delHtml *&lt;<font class='datatype'>boolean</font>&gt;* 	是否删除html element
  
#### 返回值
void  
### <a id="METHOD_removeChild">removeChild(dom)</a>
#### 描述
移除子节点  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ dom *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*   子dom
  
#### 返回值
void  
### <a id="METHOD_removeClass">removeClass(cls)</a>
#### 描述
删除css class  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ cls *&lt;<font class='datatype'>string</font>&gt;* class名
  
#### 返回值
void  
### <a id="METHOD_removeDirectives">removeDirectives(directives)</a>
#### 描述
移除指令  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ directives *&lt;<font class='datatype'>string[]</font>&gt;* 	待删除的指令类型数组
  
#### 返回值
void  
### <a id="METHOD_removeFromHtml">removeFromHtml(module)</a>
#### 描述
从html删除  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_render">render(module[,parent])</a>
#### 描述
渲染到virtualdom树  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;* 	模块
+ parent *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;* 	父节点
  
#### 返回值
void  
### <a id="METHOD_renderToHtml">renderToHtml(module,params)</a>
#### 描述
渲染到html element  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;* 	模块
+ params *&lt;<font class='datatype'>[ChangedDom](/webroute/api/changeddom)</font>&gt;* 	配置对象{}  
type 		类型  
parent 	父虚拟dom
  
#### 返回值
void  
### <a id="METHOD_replace">replace(dst)</a>
#### 描述
替换目标节点  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ dst *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;* 	目标节点
  
#### 返回值
void  
### <a id="METHOD_setProp">setProp(propName,v[,isExpr])</a>
#### 描述
设置属性值  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ propName *&lt;<font class='datatype'>string</font>&gt;*  属性名
+ v *&lt;<font class='datatype'>any</font>&gt;*         属性值
+ isExpr *&lt;<font class='datatype'>boolean</font>&gt;*    是否是表达式属性 默认false
  
#### 返回值
void  
