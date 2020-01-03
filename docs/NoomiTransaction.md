# Class:NoomiTransaction
## 属性
+ [connection](#PROP_connection)
+ [id](#PROP_id)
+ [isBegin](#PROP_isBegin)
+ [manager](#PROP_manager)
+ [trIds](#PROP_trIds)
+ [type](#PROP_type)
  
## 方法
+ [begin](#METHOD_begin)
+ [commit](#METHOD_commit)
+ [rollback](#METHOD_rollback)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
事务类  
## 构造方法
### <a id="METHOD_constructor">constructor(id[,connection[,type]])</a>
#### 参数
+ id *&lt;<font class='datatype'>number</font>&gt;*            事务id
+ connection *&lt;<font class='datatype'>any</font>&gt;*    所属连接
+ type *&lt;<font class='datatype'>TransactionType</font>&gt;*          事务类型
  
## 属性
### <a id="PROP_connection">connection</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
事务所属连接  
### <a id="PROP_id">id</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
事务id  
### <a id="PROP_isBegin">isBegin</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
事务是否开始  
### <a id="PROP_manager">manager</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
### <a id="PROP_trIds">trIds</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
事务id数组，当事务嵌套时需要通过该数组判断是否执行commit和rollback  
### <a id="PROP_type">type</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
事务类型  
## 方法
### <a id="METHOD_begin">begin()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
#### 描述
开始事务,继承类需要重载  
#### 返回值
void  
### <a id="METHOD_commit">commit()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
#### 描述
事务提交,继承类需要重载  
#### 返回值
void  
### <a id="METHOD_rollback">rollback()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
#### 描述
事务回滚,继承类需要重载  
#### 返回值
void  
