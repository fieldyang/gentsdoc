# Class:SecurityFactory
## 属性
+ [PRELOGIN](#PROP_PRELOGIN)
+ [authType](#PROP_authType)
+ [cache](#PROP_cache)
+ [dbOptions](#PROP_dbOptions)
+ [groups](#PROP_groups)
+ [maxSize](#PROP_maxSize)
+ [redis](#PROP_redis)
+ [redisGroupKey](#PROP_redisGroupKey)
+ [redisResourceKey](#PROP_redisResourceKey)
+ [redisUserKey](#PROP_redisUserKey)
+ [saveType](#PROP_saveType)
+ [securityPages](#PROP_securityPages)
+ [users](#PROP_users)
  
## 方法
+ [addGroupAuthority](#METHOD_addGroupAuthority)
+ [addResourceAuth](#METHOD_addResourceAuth)
+ [addUserGroup](#METHOD_addUserGroup)
+ [addUserGroups](#METHOD_addUserGroups)
+ [check](#METHOD_check)
+ [deleteAuthority](#METHOD_deleteAuthority)
+ [deleteGroup](#METHOD_deleteGroup)
+ [deleteGroupAuthority](#METHOD_deleteGroupAuthority)
+ [deleteResource](#METHOD_deleteResource)
+ [deleteResourceAuthority](#METHOD_deleteResourceAuthority)
+ [deleteUser](#METHOD_deleteUser)
+ [deleteUserGroup](#METHOD_deleteUserGroup)
+ [getPreLoginInfo](#METHOD_getPreLoginInfo)
+ [getSecurityPage](#METHOD_getSecurityPage)
+ [init](#METHOD_init)
+ [setPreLoginInfo](#METHOD_setPreLoginInfo)
+ [updGroupAuths](#METHOD_updGroupAuths)
+ [updResourceAuths](#METHOD_updResourceAuths)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
安全工厂  
### remarks
用于管理安全对象  
## 属性
### <a id="PROP_PRELOGIN">PRELOGIN</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
认证前url在session中的名字  
### <a id="PROP_authType">authType</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
认证类型 0 session 1 token  
### <a id="PROP_cache">cache</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
缓存对象  
### <a id="PROP_dbOptions">dbOptions</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
数据表对象  
### <a id="PROP_groups">groups</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
组map  
### <a id="PROP_maxSize">maxSize</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
最大size,saveType=0时有效  
### <a id="PROP_redis">redis</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
redis名，必须在redis.json中已定义,saveType=1时有效  
### <a id="PROP_redisGroupKey">redisGroupKey</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
groups在cache的key  
### <a id="PROP_redisResourceKey">redisResourceKey</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
resource在cache的key  
### <a id="PROP_redisUserKey">redisUserKey</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
users在cache的key  
### <a id="PROP_saveType">saveType</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
数据存储类型，0内存 1redis  
### <a id="PROP_securityPages">securityPages</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
安全相关页面map  
### <a id="PROP_users">users</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static</font>  
登录用户map  
## 方法
### <a id="METHOD_addGroupAuthority">addGroupAuthority(groupId,authId)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加组权限  
#### 参数
+ groupId *&lt;<font class='datatype'>number</font>&gt;*   组id
+ authId *&lt;<font class='datatype'>number</font>&gt;*    权限id
  
#### 返回值
void  
### <a id="METHOD_addResourceAuth">addResourceAuth(url,authId)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加资源权限  
#### 参数
+ url *&lt;<font class='datatype'>string</font>&gt;*       资源url
+ authId *&lt;<font class='datatype'>number</font>&gt;*    权限id
  
#### 返回值
void  
### <a id="METHOD_addUserGroup">addUserGroup(userId,groupId)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加用户组  
#### 参数
+ userId *&lt;<font class='datatype'>number</font>&gt;*    用户id
+ groupId *&lt;<font class='datatype'>number</font>&gt;*   组id
  
#### 返回值
void  
### <a id="METHOD_addUserGroups">addUserGroups(userId,groups[,request])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加用户组(多个组)  
#### 参数
+ userId *&lt;<font class='datatype'>number</font>&gt;*    用户id
+ groups *&lt;<font class='datatype'>Array&lt;number&gt;</font>&gt;*    组id 数组
+ request *&lt;<font class='datatype'>[HttpRequest](/webroute/api/HttpRequest)</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_check">check(url,session)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
鉴权  
##### return
0 通过 1未登录 2无权限  
#### 参数
+ url *&lt;<font class='datatype'>string</font>&gt;*       资源url
+ session *&lt;<font class='datatype'>Session</font>&gt;*   session对象
  
#### 返回值
<font class='datatype'>Promise&lt;number&gt;</font>  
### <a id="METHOD_deleteAuthority">deleteAuthority(authId)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
删除权限  
#### 参数
+ authId *&lt;<font class='datatype'>number</font>&gt;*    权限Id
  
#### 返回值
void  
### <a id="METHOD_deleteGroup">deleteGroup(groupId)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
删除组  
#### 参数
+ groupId *&lt;<font class='datatype'>number</font>&gt;*   组id
  
#### 返回值
void  
### <a id="METHOD_deleteGroupAuthority">deleteGroupAuthority(groupId,authId)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
删除组权限  
#### 参数
+ groupId *&lt;<font class='datatype'>number</font>&gt;*   组id
+ authId *&lt;<font class='datatype'>number</font>&gt;*    权限id
  
#### 返回值
void  
### <a id="METHOD_deleteResource">deleteResource(url)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
删除资源  
#### 参数
+ url *&lt;<font class='datatype'>string</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_deleteResourceAuthority">deleteResourceAuthority(url,authId)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
删除资源权限  
#### 参数
+ url *&lt;<font class='datatype'>string</font>&gt;* 
+ authId *&lt;<font class='datatype'>number</font>&gt;*    权限id
  
#### 返回值
void  
### <a id="METHOD_deleteUser">deleteUser(userId[,request])</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
删除用户  
#### 参数
+ userId *&lt;<font class='datatype'>number</font>&gt;*    用户id
+ request *&lt;<font class='datatype'>[HttpRequest](/webroute/api/HttpRequest)</font>&gt;*   request对象
  
#### 返回值
void  
### <a id="METHOD_deleteUserGroup">deleteUserGroup(userId,groupId)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
删除用户组  
#### 参数
+ userId *&lt;<font class='datatype'>number</font>&gt;*    用户id
+ groupId *&lt;<font class='datatype'>number</font>&gt;*   组id
  
#### 返回值
void  
### <a id="METHOD_getPreLoginInfo">getPreLoginInfo(request)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获取登录前页面  
##### return
page url  
#### 参数
+ request *&lt;<font class='datatype'>[HttpRequest](/webroute/api/HttpRequest)</font>&gt;* 
  
#### 返回值
<font class='datatype'>Promise&lt;string&gt;</font>  
### <a id="METHOD_getSecurityPage">getSecurityPage(name)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
获取安全配置页面  
##### return
页面url  
#### 参数
+ name *&lt;<font class='datatype'>string</font>&gt;*      配置项名
  
#### 返回值
void  
### <a id="METHOD_init">init(config)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
初始化配置  
##### config
配置项  
#### 参数
+ config *&lt;any&gt;* 
  
#### 返回值
void  
### <a id="METHOD_setPreLoginInfo">setPreLoginInfo(session,request)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
设置认证前页面  
#### 参数
+ session *&lt;<font class='datatype'>Session</font>&gt;*   session对象
+ request *&lt;<font class='datatype'>[HttpRequest](/webroute/api/HttpRequest)</font>&gt;* 
  
#### 返回值
void  
### <a id="METHOD_updGroupAuths">updGroupAuths(groupId,authIds)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
更新组权限  
#### 参数
+ groupId *&lt;<font class='datatype'>number</font>&gt;*   组id
+ authIds *&lt;<font class='datatype'>Array&lt;number&gt;</font>&gt;*   权限id数组
  
#### 返回值
void  
### <a id="METHOD_updResourceAuths">updResourceAuths(url,auths)</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public  static  async</font>  
#### 描述
添加资源权限(多个权限)  
#### 参数
+ url *&lt;<font class='datatype'>string</font>&gt;*       资源id
+ auths *&lt;<font class='datatype'>Array&lt;number&gt;</font>&gt;*     权限id数组
  
#### 返回值
void  
