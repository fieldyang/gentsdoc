# Class Plugin
## 属性列表
+ [element](#PROP_element)
+ [extraDataName](#PROP_extraDataName)
+ [key](#PROP_key)
+ [modelId](#PROP_modelId)
+ [moduleId](#PROP_moduleId)
+ [name](#PROP_name)
+ [needPreRender](#PROP_needPreRender)
+ [tagName](#PROP_tagName)
  
## 方法列表
+ [afterRender](#METHOD_afterRender)
+ [beforeRender](#METHOD_beforeRender)
+ [clone](#METHOD_clone)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
插件，插件为自定义元素方式实现  
## 属性
### <a id="PROP_element">element</a>
绑定的element  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[Element](/webroute/api/element)</font>  
### <a id="PROP_extraDataName">extraDataName</a>
附加数据项名  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_key">key</a>
绑定的dom key  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_modelId">modelId</a>
model id  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_moduleId">moduleId</a>
module id  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_name">name</a>
插件名，在module中唯一  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_needPreRender">needPreRender</a>
是否需要前置渲染  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
### <a id="PROP_tagName">tagName</a>
tag name  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
## 方法
### <a id="METHOD_afterRender">afterRender(module,uidom)</a>
#### 描述
后置渲染方法(dom render结束后，选到html之前)  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>nodom.Module</font>&gt;*    模块
+ uidom *&lt;<font class='datatype'>nodom.Element</font>&gt;*     虚拟dom
  
#### 返回值
void  
### <a id="METHOD_beforeRender">beforeRender(module,uidom)</a>
#### 描述
前置渲染方法(dom render方法中获取modelId和parentKey后执行)  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ module *&lt;<font class='datatype'>nodom.Module</font>&gt;*    模块
+ uidom *&lt;<font class='datatype'>nodom.Element</font>&gt;*     虚拟dom
  
#### 返回值
void  
### <a id="METHOD_clone">clone([dst])</a>
#### 描述
克隆  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ dst *&lt;<font class='datatype'>[Element](/webroute/api/element)</font>&gt;* 
  
#### 返回值
void  
