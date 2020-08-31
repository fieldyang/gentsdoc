# Class Factory
## 属性列表
+ [items](#PROP_items)
+ [moduleId](#PROP_moduleId)
  
## 方法列表
+ [add](#METHOD_add)
+ [get](#METHOD_get)
+ [has](#METHOD_has)
+ [remove](#METHOD_remove)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
工厂基类  
## 构造方法
### <a id="METHOD_constructor">constructor([module])</a>
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;* 模块
  
## 属性
### <a id="PROP_items">items</a>
工厂item对象  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Map&lt;number|string,any&gt;</font>  
#### 初始值
new Map()  
### <a id="PROP_moduleId">moduleId</a>
模块名  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
## 方法
### <a id="METHOD_add">add(name,item)</a>
#### 描述
添加到工厂  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ name *&lt;<font class='datatype'>string|number</font>&gt;* 	item name
+ item *&lt;<font class='datatype'>any</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_get">get(name)</a>
#### 描述
获得item  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ name *&lt;<font class='datatype'>string|number</font>&gt;* 	item name
  
#### 返回值
<font class='datatype'>any</font>  
item  
### <a id="METHOD_has">has(name)</a>
#### 描述
是否拥有该项  
##### return
true/false  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ name *&lt;<font class='datatype'>string|number</font>&gt;*  item name
  
#### 返回值
<font class='datatype'>boolean</font>  
### <a id="METHOD_remove">remove(name)</a>
#### 描述
从容器移除  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ name *&lt;<font class='datatype'>string|number</font>&gt;* 	item name
  
#### 返回值
void  
