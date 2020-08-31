# Class Renderer
## 属性列表
+ [waitList](#PROP_waitList)
  
## 方法列表
+ [add](#METHOD_add)
+ [render](#METHOD_render)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
渲染器  
## 属性
### <a id="PROP_waitList">waitList</a>
等待渲染列表（模块名）  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Array &lt; number &gt;</font>  
#### 初始值
[]  
## 方法
### <a id="METHOD_add">add(module)</a>
#### 描述
添加到渲染列表  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;* 模块
  
#### 返回值
void  
### <a id="METHOD_render">render()</a>
#### 描述
队列渲染  
#### 修饰符
<font class="modifier">public  static  async</font>  
#### 返回值
void  
