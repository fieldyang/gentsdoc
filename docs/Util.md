# Class Util
## 属性列表
+ [/**](#PROP_/**)
+ [/**](#PROP_/**)
+ [/**](#PROP_/**)
+ [/**](#PROP_/**)
+ [/**](#PROP_/**)
  
## 方法列表
+ [assign](#METHOD_assign)
+ [attr](#METHOD_attr)
+ [clone](#METHOD_clone)
+ [empty](#METHOD_empty)
+ [findObjByProps](#METHOD_findObjByProps)
+ [formatDate](#METHOD_formatDate)
+ [get](#METHOD_get)
+ [getOwnProps](#METHOD_getOwnProps)
+ [isArray](#METHOD_isArray)
+ [isBoolean](#METHOD_isBoolean)
+ [isEl](#METHOD_isEl)
+ [isEmpty](#METHOD_isEmpty)
+ [isFunction](#METHOD_isFunction)
+ [isInt](#METHOD_isInt)
+ [isMap](#METHOD_isMap)
+ [isNode](#METHOD_isNode)
+ [isNumber](#METHOD_isNumber)
+ [isNumberString](#METHOD_isNumberString)
+ [isObject](#METHOD_isObject)
+ [isString](#METHOD_isString)
+ [merge](#METHOD_merge)
+ [newEl](#METHOD_newEl)
+ [newSvgEl](#METHOD_newSvgEl)
+ [remove](#METHOD_remove)
+ [replaceNode](#METHOD_replaceNode)
  
---
## 描述
<font class="since">开始于 : v1.0.0</font>  
基础服务库  
## 属性
### <a id="PROP_/**">/**</a>
***对象相关******/  
#### 修饰符
<font class="modifier">public</font>  
### <a id="PROP_/**">/**</a>
***********对象判断相关************/  
#### 修饰符
<font class="modifier">public</font>  
### <a id="PROP_/**">/**</a>
********************对象相关******************/  
#### 修饰符
<font class="modifier">public</font>  
### <a id="PROP_/**">/**</a>
*******dom相关***********/  
#### 修饰符
<font class="modifier">public</font>  
### <a id="PROP_/**">/**</a>
***日期相关******/  
#### 修饰符
<font class="modifier">public</font>  
## 方法
### <a id="METHOD_assign">assign(obj1,obj2)</a>
#### 描述
把obj2对象所有属性赋值给obj1  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ obj1 *&lt;any&gt;* 
+ obj2 *&lt;any&gt;* 
  
#### 返回值
void  
### <a id="METHOD_attr">attr(el,param[,value])</a>
#### 描述
获取／设置属性  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ el *&lt;<font class='datatype'>HTMLElement</font>&gt;*    element
+ param *&lt;<font class='datatype'>string|object</font>&gt;* 属性名，设置多个属性时用对象
+ value *&lt;<font class='datatype'>any</font>&gt;* 属性值，获取属性时不需要设置
  
#### 返回值
<font class='datatype'>any</font>  
属性值  
### <a id="METHOD_clone">clone(srcObj[,expKey[,extra]])</a>
#### 描述
对象复制  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ srcObj *&lt;<font class='datatype'>object</font>&gt;*    源对象
+ expKey *&lt;<font class='datatype'>RegExp|string[]</font>&gt;*    不复制的键正则表达式或名
+ extra *&lt;<font class='datatype'>any</font>&gt;*     clone附加参数
  
#### 返回值
<font class='datatype'>any</font>  
复制的对象  
### <a id="METHOD_empty">empty(el)</a>
#### 描述
清空子节点  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ el *&lt;<font class='datatype'>HTMLElement</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_findObjByProps">findObjByProps(obj,props,one)</a>
#### 描述
找到符合符合属性值条件的对象（深度遍历）  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ obj *&lt;<font class='datatype'>object</font>&gt;*       待查询对象
+ props *&lt;<font class='datatype'>object</font>&gt;*     属性值对象
+ one *&lt;<font class='datatype'>boolean</font>&gt;*       是否满足一个条件就可以，默认false
  
#### 返回值
<font class='datatype'>Array&lt;object&gt;|object</font>  
### <a id="METHOD_formatDate">formatDate(srcDate,format)</a>
#### 描述
日期格式化  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ srcDate *&lt;<font class='datatype'>string|number</font>&gt;*   时间戳串
+ format *&lt;<font class='datatype'>string</font>&gt;*    日期格式
  
#### 返回值
<font class='datatype'>string</font>  
日期串  
### <a id="METHOD_get">get(selector[,findAll[,pview]])</a>
#### 描述
获取dom节点  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ selector *&lt;<font class='datatype'>string</font>&gt;*  选择器
+ findAll *&lt;<font class='datatype'>boolean</font>&gt;*   是否获取所有，默认为false
+ pview *&lt;<font class='datatype'>HTMLElement|Document</font>&gt;*     父html element
  
#### 返回值
<font class='datatype'>Node|NodeList</font>  
html element/null 或 nodelist或[]  
### <a id="METHOD_getOwnProps">getOwnProps(obj)</a>
#### 描述
获取对象自有属性  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ obj *&lt;any&gt;* 
  
#### 返回值
<font class='datatype'>Array&lt;string&gt;</font>  
### <a id="METHOD_isArray">isArray(obj)</a>
#### 描述
是否为数组  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ obj *&lt;any&gt;*   检查的对象
  
#### 返回值
<font class='datatype'>boolean</font>  
true/false  
### <a id="METHOD_isBoolean">isBoolean(v)</a>
#### 描述
判断是否为boolean  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ v *&lt;any&gt;* 检查的值
  
#### 返回值
<font class='datatype'>boolean</font>  
true/false  
### <a id="METHOD_isEl">isEl(el)</a>
#### 描述
是否为element  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ el *&lt;<font class='datatype'>any</font>&gt;*    传入的对象
  
#### 返回值
<font class='datatype'>boolean</font>  
true/false  
### <a id="METHOD_isEmpty">isEmpty(obj)</a>
#### 描述
对象/字符串是否为空  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ obj *&lt;any&gt;*   检查的对象
  
#### 返回值
<font class='datatype'>boolean</font>  
true/false  
### <a id="METHOD_isFunction">isFunction(foo)</a>
#### 描述
是否为函数  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ foo *&lt;any&gt;*   检查的对象
  
#### 返回值
<font class='datatype'>boolean</font>  
true/false  
### <a id="METHOD_isInt">isInt(v)</a>
#### 描述
判断是否为整数  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ v *&lt;any&gt;* 检查的值
  
#### 返回值
<font class='datatype'>boolean </font>  
true/false  
### <a id="METHOD_isMap">isMap(obj)</a>
#### 描述
判断是否为map  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ obj *&lt;any&gt;* 
  
#### 返回值
<font class='datatype'>boolean</font>  
### <a id="METHOD_isNode">isNode(node)</a>
#### 描述
是否为node  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ node *&lt;<font class='datatype'>any</font>&gt;* 传入的对象
  
#### 返回值
<font class='datatype'>boolean</font>  
true/false  
### <a id="METHOD_isNumber">isNumber(v)</a>
#### 描述
判断是否为number  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ v *&lt;any&gt;* 检查的值
  
#### 返回值
<font class='datatype'>boolean</font>  
true/false  
### <a id="METHOD_isNumberString">isNumberString(v)</a>
#### 描述
是否为数字串  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ v *&lt;any&gt;* 检查的值
  
#### 返回值
<font class='datatype'>boolean</font>  
true/false  
### <a id="METHOD_isObject">isObject(obj)</a>
#### 描述
是否为对象  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ obj *&lt;any&gt;*   检查的对象
  
#### 返回值
<font class='datatype'>boolean </font>  
true/false  
### <a id="METHOD_isString">isString(v)</a>
#### 描述
判断是否为字符串  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ v *&lt;any&gt;* 检查的值
  
#### 返回值
<font class='datatype'>boolean</font>  
true/false  
### <a id="METHOD_merge">merge([o1[,o2[,o3[,o4[,o5[,o6]]]]]])</a>
#### 描述
合并多个对象并返回  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ o1 *&lt;<font class='datatype'>object</font>&gt;* 
+ o2 *&lt;<font class='datatype'>object</font>&gt;* 
+ o3 *&lt;<font class='datatype'>object</font>&gt;* 
+ o4 *&lt;<font class='datatype'>object</font>&gt;* 
+ o5 *&lt;<font class='datatype'>object</font>&gt;* 
+ o6 *&lt;<font class='datatype'>object</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_newEl">newEl(tagName[,config[,text]])</a>
#### 描述
新建dom  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ tagName *&lt;<font class='datatype'>string</font>&gt;*   标签名
+ config *&lt;<font class='datatype'>object</font>&gt;*    属性集合
+ text *&lt;<font class='datatype'>string</font>&gt;*      innerText
  
#### 返回值
<font class='datatype'>HTMLElement</font>  
新建的elelment  
### <a id="METHOD_newSvgEl">newSvgEl(tagName)</a>
#### 描述
新建svg element  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ tagName *&lt;any&gt;*   标签名
  
#### 返回值
<font class='datatype'>HTMLElement</font>  
svg element  
### <a id="METHOD_remove">remove(node)</a>
#### 描述
删除节点  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ node *&lt;<font class='datatype'>Node</font>&gt;* html node
  
#### 返回值
void  
### <a id="METHOD_replaceNode">replaceNode(srcNode,nodes)</a>
#### 描述
把srcNode替换为nodes  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ srcNode *&lt;<font class='datatype'>Node</font>&gt;*       源dom
+ nodes *&lt;<font class='datatype'>Node|Array&lt;Node&gt;</font>&gt;*         替换的dom或dom数组
  
#### 返回值
void  
