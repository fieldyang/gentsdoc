# Class:InstanceFactory
## 属性
+ [factory](#PROP_factory)
+ [injectList](#PROP_injectList)
+ [mdlBasePath](#PROP_mdlBasePath)
  
## 方法
+ [addInject](#METHOD_addInject)
+ [addInstance](#METHOD_addInstance)
+ [addInstances](#METHOD_addInstances)
+ [exec](#METHOD_exec)
+ [finishInject](#METHOD_finishInject)
+ [getFactory](#METHOD_getFactory)
+ [getInstance](#METHOD_getInstance)
+ [getInstanceByClass](#METHOD_getInstanceByClass)
+ [getInstanceObj](#METHOD_getInstanceObj)
+ [init](#METHOD_init)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
实例工厂  
### remarks
用于管理所有的实例对象  
## 属性
### <a id="PROP_factory">factory</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
实例工厂map，存放所有实例对象  
### <a id="PROP_injectList">injectList</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
待注入对象数组  
### <a id="PROP_mdlBasePath">mdlBasePath</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
模块基础路径数组，加载实例时从该路径加载  
## 方法
### <a id="METHOD_addInject">addInject(instance,propName,injectName)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
为实例添加注入  
#### 参数
+ instance *&lt;<font class='datatype'>any</font>&gt;*      实例对象
+ propName *&lt;<font class='datatype'>string</font>&gt;*      属性名
+ injectName *&lt;<font class='datatype'>string</font>&gt;*    注入的实例名
  
#### 返回值
<font class='datatype'>void</font>  
### <a id="METHOD_addInstance">addInstance(cfg)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加单例到工厂  
#### 参数
+ cfg *&lt;<font class='datatype'>[InstanceCfg](/webroute/api/InstanceCfg)</font>&gt;*   实例配置对象
  
#### 返回值
<font class='datatype'>any</font>  
undefined或添加的实例  
### <a id="METHOD_addInstances">addInstances(path)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
从文件添加实例  
#### 参数
+ path *&lt;<font class='datatype'>string</font>&gt;*  文件路径
  
#### 返回值
void  
### <a id="METHOD_exec">exec(instance,methodName,params[,func])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
执行实例的一个方法  
#### 参数
+ instance *&lt;<font class='datatype'>any</font>&gt;* 
+ methodName *&lt;<font class='datatype'>string</font>&gt;*    方法名
+ params *&lt;<font class='datatype'>Array&lt;any&gt;</font>&gt;*        参数数组
+ func *&lt;<font class='datatype'>Function</font>&gt;*          方法(与methodName二选一)
  
#### 返回值
<font class='datatype'>any</font>  
方法对应的结果  
### <a id="METHOD_finishInject">finishInject()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
完成待注入列表的注入操作  
#### 返回值
<font class='datatype'>void</font>  
### <a id="METHOD_getFactory">getFactory()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获取instance工厂  
#### 返回值
<font class='datatype'>Map&lt;string,InstanceObj&gt;</font>  
实例工厂  
### <a id="METHOD_getInstance">getInstance(name[,param])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获取实例  
#### 参数
+ name *&lt;<font class='datatype'>string</font>&gt;*  实例名
+ param *&lt;<font class='datatype'>Array&lt;any&gt;</font>&gt;* 参数数组
  
#### 返回值
<font class='datatype'>any</font>  
实例化的对象或null  
### <a id="METHOD_getInstanceByClass">getInstanceByClass(clazz[,param])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
通过类获取实例  
#### 参数
+ clazz *&lt;<font class='datatype'>any</font>&gt;*     类
+ param *&lt;<font class='datatype'>Array&lt;any&gt;</font>&gt;*     参数数组
  
#### 返回值
<font class='datatype'>any</font>  
实例  
### <a id="METHOD_getInstanceObj">getInstanceObj(name)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获取实例对象  
#### 参数
+ name *&lt;<font class='datatype'>string</font>&gt;*  实例名
  
#### 返回值
<font class='datatype'>[InstanceObj](./docsInstanceObj)</font>  
实例对象  
### <a id="METHOD_init">init(config)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
工厂初始化  
#### 参数
+ config *&lt;<font class='datatype'>any</font>&gt;*    配置项
  
#### 返回值
void  
