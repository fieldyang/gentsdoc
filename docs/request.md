# Function request(config)
<font class="since">开始于 : v2.0.0</font>  
## 描述
ajax 请求  
## 参数
+ config *&lt;any&gt;*    object 或 string  
如果为string，则直接以get方式获取资源  
object 项如下:  
url 				请求地址  
method 			    请求类型 GET(默认) POST  
params 				参数，json格式  
async 				异步，默认true  
timeout 			超时时间  
type                json,text 默认text  
withCredentials 	同源策略，跨域时cookie保存，默认false  
header              request header 对象  
user                需要认证的情况需要用户名和密码  
pwd                 密码  
rand                bool随机数，请求动态资源时可能需要
  
## 返回值
<font class='datatype'>Promise&lt;any&gt;</font>  
