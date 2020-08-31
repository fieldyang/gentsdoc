# Class MessageQueue
## 属性列表
+ [messages](#PROP_messages)
  
## 方法列表
+ [add](#METHOD_add)
+ [handleQueue](#METHOD_handleQueue)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
消息队列  
## 属性
### <a id="PROP_messages">messages</a>
消息数组  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Array &lt; Message &gt;</font>  
#### 初始值
[]  
## 方法
### <a id="METHOD_add">add(from,to,data)</a>
#### 描述
添加消息到消息队列  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ from *&lt;<font class='datatype'>number</font>&gt;* 
+ to *&lt;<font class='datatype'>number</font>&gt;* 
+ data *&lt;<font class='datatype'>any</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_handleQueue">handleQueue()</a>
#### 描述
处理消息队列  
#### 修饰符
<font class="modifier">public  static</font>  
#### 返回值
void  
