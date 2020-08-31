# Class Directive
## 属性列表
+ [extra](#PROP_extra)
+ [filters](#PROP_filters)
+ [id](#PROP_id)
+ [params](#PROP_params)
+ [type](#PROP_type)
+ [value](#PROP_value)
  
## 方法列表
+ [clone](#METHOD_clone)
+ [exec](#METHOD_exec)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
指令类  
## 构造方法
### <a id="METHOD_constructor">constructor(type,value[,dom[,filters]])</a>
#### 参数
+ type *&lt;<font class='datatype'>string</font>&gt;*  	类型名
+ value *&lt;<font class='datatype'>string</font>&gt;* 	指令值
+ dom *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*       指令对应的dom
+ filters *&lt;<font class='datatype'>string|Filter[]</font>&gt;*   过滤器字符串或过滤器对象,如果为过滤器串，则以｜分割
  
## 属性
### <a id="PROP_extra">extra</a>
附加操作  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>any</font>  
### <a id="PROP_filters">filters</a>
过滤器组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Filter[]</font>  
### <a id="PROP_id">id</a>
指令id  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_params">params</a>
附加参数  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>any</font>  
### <a id="PROP_type">type</a>
指令类型，指令管理器中定义  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[DirectiveType](/webroute/api/directivetype)</font>  
### <a id="PROP_value">value</a>
指令值  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>any</font>  
## 方法
### <a id="METHOD_clone">clone(dst)</a>
#### 描述
克隆  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ dst *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*   目标dom
  
#### 返回值
<font class='datatype'>[Directive](/webroute/api/directive)</font>  
新指令  
### <a id="METHOD_exec">exec(module,dom[,parent])</a>
#### 描述
执行指令  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;*    模块
+ dom *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*       指令执行时dom
+ parent *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*    父虚拟dom
  
#### 返回值
void  
