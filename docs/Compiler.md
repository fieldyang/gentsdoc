# Class Compiler
## 方法列表
+ [compile](#METHOD_compile)
+ [compileDom](#METHOD_compileDom)
+ [compileExpression](#METHOD_compileExpression)
+ [handleAttributes](#METHOD_handleAttributes)
+ [handleChildren](#METHOD_handleChildren)
+ [handleDefineEl](#METHOD_handleDefineEl)
+ [handleEl](#METHOD_handleEl)
  
---
## 描述
<font class="since">开始于 : v1.0</font>  
编译器，负责模版的编译  
## 方法
### <a id="METHOD_compile">compile(elementStr)</a>
#### 描述
编译  
如果为el.innerHTML方式，可能存在多个子节点，则在外面包一层父节点，因为模块只能有一个根节点，否则返回模块根节点  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ elementStr *&lt;<font class='datatype'>string</font>&gt;*    待编译html串
  
#### 返回值
<font class='datatype'>Element </font>  
虚拟dom  
### <a id="METHOD_compileDom">compileDom(ele)</a>
#### 描述
编译dom  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ ele *&lt;<font class='datatype'>Node</font>&gt;*           待编译html element
  
#### 返回值
void  
### <a id="METHOD_compileExpression">compileExpression(exprStr)</a>
#### 描述
处理表达式串  
##### return
处理后的字符串和表达式数组  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ exprStr *&lt;<font class='datatype'>string</font>&gt;*   含表达式的串
  
#### 返回值
void  
### <a id="METHOD_handleAttributes">handleAttributes(oe,el)</a>
#### 描述
处理属性  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ oe *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;* 新建的虚拟dom
+ el *&lt;<font class='datatype'>HTMLElement</font>&gt;* 待处理的html element
  
#### 返回值
void  
### <a id="METHOD_handleChildren">handleChildren(oe,el)</a>
#### 描述
处理子节点  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ oe *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;* 新建的虚拟dom
+ el *&lt;<font class='datatype'>HTMLElement</font>&gt;* 待处理的html element
  
#### 返回值
void  
### <a id="METHOD_handleDefineEl">handleDefineEl(el)</a>
#### 描述
编译插件  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ el *&lt;<font class='datatype'>HTMLElement</font>&gt;* 待处理的html element
  
#### 返回值
<font class='datatype'>[Element](/webroute/api/element)</font>  
如果识别自定义el，则返回编译后的虚拟dom，否则返回undefined  
### <a id="METHOD_handleEl">handleEl(el)</a>
#### 描述
编译html element  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ el *&lt;<font class='datatype'>HTMLElement</font>&gt;* 
  
#### 返回值
<font class='datatype'>[Element](/webroute/api/element)</font>  
虚拟dom  
