# Class:RedisFactory   
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
   
### summary   
redis 工厂  
   
## 方法   
### <a id="METHOD_addClient">addClient(cfg)</a>   
***public &  static***   
#### 描述   
添加redis client   
#### 参数   
+ cfg *&lt;RedisCfg&gt;*    
#### 返回值   
void   
### <a id="METHOD_del">del(clientName,key[,subKey])</a>   
***public &  static***   
#### 参数   
+ clientName *&lt;string&gt;*    
+ key *&lt;string&gt;*       键   
+ subKey *&lt;string&gt;*    子键   
#### 返回值   
void   
### <a id="METHOD_get">get(clientName,item)</a>   
***public &  static***   
#### 描述   
获取值   
#### 参数   
+ clientName *&lt;string&gt;*    client name   
+ item *&lt;[RedisItem](#/webroute/api/RedisItem)&gt;*          redis item   
#### 返回值   
item value   
### <a id="METHOD_getClient">getClient(name)</a>   
***public &  static***   
#### 描述   
获得redis client   
#### 参数   
+ name *&lt;string&gt;*      client name，默认default   
#### 返回值   
client   
### <a id="METHOD_getMap">getMap(clientName,item)</a>   
***public &  static***   
#### 描述   
获取map数据   
#### 参数   
+ clientName *&lt;string&gt;*    client name   
+ item *&lt;[RedisItem](#/webroute/api/RedisItem)&gt;*    
#### 返回值   
void   
### <a id="METHOD_has">has(clientName,key)</a>   
***public &  static***   
#### 描述   
是否存在某个key   
#### 参数   
+ clientName *&lt;string&gt;*    redis name   
+ key *&lt;string&gt;*           key   
#### 返回值   
true/false   
### <a id="METHOD_init">init(config)</a>   
***public &  static***   
#### 描述   
初始化   
#### 参数   
+ config *&lt;any&gt;*    rdis配置   
#### 返回值   
void   
### <a id="METHOD_parseFile">parseFile(path)</a>   
***public &  static***   
#### 描述   
解析配置文件   
#### 参数   
+ path *&lt;string&gt;*    
#### 返回值   
void   
### <a id="METHOD_set">set(clientName,item)</a>   
***public &  static***   
#### 描述   
设置值   
#### 参数   
+ clientName *&lt;string&gt;*    client name   
+ item *&lt;[RedisItem](#/webroute/api/RedisItem)&gt;*          redis item   
#### 返回值   
void   
### <a id="METHOD_setTimeout">setTimeout(client,key,timeout)</a>   
***public &  static***   
#### 描述   
设置过期时间   
#### 参数   
+ client *&lt;any&gt;*    
+ key *&lt;string&gt;*    
+ timeout *&lt;number&gt;*    
#### 返回值   
void   
