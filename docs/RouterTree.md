# Class RouterTree
## 方法列表
+ [add](#METHOD_add)
+ [get](#METHOD_get)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
路由树类  
## 方法
### <a id="METHOD_add">add(route,parent)</a>
#### 描述
添加route到路由树  
##### return
添加是否成功 type Boolean  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ route *&lt;<font class='datatype'>[Route](/webroute/api/route)</font>&gt;* 路由
+ parent *&lt;<font class='datatype'>[Route](/webroute/api/route)</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_get">get(path)</a>
#### 描述
从路由树中获取路由节点  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ path *&lt;<font class='datatype'>string</font>&gt;*  	路径
  
#### 返回值
<font class='datatype'>Array&lt;[Route](/webroute/api/route)&gt; </font>  
