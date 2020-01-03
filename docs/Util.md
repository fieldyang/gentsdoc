# Class:Util
## 方法
+ [getAbsPath](#METHOD_getAbsPath)
+ [toReg](#METHOD_toReg)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
工具类  
### remarks
提供工具方法  
## 方法
### <a id="METHOD_getAbsPath">getAbsPath(pa)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获取绝对路径  
#### 参数
+ pa *&lt;<font class='datatype'>Array&lt;string&gt;</font>&gt;*    待处理的字符串数组
  
#### 返回值
<font class='datatype'>string</font>  
字符串数组构成的的绝对地址  
### <a id="METHOD_toReg">toReg(str[,side])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
字符串转regexp  
#### 参数
+ str *&lt;<font class='datatype'>string</font>&gt;*       待处理字符串
+ side *&lt;<font class='datatype'>number</font>&gt;*      两端匹配 1前端 2后端 3两端
  
#### 返回值
<font class='datatype'>RegExp</font>  
转换后的正则表达式  
