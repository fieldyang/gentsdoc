# Class:AopFactory
## 属性
+ [aspects](#PROP_aspects)
+ [needToUpdateProxy](#PROP_needToUpdateProxy)
+ [pointcuts](#PROP_pointcuts)
  
## 方法
+ [addAdvice](#METHOD_addAdvice)
+ [addAspect](#METHOD_addAspect)
+ [addExpression](#METHOD_addExpression)
+ [addPointcut](#METHOD_addPointcut)
+ [addProxyByExpression](#METHOD_addProxyByExpression)
+ [getAdvices](#METHOD_getAdvices)
+ [getPointcut](#METHOD_getPointcut)
+ [getPointcutById](#METHOD_getPointcutById)
+ [init](#METHOD_init)
+ [updMethodProxy](#METHOD_updMethodProxy)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
Aop工厂  
用于管理所有切面、切点  
## 属性
### <a id="PROP_aspects">aspects</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
切面map，用于存储所有切面  
### <a id="PROP_needToUpdateProxy">needToUpdateProxy</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
更新proxy开关，如果设置为true，则会在nexttick更新代理，默认true  
### <a id="PROP_pointcuts">pointcuts</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
切点map，用于存储所有切点  
## 方法
### <a id="METHOD_addAdvice">addAdvice(advice)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
为切点添加一个通知  
#### 参数
+ advice *&lt;<font class='datatype'>[AopAdvice](/webroute/api/AopAdvice)</font>&gt;* 通知配置
  
#### 返回值
<font class='datatype'>void</font>  
### <a id="METHOD_addAspect">addAspect(cfg)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加一个切面  
#### 参数
+ cfg *&lt;<font class='datatype'>[AopAspect](/webroute/api/AopAspect)</font>&gt;*   切面对象
  
#### 返回值
<font class='datatype'>void</font>  
### <a id="METHOD_addExpression">addExpression(pointcutId,expression)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
为切点添加表达式  
#### 参数
+ pointcutId *&lt;<font class='datatype'>string</font>&gt;*    切点id
+ expression *&lt;<font class='datatype'>string|Array&lt;string&gt;</font>&gt;*    表达式或数组
  
#### 返回值
void  
### <a id="METHOD_addPointcut">addPointcut(id,expressions)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加切点  
#### 参数
+ id *&lt;<font class='datatype'>string</font>&gt;*            切点id
+ expressions *&lt;<font class='datatype'>Array&lt;string&gt;</font>&gt;*   方法匹配表达式数组
  
#### 返回值
<font class='datatype'>void</font>  
### <a id="METHOD_addProxyByExpression">addProxyByExpression(expr[,instances])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
通过正则式给方法加代理  
#### 参数
+ expr *&lt;<font class='datatype'>RegExp</font>&gt;*          表达式正则式
+ instances *&lt;<font class='datatype'>Array&lt;string&gt;</font>&gt;*     处理过的instance name
  
#### 返回值
void  
### <a id="METHOD_getAdvices">getAdvices(instanceName,methodName)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获取advices  
##### return
{  
before:[{instance:切面实例,method:切面方法},...]  
after:[{instance:切面实例,method:切面方法},...]  
return:[{instance:切面实例,method:切面方法},...]  
throw:[{instance:切面实例,method:切面方法},...]  
}  
#### 参数
+ instanceName *&lt;<font class='datatype'>string</font>&gt;*  实例名
+ methodName *&lt;<font class='datatype'>string</font>&gt;*    方法名
  
#### 返回值
<font class='datatype'>object</font>  
### <a id="METHOD_getPointcut">getPointcut(instanceName,methodName)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获取切点  
#### 参数
+ instanceName *&lt;<font class='datatype'>string</font>&gt;*  实例名
+ methodName *&lt;<font class='datatype'>string</font>&gt;*    方法名
  
#### 返回值
<font class='datatype'>Array&lt;[AopPointcut](./docsAopPointcut)&gt;</font>  
切点数组  
### <a id="METHOD_getPointcutById">getPointcutById(pointcutId)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
根据id获取切点  
#### 参数
+ pointcutId *&lt;<font class='datatype'>string</font>&gt;*    切点id
  
#### 返回值
<font class='datatype'>[AopPointcut](./docsAopPointcut)</font>  
切点对象  
### <a id="METHOD_init">init(config)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
初始化切面工厂  
#### 参数
+ config *&lt;<font class='datatype'>[AopCfg](/webroute/api/AopCfg)</font>&gt;* 配置对象，包含切点集合、切面集合(含通知集合)
  
#### 返回值
void  
### <a id="METHOD_updMethodProxy">updMethodProxy()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
更新aop匹配的方法代理，为所有aop匹配的方法设置代理  
#### 返回值
<font class='datatype'>void</font>  
