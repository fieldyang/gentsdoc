# Class ResourceManager
## 属性列表
+ [loadingTasks](#PROP_loadingTasks)
+ [resources](#PROP_resources)
+ [waitList](#PROP_waitList)
  
## 方法列表
+ [awake](#METHOD_awake)
+ [getResources](#METHOD_getResources)
+ [getType](#METHOD_getType)
+ [handleOne](#METHOD_handleOne)
+ [preHandle](#METHOD_preHandle)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
资源管理器  
用于url资源的加载及管理，主要针对js、模版等  
## 属性
### <a id="PROP_loadingTasks">loadingTasks</a>
加载任务  任务id:资源对象，{id1:{url1:false,url2:false},id2:...}  
#### 修饰符
<font class="modifier">private  static</font>  
#### 数据类型
<font class='datatype'>Map&lt;number,string[]&gt;</font>  
#### 初始值
new Map()  
### <a id="PROP_resources">resources</a>
资源map，key为url，值为整数，1表示正在加载，2表示已加载完成  
#### 修饰符
<font class="modifier">public  static</font>  
#### 数据类型
<font class='datatype'>Map&lt;string,IResourceObj&gt;</font>  
#### 初始值
new Map()  
### <a id="PROP_waitList">waitList</a>
资源等待列表  {资源url:[taskId1,taskId2,...]}  
#### 修饰符
<font class="modifier">private  static</font>  
#### 数据类型
<font class='datatype'>Map&lt;string,number[]&gt;</font>  
#### 初始值
new Map()  
## 方法
### <a id="METHOD_awake">awake(taskId)</a>
#### 描述
唤醒任务  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ taskId *&lt;<font class='datatype'>number</font>&gt;*    任务id
  
#### 返回值
<font class='datatype'>IResourceObj[]</font>  
加载内容数组或undefined  
### <a id="METHOD_getResources">getResources(reqs)</a>
#### 描述
获取多个资源  
#### 修饰符
<font class="modifier">public  static  async</font>  
#### 参数
+ reqs *&lt;<font class='datatype'>any[]</font>&gt;* 
  
#### 返回值
<font class='datatype'>Promise&lt;IResourceObj[]&gt;</font>  
IResourceObj  
### <a id="METHOD_getType">getType(url)</a>
#### 描述
获取url类型  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ url *&lt;<font class='datatype'>string</font>&gt;*   url
  
#### 返回值
<font class='datatype'>string</font>  
url type  
### <a id="METHOD_handleOne">handleOne(url,rObj)</a>
#### 描述
处理一个资源获取结果  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ url *&lt;<font class='datatype'>string</font>&gt;*   资源url
+ rObj *&lt;<font class='datatype'>[IResourceObj](/webroute/api/iresourceobj)</font>&gt;*  资源对象
  
#### 返回值
void  
### <a id="METHOD_preHandle">preHandle(reqs)</a>
#### 描述
预处理  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ reqs *&lt;<font class='datatype'>any[]</font>&gt;*  [{url:**,type:**},url,...]
  
#### 返回值
<font class='datatype'>any[]</font>  
[promises(请求对象数组),urls(url数组),types(类型数组)]  
