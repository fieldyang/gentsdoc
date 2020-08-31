# Class Model
## 属性列表
+ [children](#PROP_children)
+ [data](#PROP_data)
+ [fields](#PROP_fields)
+ [id](#PROP_id)
+ [moduleId](#PROP_moduleId)
+ [parent](#PROP_parent)
  
## 方法列表
+ [addSetterGetter](#METHOD_addSetterGetter)
+ [defineProp](#METHOD_defineProp)
+ [del](#METHOD_del)
+ [get](#METHOD_get)
+ [getData](#METHOD_getData)
+ [query](#METHOD_query)
+ [set](#METHOD_set)
+ [update](#METHOD_update)
+ [watch](#METHOD_watch)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
模型类  
## 构造方法
### <a id="METHOD_constructor">constructor(data,module[,parent[,key]])</a>
#### 参数
+ data *&lt;<font class='datatype'>any</font>&gt;* 		数据
+ module *&lt;<font class='datatype'>[Module](/webroute/api/module)</font>&gt;* 	模块对象
+ parent *&lt;<font class='datatype'>[Model](/webroute/api/model)</font>&gt;*    父model
+ key *&lt;<font class='datatype'>string</font>&gt;* 
  
## 属性
### <a id="PROP_children">children</a>
子model  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>object|Array&lt;[Model](/webroute/api/model)&gt;</font>  
### <a id="PROP_data">data</a>
模型对应数据，初始化后，data会增加“$modelId”数据项  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>any</font>  
### <a id="PROP_fields">fields</a>
模型字段集  
每个字段对象结构为{value:值[,handlers:观察器，观察器为模块方法名或函数]}  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>object</font>  
#### 初始值
{}  
### <a id="PROP_id">id</a>
模型id（唯一）  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_moduleId">moduleId</a>
模型对应的模块id  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>number</font>  
### <a id="PROP_parent">parent</a>
父model  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>[Model](/webroute/api/model)</font>  
## 方法
### <a id="METHOD_addSetterGetter">addSetterGetter(data)</a>
#### 描述
为对象添加setter  
#### 修饰符
<font class="modifier">private</font>  
#### 参数
+ data *&lt;<font class='datatype'>any</font>&gt;*  数据
  
#### 返回值
void  
### <a id="METHOD_defineProp">defineProp(data,p)</a>
#### 描述
定义属性set和get方法  
#### 修饰符
<font class="modifier">private</font>  
#### 参数
+ data *&lt;<font class='datatype'>any</font>&gt;* 	数据对象
+ p *&lt;<font class='datatype'>string</font>&gt;* 	属性名
  
#### 返回值
void  
### <a id="METHOD_del">del(key)</a>
#### 描述
删除属性  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ key *&lt;<font class='datatype'>string|number</font>&gt;*   键(对象)或index(数组)，键可以多级，如a.b.c
  
#### 返回值
void  
### <a id="METHOD_get">get(key)</a>
#### 描述
获取子孙model  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ key *&lt;<font class='datatype'>string|number</font>&gt;*   键(对象)或index(数组)，键可以多级，如a.b.c
  
#### 返回值
<font class='datatype'>[Model](/webroute/api/model)</font>  
### <a id="METHOD_getData">getData([dirty])</a>
#### 描述
获取所有数据  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ dirty *&lt;<font class='datatype'>boolean</font>&gt;*   是否获取脏数据（"$"开头数据项，这类数据项由nodom生成）
  
#### 返回值
<font class='datatype'>any</font>  
### <a id="METHOD_query">query(key)</a>
#### 描述
获取数据  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ key *&lt;<font class='datatype'>string</font>&gt;*   键(对象)或index(数组)，键可以多级，如a.b.c
  
#### 返回值
void  
### <a id="METHOD_set">set(key,value)</a>
#### 描述
设置属性，可能属性之前不存在，用于在初始化不存在的属性增强model能力  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ key *&lt;<font class='datatype'>string</font>&gt;*       键，可以带“.”，如a, a.b.c
+ value *&lt;<font class='datatype'>any</font>&gt;*     对应值
  
#### 返回值
void  
### <a id="METHOD_update">update(field[,value])</a>
#### 描述
更新字段值  
#### 修饰符
<font class="modifier">private</font>  
#### 参数
+ field *&lt;<font class='datatype'>string</font>&gt;* 	字段名或空(数组更新)
+ value *&lt;<font class='datatype'>any</font>&gt;* 	字段对应的新值
  
#### 返回值
void  
### <a id="METHOD_watch">watch(key,operate[,cancel])</a>
#### 描述
观察(取消观察)某个数据项  
#### 修饰符
<font class="modifier">public</font>  
#### 参数
+ key *&lt;<font class='datatype'>string</font>&gt;*       数据项名
+ operate *&lt;<font class='datatype'>string|Function</font>&gt;*   数据项变化时执行方法名(在module的methods中定义)
+ cancel *&lt;<font class='datatype'>boolean</font>&gt;*    取消观察
  
#### 返回值
void  
