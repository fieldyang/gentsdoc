# Class:MemoryCache   
## 方法
+ [get](#METHOD_get)
+ [getMap](#METHOD_getMap)
+ [getKeys](#METHOD_getKeys)
+ [del](#METHOD_del)
+ [has](#METHOD_has)
+ [changeLastUse](#METHOD_changeLastUse)
+ [getRealSize](#METHOD_getRealSize)
+ [cleanup](#METHOD_cleanup)
+ [clearByLRU](#METHOD_clearByLRU)
+ [checkAndClean](#METHOD_checkAndClean)
+ [cacLRU](#METHOD_cacLRU)
---   
## 描述
   
### summary   
存储区  
   
## 方法   
### <a id="METHOD_get">get(key[,subKey[,changeExpire]])</a>   
***public***   
#### 描述   
取值   
#### 返回值   
void   
#### 参数   
+ key *&lt;string&gt;*    
+ subKey *&lt;string&gt;*    
+ changeExpire *&lt;boolean&gt;*    
### <a id="METHOD_getMap">getMap(key[,changeExpire])</a>   
***public***   
#### 描述   
获取值   
#### 返回值   
value或null   
#### 参数   
+ key *&lt;string&gt;*           键   
+ changeExpire *&lt;boolean&gt;*  是否更新过期时间   
### <a id="METHOD_getKeys">getKeys(key)</a>   
***public***   
#### 描述   
获取键   
#### 返回值   
void   
#### 参数   
+ key *&lt;string&gt;*   键，可以带通配符   
### <a id="METHOD_del">del(key[,subKey])</a>   
***public***   
#### 描述   
删除键   
#### 返回值   
void   
#### 参数   
+ key *&lt;string&gt;*       键   
+ subKey *&lt;string&gt;*    子键   
### <a id="METHOD_has">has(key)</a>   
***public***   
#### 描述   
是否拥有key   
#### 返回值   
true/false   
#### 参数   
+ key *&lt;string&gt;*    
### <a id="METHOD_changeLastUse">changeLastUse(item[,changeExpire])</a>   
***public***   
#### 描述   
修改最后使用状态   
#### 返回值   
void   
#### 参数   
+ item *&lt;MemoryItem&gt;*              memory item   
+ changeExpire *&lt;boolean&gt;*      释放修改expire   
### <a id="METHOD_getRealSize">getRealSize(value)</a>   
***public***   
#### 描述   
获取内容实际size utf8   
#### 返回值   
size   
#### 参数   
+ value *&lt;any&gt;*     待检测值   
### <a id="METHOD_cleanup">cleanup(size)</a>   
***public***   
#### 描述   
清理缓存   
#### 返回值   
void   
#### 参数   
+ size *&lt;number&gt;*  清理大小，为0仅清除超时元素   
### <a id="METHOD_clearByLRU">clearByLRU()</a>   
***public***   
#### 描述   
通过lru进行清理   
#### 返回值   
清理的尺寸   
#### 参数   
### <a id="METHOD_checkAndClean">checkAndClean(item)</a>   
***public***   
#### 描述   
检查和清理空间   
#### 返回值   
void   
#### 参数   
+ item *&lt;[CacheItem](#/webroute/api/CacheItem)&gt;*  cacheitem   
### <a id="METHOD_cacLRU">cacLRU(item)</a>   
***public***   
#### 描述   
计算LRU  
timeout 的权重为5（先保证timeout由时间去清理）  
right = sum(1-(当前时间-使用记录)/当前时间) + timeout?5:0   
#### 返回值   
void   
#### 参数   
+ item *&lt;MemoryItem&gt;*    
