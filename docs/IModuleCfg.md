# Interface IModuleCfg
## 属性列表
+ [class](#PROP_class)
+ [data](#PROP_data)
+ [el](#PROP_el)
+ [methods](#PROP_methods)
+ [name](#PROP_name)
+ [path](#PROP_path)
+ [requires](#PROP_requires)
+ [singleton](#PROP_singleton)
+ [template](#PROP_template)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
模块配置对象  
## 属性
### <a id="PROP_class">class</a>
模块类名  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_data">data</a>
数据，如果为json object，直接作为模型数据，如果为字符串，则表示数据url，需要请求得到数据  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>object | string</font>  
### <a id="PROP_el">el</a>
容器选择器  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_methods">methods</a>
模块方法集合  
不要用箭头"=>" 操作符定义  
```  
 	{  
 		method1:function1(){},  
 		method2:function2(){},  
 		...  
 	}  
```  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>object</font>  
### <a id="PROP_name">name</a>
模块名(模块内(父模块的子模块之间)唯一)，如果不设置，则系统会自动生成Module+id  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_path">path</a>
模块路径(相对于app module路径)  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
### <a id="PROP_requires">requires</a>
先于模块初始化加载的文件集合  
如果为string，则表示资源路径，type为js  
如果为object，则格式为{type:'js'/'css',url:路径}  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>Array&lt;string|object&gt;</font>  
### <a id="PROP_singleton">singleton</a>
是否单例，如果为true，则整个应用中共享一个模块实例，默认false  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>boolean</font>  
### <a id="PROP_template">template</a>
模版字符串，如果以“<”开头，则表示模版字符串，否则表示模版url  
#### 修饰符
<font class="modifier">public</font>  
#### 数据类型
<font class='datatype'>string</font>  
