# Class:AopPointcut
## 属性
+ [advices](#PROP_advices)
+ [expressions](#PROP_expressions)
+ [id](#PROP_id)
  
## 方法
+ [addAdvice](#METHOD_addAdvice)
+ [match](#METHOD_match)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
aop 切点类  
## 构造方法
### <a id="METHOD_constructor">constructor(id,expressions)</a>
#### 参数
+ id *&lt;<font class='datatype'>string</font>&gt;*            切点id(唯一)
+ expressions *&lt;<font class='datatype'>Array&lt;string&gt;</font>&gt;*   该切点对应的表达式数组，表达式为正则表达式串
  
## 属性
### <a id="PROP_advices">advices</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
通知数组  
### <a id="PROP_expressions">expressions</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
表达式数组（正则表达式）  
### <a id="PROP_id">id</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
切点id  
## 方法
### <a id="METHOD_addAdvice">addAdvice(advice)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  async</font>  
#### 描述
给切点添加通知  
#### 参数
+ advice *&lt;<font class='datatype'>[AopAdvice](/webroute/api/AopAdvice)</font>&gt;*    通知对象
  
#### 返回值
<font class='datatype'>void</font>  
### <a id="METHOD_match">match(instanceName,methodName)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  async</font>  
#### 描述
匹配方法是否满足表达式  
#### 参数
+ instanceName *&lt;<font class='datatype'>string</font>&gt;*  实例名
+ methodName *&lt;<font class='datatype'>string</font>&gt;*    待检测方法
  
#### 返回值
<font class='datatype'>boolean</font>  
匹配返回true，否则返回false  
