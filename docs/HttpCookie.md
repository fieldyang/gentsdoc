# Class:HttpCookie
## 属性
+ [params](#PROP_params)
  
## 方法
+ [get](#METHOD_get)
+ [getAll](#METHOD_getAll)
+ [remove](#METHOD_remove)
+ [set](#METHOD_set)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
cookie类  
### remarks
用于response操作cookie  
## 构造方法
### <a id="METHOD_constructor">constructor()</a>
#### 参数
  
## 属性
### <a id="PROP_params">params</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
参数map  
## 方法
### <a id="METHOD_get">get(key)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  async</font>  
#### 描述
获取值  
#### 参数
+ key *&lt;<font class='datatype'>string</font>&gt;*   键
  
#### 返回值
<font class='datatype'>string</font>  
### <a id="METHOD_getAll">getAll()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  async</font>  
#### 描述
获取所有参数  
#### 返回值
<font class='datatype'>Map&lt;string,string&gt;</font>  
参数map  
### <a id="METHOD_remove">remove(key)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  async</font>  
#### 描述
删除键  
#### 参数
+ key *&lt;<font class='datatype'>string</font>&gt;*   键
  
#### 返回值
void  
### <a id="METHOD_set">set(key,value)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  async</font>  
#### 描述
设置值  
#### 参数
+ key *&lt;<font class='datatype'>string</font>&gt;*   键
+ value *&lt;<font class='datatype'>string</font>&gt;* 值
  
#### 返回值
void  
