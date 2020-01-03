# Class:MssqlTransaction
## 属性
+ [tr](#PROP_tr)
  
## 方法
+ [begin](#METHOD_begin)
+ [commit](#METHOD_commit)
+ [rollback](#METHOD_rollback)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
mssql 事务类  
### Extends:
<font class='datatype'>[NoomiTransaction](/webroute/api/NoomiTransaction)</font>  
## 构造方法
### <a id="METHOD_constructor">constructor(id[,connection[,type]])</a>
#### 参数
+ id *&lt;<font class='datatype'>number</font>&gt;*            事务id
+ connection *&lt;<font class='datatype'>any</font>&gt;*    所属连接
+ type *&lt;<font class='datatype'>TransactionType</font>&gt;*          事务类型
  
## 属性
### <a id="PROP_tr">tr</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
mysql 事务对象  
## 方法
### <a id="METHOD_begin">begin()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
#### 描述
开始事务  
#### 返回值
void  
### <a id="METHOD_commit">commit()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
#### 描述
事务提交  
#### 返回值
<font class='datatype'>Promise&lt;void&gt;</font>  
### <a id="METHOD_rollback">rollback()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
#### 描述
事务回滚  
#### 返回值
<font class='datatype'>Promise&lt;void&gt;</font>  
