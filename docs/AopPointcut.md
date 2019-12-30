# Class:AopPointcut   
## 属性
+ [advices](#PROP_advices)
+ [expressions](#PROP_expressions)
+ [proxyClass](#PROP_proxyClass)
## 方法
+ [addAdvice](#METHOD_addAdvice)
+ [match](#METHOD_match)
---   
## 描述
   
### summary   
aop 切点  
   
## 属性   
### <a id="PROP_advices">advices</a>   
***public***   
通知
     
### <a id="PROP_expressions">expressions</a>   
***public***   
表达式数组（正则表达式）
     
### <a id="PROP_proxyClass">proxyClass</a>   
***public***   
代理类
     
## 方法   
### <a id="METHOD_addAdvice">addAdvice(advice)</a>   
***public***   
#### 描述   
给切点添加通知   
#### 参数   
+ advice *&lt;[AopAdvice](#/webroute/api/AopAdvice)&gt;*    
#### 返回值   
void   
### <a id="METHOD_match">match(instanceName,methodName)</a>   
***public***   
#### 描述   
匹配方法是否满足表达式   
#### 参数   
+ instanceName *&lt;string&gt;*  实例名   
+ methodName *&lt;string&gt;*    待检测方法   
#### 返回值   
true/false   
