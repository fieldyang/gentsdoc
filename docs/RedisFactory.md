# Class:RedisFactory
## 属性
+ [clientMap](#PROP_clientMap)
  
## 方法
+ [addClient](#METHOD_addClient)
+ [del](#METHOD_del)
+ [get](#METHOD_get)
+ [getClient](#METHOD_getClient)
+ [getMap](#METHOD_getMap)
+ [has](#METHOD_has)
+ [init](#METHOD_init)
+ [parseFile](#METHOD_parseFile)
+ [set](#METHOD_set)
+ [setTimeout](#METHOD_setTimeout)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
redis 工厂  
## 属性
### <a id="PROP_clientMap">clientMap</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
存储所有的redis对象  
## 方法
### <a id="METHOD_addClient">addClient(cfg)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加redis client到clientMap  
#### 参数
+ cfg *&lt;<font class='datatype'>[RedisCfg](/webroute/api/RedisCfg)</font>&gt;*   redis配置项
  
#### 返回值
void  
### <a id="METHOD_del">del(clientName,key[,subKey])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
删除项  
##### clientName
client name  
#### 参数
+ clientName *&lt;<font class='datatype'>string</font>&gt;* 
+ key *&lt;<font class='datatype'>string</font>&gt;*       键
+ subKey *&lt;<font class='datatype'>string</font>&gt;*    子键
  
#### 返回值
void  
### <a id="METHOD_get">get(clientName,item)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
从redis 中取值  
##### return
item value  
#### 参数
+ clientName *&lt;<font class='datatype'>string</font>&gt;*    client name
+ item *&lt;<font class='datatype'>[RedisItem](/webroute/api/RedisItem)</font>&gt;*          redis item
  
#### 返回值
<font class='datatype'>Promise&lt;string&gt;</font>  
### <a id="METHOD_getClient">getClient(name)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获得redis client  
##### return
redis client  
#### 参数
+ name *&lt;<font class='datatype'>string</font>&gt;*      client name，默认default
  
#### 返回值
void  
### <a id="METHOD_getMap">getMap(clientName,item)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获取map数据  
#### 参数
+ clientName *&lt;<font class='datatype'>string</font>&gt;*    client name
+ item *&lt;<font class='datatype'>[RedisItem](/webroute/api/RedisItem)</font>&gt;*          RedisItem
  
#### 返回值
void  
### <a id="METHOD_has">has(clientName,key)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
是否存在某个key  
##### return
存在则返回true，否则返回false  
#### 参数
+ clientName *&lt;<font class='datatype'>string</font>&gt;*    redis name
+ key *&lt;<font class='datatype'>string</font>&gt;*           key
  
#### 返回值
<font class='datatype'>Promise&lt;boolean&gt;</font>  
### <a id="METHOD_init">init(config)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
初始化  
#### 参数
+ config *&lt;any&gt;*    redis配置
  
#### 返回值
void  
### <a id="METHOD_parseFile">parseFile(path)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
解析配置文件  
#### 参数
+ path *&lt;<font class='datatype'>string</font>&gt;*  redis配置文件路径
  
#### 返回值
void  
### <a id="METHOD_set">set(clientName,item)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
把值存入redis中  
#### 参数
+ clientName *&lt;<font class='datatype'>string</font>&gt;*    client name
+ item *&lt;<font class='datatype'>[RedisItem](/webroute/api/RedisItem)</font>&gt;*          redis item
  
#### 返回值
void  
### <a id="METHOD_setTimeout">setTimeout(client,key,timeout)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
设置超时时间  
#### 参数
+ client *&lt;<font class='datatype'>any</font>&gt;*    client name
+ key *&lt;<font class='datatype'>string</font>&gt;*       键
+ timeout *&lt;<font class='datatype'>number</font>&gt;*   超时时间
  
#### 返回值
void  
