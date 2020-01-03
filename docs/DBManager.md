# Class:DBManager
## 属性
+ [connectionManagerName](#PROP_connectionManagerName)
+ [product](#PROP_product)
+ [transactionName](#PROP_transactionName)
  
## 方法
+ [getConnectionManager](#METHOD_getConnectionManager)
+ [init](#METHOD_init)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
数据库管理器  
### remarks
用于管理数据库相关配置  
## 属性
### <a id="PROP_connectionManagerName">connectionManagerName</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
连接管理器实例名  
### <a id="PROP_product">product</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
数据库产品 包括:mysql,mssql,oracle,typeorm,sequelize  
### <a id="PROP_transactionName">transactionName</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
事务类名  
## 方法
### <a id="METHOD_getConnectionManager">getConnectionManager()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获取connection manager  
#### 返回值
<font class='datatype'>[ConnectionManager](./docsConnectionManager)</font>  
connection manager  
### <a id="METHOD_init">init(cfg)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
初始化  
#### 参数
+ cfg *&lt;<font class='datatype'>any</font>&gt;*   配置项,参考数据库配置
  
#### 返回值
void  
