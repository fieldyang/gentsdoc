# Class Expression
## 属性列表
+ [execFunc](#PROP_execFunc)
+ [fields](#PROP_fields)
+ [id](#PROP_id)
+ [modelMap](#PROP_modelMap)
+ [replaceMap](#PROP_replaceMap)
  
## 方法列表
+ [addField](#METHOD_addField)
+ [clone](#METHOD_clone)
+ [compile](#METHOD_compile)
+ [genExecStr](#METHOD_genExecStr)
+ [judgeAndHandleFilter](#METHOD_judgeAndHandleFilter)
+ [judgeAndHandleFunc](#METHOD_judgeAndHandleFunc)
+ [recoveryString](#METHOD_recoveryString)
+ [val](#METHOD_val)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
表达式类  
## 构造方法
### <a id="METHOD_constructor">constructor([exprStr])</a>
#### 参数
+ exprStr *&lt;<font class='datatype'>string</font>&gt;* 
  
## 属性
### <a id="PROP_execFunc">execFunc</a>
执行函数  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Function</font>  
### <a id="PROP_fields">fields</a>
字段数组  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;string&gt;</font>  
### <a id="PROP_id">id</a>
表达式id  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_modelMap">modelMap</a>
一个expression可能被多次使用，以modelid进行区分，针对不同的模型id构建对象{modelId:{fieldValue:,value:}  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>object</font>  
#### 初始值
{}  
### <a id="PROP_replaceMap">replaceMap</a>
字符串替换map  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Map&lt;string,string&gt;</font>  
#### 初始值
new Map()  
## 方法
### <a id="METHOD_addField">addField(field)</a>
#### 描述
添加字段到fields  
#### 修饰符
<font class="modifier">private</font>  
#### 参数
+ field *&lt;<font class='datatype'>string</font>&gt;* 	字段
  
#### 返回值
<font class='datatype'>boolean</font>  
true/false  
### <a id="METHOD_clone">clone()</a>
#### 描述
克隆  
#### 修饰符
<font class="modifier">public</font>  
#### 返回值
void  
### <a id="METHOD_compile">compile(exprStr)</a>
#### 描述
初始化，把表达式串转换成堆栈  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ exprStr *&lt;<font class='datatype'>string</font>&gt;* 	表达式串
  
#### 返回值
<font class='datatype'>string </font>  
### <a id="METHOD_genExecStr">genExecStr(arrOperator,arrOperand)</a>
#### 描述
生成执行串  
#### 修饰符
<font class="modifier">private</font>  
#### 参数
+ arrOperator *&lt;<font class='datatype'>string[]</font>&gt;*   操作数数组
+ arrOperand *&lt;<font class='datatype'>string[]</font>&gt;*    操作符数组
  
#### 返回值
<font class='datatype'>string</font>  
指令执行字符串  
### <a id="METHOD_judgeAndHandleFilter">judgeAndHandleFilter(arrOperator,arrOperand,srcOp)</a>
#### 描述
判断并处理过滤器  
#### 修饰符
<font class="modifier">private</font>  
#### 参数
+ arrOperator *&lt;<font class='datatype'>string[]</font>&gt;*   操作数数组
+ arrOperand *&lt;<font class='datatype'>string[]</font>&gt;*    操作符数组
+ srcOp *&lt;<font class='datatype'>string</font>&gt;*         前操作数
  
#### 返回值
<font class='datatype'>string</font>  
过滤器串  
### <a id="METHOD_judgeAndHandleFunc">judgeAndHandleFunc(arrOperator)</a>
#### 描述
判断并处理函数  
#### 修饰符
<font class="modifier">private</font>  
#### 参数
+ arrOperator *&lt;<font class='datatype'>string[]</font>&gt;*   操作数数组
  
#### 返回值
<font class='datatype'>string</font>  
转换后的串  
### <a id="METHOD_recoveryString">recoveryString(str)</a>
#### 描述
还原字符串  
从$$NODOM_TMPSTR还原为源串  
#### 修饰符
<font class="modifier">private</font>  
#### 参数
+ str *&lt;<font class='datatype'>string</font>&gt;*   待还原字符串
  
#### 返回值
<font class='datatype'>string</font>  
还原后的字符串  
### <a id="METHOD_val">val(model)</a>
#### 描述
表达式计算  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ model *&lt;<font class='datatype'>[Model](/webroute/api/model)</font>&gt;* 	模型 或 fieldObj对象
  
#### 返回值
void  
