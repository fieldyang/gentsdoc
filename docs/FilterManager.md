# Class FilterManager
## 属性列表
+ [filterTypes](#PROP_filterTypes)
  
## 方法列表
+ [addType](#METHOD_addType)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
filter类型命名规则：以小写字母a-z命名，其它字母不允许  
## 属性
### <a id="PROP_filterTypes">filterTypes</a>
过滤类型  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Map&lt;string,Function&gt;</font>  
#### 初始值
new Map()  
## 方法
### <a id="METHOD_addType">addType(name,handler)</a>
#### 描述
创建过滤器类型  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ name *&lt;any&gt;* 		过滤器类型名
+ handler *&lt;any&gt;* 	过滤器类型处理函数{init:foo1,handler:foo2}
  
#### 返回值
void  
