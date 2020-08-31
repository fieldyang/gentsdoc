# Class DirectiveManager
## 属性列表
+ [directiveTypes](#PROP_directiveTypes)
  
## 方法列表
+ [addType](#METHOD_addType)
+ [exec](#METHOD_exec)
+ [getType](#METHOD_getType)
+ [hasType](#METHOD_hasType)
+ [init](#METHOD_init)
+ [removeType](#METHOD_removeType)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
指令管理器  
## 属性
### <a id="PROP_directiveTypes">directiveTypes</a>
指令类型集合  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Map&lt;string,DirectiveType&gt;</font>  
#### 初始值
new Map()  
## 方法
### <a id="METHOD_addType">addType(name[,prio[,init[,handle]]])</a>
#### 描述
创建指令类型  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ name *&lt;<font class='datatype'>string</font>&gt;* 		    指令类型名
+ prio *&lt;<font class='datatype'>number</font>&gt;* 
+ init *&lt;<font class='datatype'>Function</font>&gt;* 
+ handle *&lt;<font class='datatype'>Function</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_exec">exec(directive,dom,module,parent)</a>
#### 描述
执行指令  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ directive *&lt;<font class='datatype'>[Directive](/webroute/api/directive)</font>&gt;*     指令
+ dom *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*           虚拟dom
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;*        模块
+ parent *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*        父dom
  
#### 返回值
void  
### <a id="METHOD_getType">getType(name)</a>
#### 描述
获取类型  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ name *&lt;<font class='datatype'>string</font>&gt;*  指令类型名
  
#### 返回值
void  
### <a id="METHOD_hasType">hasType(name)</a>
#### 描述
是否有某个过滤器类型  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ name *&lt;<font class='datatype'>string</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_init">init(directive,dom)</a>
#### 描述
指令初始化  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ directive *&lt;<font class='datatype'>[Directive](/webroute/api/directive)</font>&gt;*     指令
+ dom *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*           虚拟dom
  
#### 返回值
void  
### <a id="METHOD_removeType">removeType(name)</a>
#### 描述
移除过滤器类型  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ name *&lt;<font class='datatype'>string</font>&gt;*  过滤器类型名
  
#### 返回值
void  
