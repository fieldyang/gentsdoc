# Class:PageFactory
## 属性
+ [errorPages](#PROP_errorPages)
  
## 方法
+ [addErrorPage](#METHOD_addErrorPage)
+ [getErrorPage](#METHOD_getErrorPage)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
页面工厂  
### remarks
用于管理页面及路径  
## 属性
### <a id="PROP_errorPages">errorPages</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
错误页面集合  
## 方法
### <a id="METHOD_addErrorPage">addErrorPage(code,url)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加错误提示页  
#### 参数
+ code *&lt;<font class='datatype'>number</font>&gt;*      错误码
+ url *&lt;<font class='datatype'>string</font>&gt;*       页面地址
  
#### 返回值
void  
### <a id="METHOD_getErrorPage">getErrorPage(code)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获取错误提示页  
#### 参数
+ code *&lt;<font class='datatype'>number</font>&gt;*      错误码
  
#### 返回值
<font class='datatype'>string</font>  
错误码对应的页面url  
