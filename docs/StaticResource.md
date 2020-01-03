# Class:StaticResource
## 属性
+ [staticMap](#PROP_staticMap)
  
## 方法
+ [addPath](#METHOD_addPath)
+ [load](#METHOD_load)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
静态资源加载器  
## 属性
### <a id="PROP_staticMap">staticMap</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
静态资源map，用于管理可访问静态资源路径，目录可以带通配符‘*’  
## 方法
### <a id="METHOD_addPath">addPath(paths)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加静态路径  
#### 参数
+ paths *&lt;<font class='datatype'>string|string[]</font>&gt;*   待添加的目录或目录数组
  
#### 返回值
void  
### <a id="METHOD_load">load(request,response,path)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
加载静态资源  
#### 参数
+ request *&lt;<font class='datatype'>[HttpRequest](/webroute/api/HttpRequest)</font>&gt;*   request
+ response *&lt;<font class='datatype'>HttpResponse</font>&gt;*  response
+ path *&lt;<font class='datatype'>string</font>&gt;*      文件路径
  
#### 返回值
<font class='datatype'>Promise&lt;number&gt;</font>  
http异常码或0  
