# Function request(config)
<font class="since">开始于 : v2.0.0</font>  
## 描述
ajax 请求  
## 参数
+ config *&lt;any&gt;*    object 或 string  
如果为string，则直接以get方式获取资源  
object 项如下:  
参数名|类型|默认值|必填|可选值|描述  
-|-|-|-|-|-  
url|string|无|是|无|请求url  
method|string|GET|否|GET,POST,HEAD|请求类型  
params|object/FormData|{}|否|无|参数，json格式  
async|bool|false|否|true,false|是否异步  
timeout|number|0|否|无|请求超时时间  
type|string|text|否|json,text|  
withCredentials|bool|false|否|true,false|同源策略，跨域时cookie保存  
header|object|无|否|无|request header 对象  
user|string|无|否|无|需要认证的请求对应的用户名  
pwd|string|无|否|无|需要认证的请求对应的密码  
rand|bool|无|否|无|请求随机数，设置则浏览器缓存失效
  
## 返回值
<font class='datatype'>Promise&lt;any&gt;</font>  
