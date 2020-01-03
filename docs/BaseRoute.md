# Class:BaseRoute
## 属性
+ [model](#PROP_model)
+ [request](#PROP_request)
+ [response](#PROP_response)
  
## 方法
+ [setModel](#METHOD_setModel)
+ [setRequest](#METHOD_setRequest)
+ [setResponse](#METHOD_setResponse)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
路由基类  
可自动为路由类生成model(传入参数对象)，自带request和response对象  
建议所有路由继承此基类  
## 属性
### <a id="PROP_model">model</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
数据对象  
### <a id="PROP_request">request</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
request对象  
### <a id="PROP_response">response</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
response对象  
## 方法
### <a id="METHOD_setModel">setModel(data)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  async</font>  
#### 描述
为model设置值  
#### 参数
+ data *&lt;<font class='datatype'>any</font>&gt;*  数据对象(由浏览器/客户端传入的数据参数)
  
#### 返回值
void  
### <a id="METHOD_setRequest">setRequest(req)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  async</font>  
#### 描述
设置request对象  
#### 参数
+ req *&lt;<font class='datatype'>[HttpRequest](/webroute/api/HttpRequest)</font>&gt;*   request对象
  
#### 返回值
<font class='datatype'>void</font>  
### <a id="METHOD_setResponse">setResponse(res)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  async</font>  
#### 描述
设置reponse对象  
#### 参数
+ res *&lt;<font class='datatype'>HttpResponse</font>&gt;*   response对象
  
#### 返回值
<font class='datatype'>void</font>  
