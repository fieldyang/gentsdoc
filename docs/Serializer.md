# Class Serializer
## 方法列表
+ [deserialize](#METHOD_deserialize)
+ [serialize](#METHOD_serialize)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
编译器  
描述：用于进行预编译和预编译后的json串反序列化，处理两个部分：虚拟dom树和表达式工厂  
版本2.1预留  
## 方法
### <a id="METHOD_deserialize">deserialize(jsonStr)</a>
#### 描述
反序列化  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ jsonStr *&lt;<font class='datatype'>string</font>&gt;* 	json串
  
#### 返回值
<font class='datatype'>[Element](/webroute/api/element)</font>  
virtualDom  
### <a id="METHOD_serialize">serialize(module)</a>
#### 描述
序列化，只序列化virtualDom  
##### return
jsonstring  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;* 	模块
  
#### 返回值
void  
