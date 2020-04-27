# Interface IConnectionManager
## Property List
+ [dbMdl](#PROP_dbMdl)
+ [pool](#PROP_pool)
  
## Method List
+ [getConnection](#METHOD_getConnection)
+ [getManager](#METHOD_getManager)
+ [release](#METHOD_release)
  
---
## Description
<font class="since">Since : v0.0.1</font>  
数据库连接管理器  
### remarks
用于管理connection  
## Properties
### <a id="PROP_dbMdl">dbMdl</a>
数据库module，可以是 mysql module,mssql module, oracle module  
#### Modifier
<font class="modifier">public</font>  
#### Data Type
<font class='datatype'>any</font>  
### <a id="PROP_pool">pool</a>
数据库连接池  
#### Modifier
<font class="modifier">public</font>  
#### Data Type
<font class='datatype'>any</font>  
## Methods
### <a id="METHOD_getConnection">getConnection()</a>
#### Description
获取连接  
#### Modifier
<font class="modifier">public</font>  
#### Returns
void  
### <a id="METHOD_getManager">getManager()</a>
#### Description
获取EntityManager，TypeormConnectionManager有效  
#### Modifier
<font class="modifier">public</font>  
#### Returns
void  
### <a id="METHOD_release">release(conn)</a>
#### Description
释放连接  
#### Modifier
<font class="modifier">public</font>  
#### Params
+ conn *&lt;<font class='datatype'>any</font>&gt;*  待释放的连接
  
#### Returns
void  
