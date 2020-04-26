# Class:AopPointcut
## Property List
+ [advices](#PROP_advices)
+ [expressions](#PROP_expressions)
+ [id](#PROP_id)
  
## Method List
+ [addAdvice](#METHOD_addAdvice)
+ [match](#METHOD_match)
  
---
## Description
<font class="since">Since:v0.0.1</font>  
aop 切点类  
### excludeone
这一段也不加入文档  
### examplecode
```typescript  
 new AopPointcut('logpoint',['/*']);   
```  
### exampletable
支持表格格式显示  
参数名|类型|参数说明  
-|-|-  
id|string|切点id  
expressions|Array<RegExp>|切点拦截表达式  
### examplelist
支持列表  
+ 列表1  
+ 列表2  
+ 列表3  
## Constructor
### <a id="METHOD_constructor">constructor(id,expressions)</a>
#### Params
+ id *&lt;<font class='datatype'>string</font>&gt;*            切点id(唯一)
+ expressions *&lt;<font class='datatype'>Array&lt;string&gt;</font>&gt;*   该切点对应的表达式数组，表达式为正则表达式串
  
## Properties
### <a id="PROP_advices">advices</a>
<font class="since">Since:v0.0.1</font>  
Modifier: <font class="modifier">public</font>  
通知数组  
### <a id="PROP_expressions">expressions</a>
<font class="since">Since:v0.0.1</font>  
Modifier: <font class="modifier">public</font>  
表达式数组（正则表达式）  
### <a id="PROP_id">id</a>
<font class="since">Since:v0.0.1</font>  
Modifier: <font class="modifier">public</font>  
切点id  
## Methods
### <a id="METHOD_addAdvice">addAdvice(advice)</a>
<font class="since">Since:v0.0.1</font>  
Modifier: <font class="modifier">public</font>  
#### Description
给切点添加通知  
#### Params
+ advice *&lt;<font class='datatype'>IAopAdvice</font>&gt;*    通知对象
  
#### Returns
<font class='datatype'>void</font>  
### <a id="METHOD_match">match(instanceName,methodName)</a>
<font class="since">Since:v0.0.1</font>  
Modifier: <font class="modifier">public</font>  
#### Description
匹配方法是否满足表达式  
#### Params
+ instanceName *&lt;<font class='datatype'>string</font>&gt;*  实例名
+ methodName *&lt;<font class='datatype'>string</font>&gt;*    待检测方法
  
#### Returns
<font class='datatype'>boolean</font>  
匹配返回true，否则返回false  
