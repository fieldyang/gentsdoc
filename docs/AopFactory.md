# Class:AopFactory   
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
+ [parseFile](#METHOD_parseFile)
+ [updMethodProxy](#METHOD_updMethodProxy)
---   
## 描述
   
### summary   
aop factory  
   
## 方法   
### <a id="METHOD_addAdvice">addAdvice(advice)</a>   
***public &  static***   
#### 描述   
添加通知   
#### 参数   
+ advice *&lt;[AopAdvice](#/webroute/api/AopAdvice)&gt;* 通知配置   
#### 返回值   
void   
### <a id="METHOD_addAspect">addAspect(cfg)</a>   
***public &  static***   
#### 描述   
添加切面   
#### 参数   
+ cfg *&lt;[AopAspect](#/webroute/api/AopAspect)&gt;*    
#### 返回值   
void   
### <a id="METHOD_addExpression">addExpression(pointcutId,expression)</a>   
***public &  static***   
#### 描述   
为pointcut添加expression   
#### 参数   
+ pointcutId *&lt;string&gt;*    切点id   
+ expression *&lt;string|Array<string>&gt;*    表达式或数组   
#### 返回值   
void   
### <a id="METHOD_addPointcut">addPointcut(id,expressions[,proxyClass])</a>   
***public &  static***   
#### 描述   
添加切点   
#### 参数   
+ id *&lt;string&gt;*            切点id   
+ expressions *&lt;Array<string>&gt;*   方法匹配表达式数组   
+ proxyClass *&lt;any&gt;*    特定代理类   
#### 返回值   
void   
### <a id="METHOD_addProxyByExpression">addProxyByExpression(expr[,instances])</a>   
***public &  static***   
#### 描述   
通过正则式给方法加代理   
#### 参数   
+ expr *&lt;RegExp&gt;*          表达式正则式   
+ instances *&lt;Array<string>&gt;*     处理过的instance name   
#### 返回值   
void   
### <a id="METHOD_getAdvices">getAdvices(instanceName,methodName)</a>   
***public &  static***   
#### 描述   
获取advices   
#### 参数   
+ instanceName *&lt;string&gt;*  实例名   
+ methodName *&lt;string&gt;*    方法名   
#### 返回值   
{before:,after:,return:,throw:}  
before:[{instance:切面实例,method:切面方法},...]  
after:[{instance:切面实例,method:切面方法},...]  
return:[{instance:切面实例,method:切面方法},...]  
throw:[{instance:切面实例,method:切面方法},...]  
   
### <a id="METHOD_getPointcut">getPointcut(instanceName,methodName)</a>   
***public &  static***   
#### 描述   
获取切点   
#### 参数   
+ instanceName *&lt;string&gt;*  实例名   
+ methodName *&lt;string&gt;*    方法名   
#### 返回值   
pointcut array   
### <a id="METHOD_getPointcutById">getPointcutById(pointcutId)</a>   
***public &  static***   
#### 描述   
根据id获取切点   
#### 参数   
+ pointcutId *&lt;string&gt;*    pointcut id   
#### 返回值   
pointcut   
### <a id="METHOD_init">init(config)</a>   
***public &  static***   
#### 描述   
初始化   
#### 参数   
+ config *&lt;any&gt;*    
#### 返回值   
void   
### <a id="METHOD_parseFile">parseFile(path)</a>   
***public &  static***   
#### 描述   
解析文件   
#### 参数   
+ path *&lt;string&gt;*  文件路径   
#### 返回值   
void   
### <a id="METHOD_updMethodProxy">updMethodProxy()</a>   
***public &  static***   
#### 描述   
更新aop匹配的方法代理，为所有aop匹配的方法设置代理   
#### 参数   
#### 返回值   
void   
