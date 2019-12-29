# Class:Transaction   
## 属性
+ [id](#PROP_id)
+ [connection](#PROP_connection)
+ [manager](#PROP_manager)
+ [src](#PROP_src)
+ [type](#PROP_type)
+ [isBegin](#PROP_isBegin)
+ [asyncIds](#PROP_asyncIds)
+ [trIds](#PROP_trIds)
## 方法
+ [begin](#METHOD_begin)
+ [commit](#METHOD_commit)
+ [rollback](#METHOD_rollback)
---   
## 描述
   
### summary   
事务类  
   
## 属性   
### <a id="PROP_id">id</a>   
事务id
     
### <a id="PROP_connection">connection</a>   
数据库连接
     
### <a id="PROP_manager">manager</a>   
数据库管理器
     
### <a id="PROP_src">src</a>   
事务资源
     
### <a id="PROP_type">type</a>   
资源类型
     
### <a id="PROP_isBegin">isBegin</a>   
是否开启事务
     
### <a id="PROP_asyncIds">asyncIds</a>   
绑定的的async id
     
### <a id="PROP_trIds">trIds</a>   
有开始事务的async id数组
     
## 方法   
### <a id="METHOD_begin">begin()</a>   
***public***   
#### 描述   
开启事务   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_commit">commit()</a>   
***public***   
#### 描述   
事务提交   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_rollback">rollback()</a>   
***public***   
#### 描述   
事务回滚   
#### 返回值   
void   
#### 参数   
