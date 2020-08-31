# Class ExternalEvent
## 属性列表
+ [touches](#PROP_touches)
  
## 方法列表
+ [regist](#METHOD_regist)
+ [unregist](#METHOD_unregist)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
扩展事件  
## 属性
### <a id="PROP_touches">touches</a>
触屏事件  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>any</font>  
#### 初始值
{}  
## 方法
### <a id="METHOD_regist">regist(evtObj,el)</a>
#### 描述
注册事件  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ evtObj *&lt;<font class='datatype'>[NodomEvent](/webroute/api/nodomevent)</font>&gt;*    event对象
+ el *&lt;<font class='datatype'>HTMLElement</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_unregist">unregist(evtObj[,el])</a>
#### 描述
取消已注册事件  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ evtObj *&lt;<font class='datatype'>[NodomEvent](/webroute/api/nodomevent)</font>&gt;*    event对象
+ el *&lt;<font class='datatype'>HTMLElement</font>&gt;*        事件绑定的html element
  
#### 返回值
void  
