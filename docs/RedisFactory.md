# Class:RedisFactory   
## 方法
+ [addClient](#METHOD_addClient)
+ [getClient](#METHOD_getClient)
+ [set](#METHOD_set)
+ [get](#METHOD_get)
+ [has](#METHOD_has)
+ [setTimeout](#METHOD_setTimeout)
+ [getMap](#METHOD_getMap)
+ [del](#METHOD_del)
+ [parseFile](#METHOD_parseFile)
+ [init](#METHOD_init)
---   
## 描述
   
### summary   
redis 工厂  
   
## 方法   
### <a id="METHOD_addClient">addClient(cfg)</a>   
***public &  static***   
#### 描述   
添加redis client   
#### 返回值   
void   
#### 参数   
+ cfg *&lt;RedisCfg&gt;*    
### <a id="METHOD_getClient">getClient(name)</a>   
***public &  static***   
#### 描述   
获得redis client   
#### 返回值   
client   
#### 参数   
+ name *&lt;string&gt;*      client name，默认default   
### <a id="METHOD_set">set(clientName,item)</a>   
***public &  static***   
#### 描述   
设置值   
#### 返回值   
void   
#### 参数   
+ clientName *&lt;string&gt;*    client name   
+ item *&lt;[RedisItem](#/webroute/api/RedisItem)&gt;*          redis item   
### <a id="METHOD_get">get(clientName,item)</a>   
***public &  static***   
#### 描述   
获取值   
#### 返回值   
item value   
#### 参数   
+ clientName *&lt;string&gt;*    client name   
+ item *&lt;[RedisItem](#/webroute/api/RedisItem)&gt;*          redis item   
### <a id="METHOD_has">has(clientName,key)</a>   
***public &  static***   
#### 描述   
是否存在某个key   
#### 返回值   
true/false   
#### 参数   
+ clientName *&lt;string&gt;*    redis name   
+ key *&lt;string&gt;*           key   
### <a id="METHOD_setTimeout">setTimeout(client,key,timeout)</a>   
***public &  static***   
#### 描述   
设置过期时间   
#### 返回值   
void   
#### 参数   
+ client *&lt;any&gt;*    
+ key *&lt;string&gt;*    
+ timeout *&lt;number&gt;*    
### <a id="METHOD_getMap">getMap(clientName,item)</a>   
***public &  static***   
#### 描述   
获取map数据   
#### 返回值   
void   
#### 参数   
+ clientName *&lt;string&gt;*    client name   
+ item *&lt;[RedisItem](#/webroute/api/RedisItem)&gt;*    
### <a id="METHOD_del">del(clientName,key[,subKey])</a>   
***public &  static***   
#### 返回值   
void   
#### 参数   
+ clientName *&lt;string&gt;*    
+ key *&lt;string&gt;*       键   
+ subKey *&lt;string&gt;*    子键   
### <a id="METHOD_parseFile">parseFile(path)</a>   
***public &  static***   
#### 描述   
解析配置文件   
#### 返回值   
void   
#### 参数   
+ path *&lt;string&gt;*    
### <a id="METHOD_init">init(config)</a>   
***public &  static***   
#### 描述   
初始化   
#### 返回值   
void   
#### 参数   
+ config *&lt;any&gt;*    rdis配置   
