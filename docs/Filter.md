# Class Filter
## 属性列表
+ [params](#PROP_params)
+ [type](#PROP_type)
  
## 方法列表
+ [clone](#METHOD_clone)
+ [exec](#METHOD_exec)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
过滤器类  
## 构造方法
### <a id="METHOD_constructor">constructor([src])</a>
#### 参数
+ src *&lt;<font class='datatype'>string|string[]</font>&gt;* 		源串，或explain后的数组
  
## 属性
### <a id="PROP_params">params</a>
过滤器参数数组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;string&gt;</font>  
### <a id="PROP_type">type</a>
过滤器类型  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
## 方法
### <a id="METHOD_clone">clone()</a>
#### 描述
克隆  
#### 修饰符
<font class="modifier">public</font>  
#### 返回值
<font class='datatype'>[Filter](/webroute/api/filter)</font>  
### <a id="METHOD_exec">exec(value,module)</a>
#### 描述
过滤器执行  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ value *&lt;<font class='datatype'>string</font>&gt;* 	待过滤值
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;* 	模块
  
#### 返回值
<font class='datatype'>string</font>  
过滤结果  
