# Class:NoomiMain
## 方法
+ [init](#METHOD_init)
  
---
## 描述
<font class="since">开始于:v0.0.1</font>  
框架主类  
### remarks
该类实例化可进行框架初始化，框架初始化有两种方式：  
1. new Noomi(config)  
2. noomi(config)  
## 构造方法
### <a id="METHOD_constructor">constructor([port[,configPath[,sslPort]]])</a>
#### 参数
+ port *&lt;<font class='datatype'>number</font>&gt;*          //http port,默认 3000
+ configPath *&lt;<font class='datatype'>string</font>&gt;*    //配置文件路径，默认 /config
+ sslPort *&lt;<font class='datatype'>number</font>&gt;*       //https port，默认4000
  
## 方法
### <a id="METHOD_init">init()</a>
<font class="since">开始于:v0.0.1</font>  
修饰符: <font class="modifier">public</font>  
#### 描述
初始化框架  
#### 返回值
void  
