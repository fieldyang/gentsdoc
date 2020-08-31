# Class NodomEvent
## 属性列表
+ [capture](#PROP_capture)
+ [delg](#PROP_delg)
+ [domKey](#PROP_domKey)
+ [events](#PROP_events)
+ [extParams](#PROP_extParams)
+ [handleListener](#PROP_handleListener)
+ [handler](#PROP_handler)
+ [moduleId](#PROP_moduleId)
+ [name](#PROP_name)
+ [nopopo](#PROP_nopopo)
+ [once](#PROP_once)
+ [touchListeners](#PROP_touchListeners)
  
## 方法列表
+ [addChild](#METHOD_addChild)
+ [bind](#METHOD_bind)
+ [clone](#METHOD_clone)
+ [delegateTo](#METHOD_delegateTo)
+ [fire](#METHOD_fire)
+ [removeChild](#METHOD_removeChild)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
事件类  
### remarks
事件分为自有事件和代理事件  
自有事件绑定在view上  
代理事件绑定在父view上，存储于事件对象的events数组中  
如果所绑定对象已存在该事件名对应的事件，如果是代理事件，则添加到子事件队列，否则替换view自有事件  
事件执行顺序，先执行代理事件，再执行自有事件  
## 构造方法
### <a id="METHOD_constructor">constructor(eventName[,eventStr[,handler]])</a>
#### 参数
+ eventName *&lt;<font class='datatype'>string</font>&gt;*     事件名
+ eventStr *&lt;<font class='datatype'>string|Function</font>&gt;*      事件串或事件处理函数,以“:”分割,中间不能有空格,结构为: 方法名[:delg(代理到父对象):nopopo(禁止冒泡):once(只执行一次):capture(useCapture)]  
如果为函数，则替代第三个参数
+ handler *&lt;<font class='datatype'>Function</font>&gt;*       事件执行函数，如果方法不在module methods中定义，则可以直接申明，eventStr第一个参数失效，即eventStr可以是":delg:nopopo..."
  
## 属性
### <a id="PROP_capture">capture</a>
使用 capture  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
### <a id="PROP_delg">delg</a>
代理到父对象  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
### <a id="PROP_domKey">domKey</a>
事件所属虚拟dom的key  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_events">events</a>
子事件数组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Map&lt;string,Array&lt;NodomEvent&gt;&gt;</font>  
### <a id="PROP_extParams">extParams</a>
附加参数  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>any</font>  
### <a id="PROP_handleListener">handleListener</a>
事件监听器  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>any</font>  
### <a id="PROP_handler">handler</a>
事件处理函数名(需要在模块methods中定义)  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string|Function</font>  
### <a id="PROP_moduleId">moduleId</a>
模块id  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_name">name</a>
事件名  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_nopopo">nopopo</a>
禁止冒泡  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
### <a id="PROP_once">once</a>
只执行一次  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
### <a id="PROP_touchListeners">touchListeners</a>
触屏监听器  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Map&lt;string,NodomEvent&gt;</font>  
## 方法
### <a id="METHOD_addChild">addChild(ev)</a>
#### 描述
添加子事件  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ ev *&lt;any&gt;*    事件
  
#### 返回值
void  
### <a id="METHOD_bind">bind(module,dom,el)</a>
#### 描述
绑定事件  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;*    模块
+ dom *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*       虚拟dom
+ el *&lt;<font class='datatype'>HTMLElement</font>&gt;*        html element
  
#### 返回值
void  
### <a id="METHOD_clone">clone()</a>
#### 描述
克隆  
#### 修饰符
<font class="modifier">public</font>  
#### 返回值
void  
### <a id="METHOD_delegateTo">delegateTo(module,vdom,el[,parent[,parentEl]])</a>
#### 描述
事件代理到父对象  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;*    模块
+ vdom *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*      虚拟dom
+ el *&lt;<font class='datatype'>HTMLElement</font>&gt;*        事件作用的html element
+ parent *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*    父虚拟dom
+ parentEl *&lt;<font class='datatype'>HTMLElement</font>&gt;*  父element
  
#### 返回值
void  
### <a id="METHOD_fire">fire(e[,el])</a>
#### 描述
事件触发  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ e *&lt;<font class='datatype'>Event</font>&gt;*     事件
+ el *&lt;<font class='datatype'>HTMLElement</font>&gt;*    html element
  
#### 返回值
void  
### <a id="METHOD_removeChild">removeChild(ev)</a>
#### 描述
移除子事件  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ ev *&lt;any&gt;*    子事件
  
#### 返回值
void  
