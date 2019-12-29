# Class:AopFactory   
## 方法
+ [addAspect](#METHOD_addAspect)
+ [addPointcut](#METHOD_addPointcut)
+ [addExpression](#METHOD_addExpression)
+ [addAdvice](#METHOD_addAdvice)
+ [parseFile](#METHOD_parseFile)
+ [init](#METHOD_init)
+ [updMethodProxy](#METHOD_updMethodProxy)
+ [addProxyByExpression](#METHOD_addProxyByExpression)
+ [getPointcut](#METHOD_getPointcut)
+ [getPointcutById](#METHOD_getPointcutById)
+ [getAdvices](#METHOD_getAdvices)
---   
## 描述
   
### summary   
aop factory  
   
## 方法   
### <a id="METHOD_addAspect">addAspect(cfg)</a>   
***public &  static***   
#### 描述   
添加切面   
#### 返回值   
void   
#### 参数   
+ cfg *&lt;[AopAspect](#/webroute/api/AopAspect)&gt;*    
### <a id="METHOD_addPointcut">addPointcut(id,expressions[,proxyClass])</a>   
***public &  static***   
#### 描述   
添加切点   
#### 返回值   
void   
#### 参数   
+ id *&lt;string&gt;*            切点id   
+ expressions *&lt;Array<string>&gt;*   方法匹配表达式数组   
+ proxyClass *&lt;any&gt;*    特定代理类   
### <a id="METHOD_addExpression">addExpression(pointcutId,expression)</a>   
***public &  static***   
#### 描述   
为pointcut添加expression   
#### 返回值   
void   
#### 参数   
+ pointcutId *&lt;string&gt;*    切点id   
+ expression *&lt;string|Array<string>&gt;*    表达式或数组   
### <a id="METHOD_addAdvice">addAdvice(advice)</a>   
***public &  static***   
#### 描述   
添加通知   
#### 返回值   
void   
#### 参数   
+ advice *&lt;[AopAdvice](#/webroute/api/AopAdvice)&gt;* 通知配置   
### <a id="METHOD_parseFile">parseFile(path)</a>   
***public &  static***   
#### 描述   
解析文件   
#### 返回值   
void   
#### 参数   
+ path *&lt;string&gt;*  文件路径   
### <a id="METHOD_init">init(config)</a>   
***public &  static***   
#### 描述   
初始化   
#### 返回值   
void   
#### 参数   
+ config *&lt;any&gt;*    
### <a id="METHOD_updMethodProxy">updMethodProxy()</a>   
***public &  static***   
#### 描述   
更新aop匹配的方法代理，为所有aop匹配的方法设置代理   
#### 返回值   
void   
#### 参数   
### <a id="METHOD_addProxyByExpression">addProxyByExpression(expr[,instances])</a>   
***public &  static***   
#### 描述   
通过正则式给方法加代理   
#### 返回值   
void   
#### 参数   
+ expr *&lt;RegExp&gt;*          表达式正则式   
+ instances *&lt;Array<string>&gt;*     处理过的instance name   
### <a id="METHOD_getPointcut">getPointcut(instanceName,methodName)</a>   
***public &  static***   
#### 描述   
获取切点   
#### 返回值   
pointcut array   
#### 参数   
+ instanceName *&lt;string&gt;*  实例名   
+ methodName *&lt;string&gt;*    方法名   
### <a id="METHOD_getPointcutById">getPointcutById(pointcutId)</a>   
***public &  static***   
#### 描述   
根据id获取切点   
#### 返回值   
pointcut   
#### 参数   
+ pointcutId *&lt;string&gt;*    pointcut id   
### <a id="METHOD_getAdvices">getAdvices(instanceName,methodName)</a>   
***public &  static***   
#### 描述   
获取advices   
#### 返回值   
{before:,after:,return:,throw:}  
before:[{instance:切面实例,method:切面方法},...]  
after:[{instance:切面实例,method:切面方法},...]  
return:[{instance:切面实例,method:切面方法},...]  
throw:[{instance:切面实例,method:切面方法},...]  
   
#### 参数   
+ instanceName *&lt;string&gt;*  实例名   
+ methodName *&lt;string&gt;*    方法名   
