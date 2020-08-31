# Class ModuleFactory
## 属性列表
+ [classes](#PROP_classes)
+ [mainModule](#PROP_mainModule)
+ [modules](#PROP_modules)
  
## 方法列表
+ [add](#METHOD_add)
+ [get](#METHOD_get)
+ [getInstance](#METHOD_getInstance)
+ [getMain](#METHOD_getMain)
+ [init](#METHOD_init)
+ [initModule](#METHOD_initModule)
+ [remove](#METHOD_remove)
+ [setMain](#METHOD_setMain)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
过滤器工厂，存储模块过滤器  
## 属性
### <a id="PROP_classes">classes</a>
模块类集合  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Map&lt;string,IMdlClassObj&gt;</font>  
#### 初始值
new Map()  
### <a id="PROP_mainModule">mainModule</a>
主模块  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>[Module](/webroute/api/module)</font>  
### <a id="PROP_modules">modules</a>
模块对象工厂 {moduleId:{key:容器key,className:模块类名,instance:模块实例}}  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Map&lt;number,Module&gt;</font>  
#### 初始值
new Map()  
## 方法
### <a id="METHOD_add">add(item)</a>
#### 描述
添加模块到工厂  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ item *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;*  模块存储对象
  
#### 返回值
void  
### <a id="METHOD_get">get(id)</a>
#### 描述
获得模块  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ id *&lt;<font class='datatype'>number</font>&gt;*    模块id
  
#### 返回值
<font class='datatype'>Module </font>  
### <a id="METHOD_getInstance">getInstance(className[,moduleName[,data]])</a>
#### 描述
获取模块实例（通过类名）  
#### 修饰符
<font class="modifier">public  static  async</font>  
#### 参数
+ className *&lt;<font class='datatype'>string</font>&gt;*     模块类名
+ moduleName *&lt;<font class='datatype'>string</font>&gt;*    模块名
+ data *&lt;<font class='datatype'>any</font>&gt;*          数据或数据url
  
#### 返回值
void  
### <a id="METHOD_getMain">getMain()</a>
#### 描述
获取主模块  
#### 修饰符
<font class="modifier">public  static</font>  
#### 返回值
void  
### <a id="METHOD_init">init(modules)</a>
#### 描述
初始化模块类  
#### 修饰符
<font class="modifier">public  static  async</font>  
#### 参数
+ modules *&lt;<font class='datatype'>Array&lt;[IMdlClassObj](/webroute/api/imdlclassobj)&gt;</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_initModule">initModule(cfg)</a>
#### 描述
出事化模块  
#### 修饰符
<font class="modifier">public  static  async</font>  
#### 参数
+ cfg *&lt;<font class='datatype'>[IMdlClassObj](/webroute/api/imdlclassobj)</font>&gt;* 模块类对象
  
#### 返回值
void  
### <a id="METHOD_remove">remove(id)</a>
#### 描述
从工厂移除模块  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ id *&lt;<font class='datatype'>number</font>&gt;*    模块id
  
#### 返回值
void  
### <a id="METHOD_setMain">setMain(m)</a>
#### 描述
设置主模块  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ m *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;* 	模块
  
#### 返回值
void  
