# Class:AopPointcut   
## 属性
+ [proxyClass](#PROP_proxyClass)
+ [expressions](#PROP_expressions)
+ [advices](#PROP_advices)
## 方法
+ [match](#METHOD_match)
+ [addAdvice](#METHOD_addAdvice)
---   
## 描述
   
### summary   
aop 切点  
   
## 属性   
### <a id="PROP_proxyClass">proxyClass</a>   
代理类
     
### <a id="PROP_expressions">expressions</a>   
表达式数组（正则表达式）
     
### <a id="PROP_advices">advices</a>   
通知
     
## 方法   
### <a id="METHOD_match">match(instanceName,methodName)</a>   
***public***   
#### 描述   
匹配方法是否满足表达式   
#### 返回值   
true/false   
#### 参数   
+ instanceName *&lt;string&gt;*  实例名   
+ methodName *&lt;string&gt;*    待检测方法   
### <a id="METHOD_addAdvice">addAdvice(advice)</a>   
***public***   
#### 描述   
给切点添加通知   
#### 返回值   
void   
#### 参数   
+ advice *&lt;[AopAdvice](#/webroute/api/AopAdvice)&gt;*    
