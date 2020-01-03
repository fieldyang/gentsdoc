# Interface:ConnectionManager
## 属性
+ [dbMdl](#PROP_dbMdl)
+ [pool](#PROP_pool)
  
## 方法
+ [getConnection](#METHOD_getConnection)
+ [getManager](#METHOD_getManager)
+ [release](#METHOD_release)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
数据库连接管理器  
### remarks
用于管理connection  
## 属性
### <a id="PROP_dbMdl">dbMdl</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
数据库module，包括mysql,mssql,oracle,sequelize,typeorm  
### <a id="PROP_pool">pool</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
数据库连接池  
## 方法
### <a id="METHOD_getConnection">getConnection()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  async</font>  
#### 描述
获取连接  
#### 返回值
void  
### <a id="METHOD_getManager">getManager()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  async</font>  
#### 描述
获取EntityManager，TypeormConnectionManager有效  
#### 返回值
void  
### <a id="METHOD_release">release(conn)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  async</font>  
#### 描述
释放连接  
#### 参数
+ conn *&lt;<font class='datatype'>any</font>&gt;*  待释放的连接
  
#### 返回值
void  
