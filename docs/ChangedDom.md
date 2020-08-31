# Class ChangedDom
## 属性列表
+ [changeProps](#PROP_changeProps)
+ [index](#PROP_index)
+ [node](#PROP_node)
+ [parent](#PROP_parent)
+ [removeProps](#PROP_removeProps)
+ [type](#PROP_type)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
改变的dom类型  
用于比较需要修改渲染的节点属性存储  
## 构造方法
### <a id="METHOD_constructor">constructor([node[,type[,parent[,index]]]])</a>
#### 参数
+ node *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*      虚拟节点
+ type *&lt;<font class='datatype'>string</font>&gt;*      修改类型  add(添加节点),del(删除节点),upd(更新节点),rep(替换节点),text(修改文本内容)
+ parent *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;*    父虚拟dom
+ index *&lt;<font class='datatype'>number</font>&gt;*     在父节点中的位置索引
  
## 属性
### <a id="PROP_changeProps">changeProps</a>
改变的属性数组  
[{prop1:value1},...]  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;object&gt;</font>  
### <a id="PROP_index">index</a>
在父节点中的位置  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_node">node</a>
改变的节点  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[Element](/webroute/api/element)</font>  
### <a id="PROP_parent">parent</a>
父虚拟dom  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[Element](/webroute/api/element)</font>  
### <a id="PROP_removeProps">removeProps</a>
移除的属性名数组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;string&gt;</font>  
### <a id="PROP_type">type</a>
改变方式  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
