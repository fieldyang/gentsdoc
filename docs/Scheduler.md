# Class Scheduler
## 方法列表
+ [addTask](#METHOD_addTask)
+ [removeTask](#METHOD_removeTask)
+ [start](#METHOD_start)
  
---
## 描述
<font class="since">开始于 : v2.0.0</font>  
调度器，用于每次空闲的待操作序列调度  
## 方法
### <a id="METHOD_addTask">addTask(foo[,thiser])</a>
#### 描述
添加任务  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ foo *&lt;<font class='datatype'>Function</font>&gt;* 		任务和this指向
+ thiser *&lt;<font class='datatype'>any</font>&gt;* 	this指向
  
#### 返回值
void  
### <a id="METHOD_removeTask">removeTask(foo)</a>
#### 描述
移除任务  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ foo *&lt;any&gt;* 	任务
  
#### 返回值
void  
### <a id="METHOD_start">start([scheduleTick])</a>
#### 描述
启动调度器  
#### 修饰符
<font class="modifier">public  static</font>  
#### 参数
+ scheduleTick *&lt;<font class='datatype'>number</font>&gt;* 	渲染间隔
  
#### 返回值
void  
