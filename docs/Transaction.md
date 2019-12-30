# Class:Transaction   
## 属性
+ [asyncIds](#PROP_asyncIds)
+ [connection](#PROP_connection)
+ [id](#PROP_id)
+ [isBegin](#PROP_isBegin)
+ [manager](#PROP_manager)
+ [src](#PROP_src)
+ [trIds](#PROP_trIds)
+ [type](#PROP_type)
## 方法
+ [begin](#METHOD_begin)
+ [commit](#METHOD_commit)
+ [rollback](#METHOD_rollback)
---   
## 描述
   
### summary   
事务类  
   
## 属性   
### <a id="PROP_asyncIds">asyncIds</a>   
***public***   
绑定的的async id
     
### <a id="PROP_connection">connection</a>   
***public***   
数据库连接
     
### <a id="PROP_id">id</a>   
***public***   
事务id
     
### <a id="PROP_isBegin">isBegin</a>   
***public***   
是否开启事务
     
### <a id="PROP_manager">manager</a>   
***public***   
数据库管理器
     
### <a id="PROP_src">src</a>   
***public***   
事务资源
     
### <a id="PROP_trIds">trIds</a>   
***public***   
有开始事务的async id数组
     
### <a id="PROP_type">type</a>   
***public***   
资源类型
     
## 方法   
### <a id="METHOD_begin">begin()</a>   
***public***   
#### 描述   
开启事务   
#### 参数   
#### 返回值   
void   
### <a id="METHOD_commit">commit()</a>   
***public***   
#### 描述   
事务提交   
#### 参数   
#### 返回值   
void   
### <a id="METHOD_rollback">rollback()</a>   
***public***   
#### 描述   
事务回滚   
#### 参数   
#### 返回值   
void   
