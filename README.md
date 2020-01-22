## gentsdoc
该工具用于把ts文件生成markdown类型的文档，利用输出文件，后续可以通过markdown转html文件，同时可以根据数据结果生成全文档html页面，对vue/react/nodom等框架的路由支持较好。

## 安装
1. 安装gentsdoc，输入 npm install gentsdoc -g。

## 用法
1. 输入gentsdoc -i，进行配置文件初始化，初始化生成genconfig.json文件，用户可修改配置文件。  
2. 输入gentsdoc -g，生成markdown文件。

## genconfig.json文件
配置项说明：
+ language：语言 zh(中文) en(英文)
+ src：源ts文件目录
+ dst:存储markdown文件的目录
+ baseUrl：基础路径，生成文件内部和文件间超链接时需要
+ fileSuffix：路径后缀名，比如".html"，如果最后由markdown文件生成html文件，则可能需要url指向为html文件
+ showPrivate：是否显示私有属性和方法
+ defaultSince：默认版本号，如果有@since，则显示@since值，否则显示defaultSince，如果不设置，则不显示
+ excludeTags：不添加到文档的注释标签，如["excludeone","author","date"]

## 注释标签
注释标签以“@”开始，下表是gentsdoc支持注释标签。  
gentsdoc支持class、interface、class method、class property、function(外置函数)的注释。  

标签名|作用于|描述
-|-|-
@since|all|起始版本号
@param|class method,function|参数
@returns|class method,function|返回值
@throws|class method,function|异常
@exclude|all|整段注释不加入文档

***gentsdoc支持自定义标签，不做特殊处理，只是在文档中增加标题进行显示***

## 注释说明
注释采用“/**”开头，“*/”结束，如:
```js
/**
 * classA是一个测试类
 * @remarks
 * 主要用于测试用，测试方式如下
 */ 
```
注释中支持markdown的样式，如代码、表格、列表等，只需要按照markdown的方式写即可。 
@since
### 类(接口)的注释
类和接口的注释一样，注释第一段显示为描述(Description)，后面可以追加用户想追加的标签，如下例中的@remark,@example，文档中会显示remark和example标题。
```typescript
/**
 * 这一段显示为Description
 * @remark
 * 这一段显示在remark
 * @example
 * 使用方式如下: 这一段会显示为代码
 * ```
 * let r = new ClassA(1,'aaa');
 * r.show();
 * ```
 */
class ClassA{

} 
```
### 方法(函数)的注释
类内部的函数称为方法，类外部的函数称为外置函数。
```typescript
/**
 * 这一部分加入方法描述(Description)
 * 可以加入例子代码
 * @param paramName1 这是参数1
 * @param paramName2 这是参数2
 *                  注释内容支持多行
 * @returns     返回
 * @throws      NoomiError
 */
show(id:number,name:string,desc?:string){
    ...
}
```
### 属性的注释
```typescript
/**
 * 这是一个属性
 */ 
propName:string;
```
## 完整示例
```typescript
/**
 * aop 切点类
 * @examplecode
 * ```typescript
 * new AopPointcut('logpoint',['/*']); 
 * ```
 * @exampletable
 * 支持表格格式显示
 * 
 * 参数名|类型|参数说明
 * -|-|-
 * id|string|切点id
 * expressions|Array<RegExp>|切点拦截表达式
 * @examplelist
 * 支持列表
 * + 列表1
 * + 列表2
 * + 列表3
 *
 * @author     fieldyang    默认不添加到文档，参考excludeTags配置
 * @date       2020-01-20   默认不添加到文档
*/
class AopPointcut{
    /**
     * 切点id
     */
    id:string;

    /**
     * 表达式数组（正则表达式）
     */
    expressions:Array<RegExp> = [];

    /**
     * 通知数组
     */
    advices:Array<IAopAdvice> = [];

    /**
     * 构造器
     * @param id            切点id(唯一) 
     * @param expressions   该切点对应的表达式数组，表达式为正则表达式串
     */
    constructor(id:string,expressions:Array<string>){
        this.id = id;
        if(!expressions){
            throw new NoomiError("2001");
        }

        if(!Array.isArray(expressions)){
            expressions = [expressions];
        }
        
        expressions.forEach((item)=>{
            if(typeof item !== 'string'){
                throw new NoomiError("2001");
            }
            this.expressions.push(Util.toReg(item));
        });
    }

    /**
     * 匹配方法是否满足表达式
     * @param instanceName  实例名
     * @param methodName    待检测方法 
     * @returns             匹配返回true，否则返回false
     */
    match(instanceName:string,methodName:string):boolean{
        for(let i=0;i<this.expressions.length;i++){
            if(this.expressions[i].test(instanceName + '.' + methodName)){
                return true;
            }
        }
        return false;
    }

    /**
     * 给切点添加通知
     * @param advice    通知对象
     */
    addAdvice(advice:IAopAdvice):void{
        this.advices.push(advice);
    }
}
```
## 输出文件说明
src目录下所有ts文件包含的类、接口都会生成独立的markdown文件，所以需要保证类和接口文件名的唯一性。  
为方便后续处理，同时生成data.json文件，data.json文件包含三个部分
1. funcs:外置函数数组
2. classes:类数组
3. interfaces:接口数组

每个数组对象包含:
+ title:类/接口/函数名
+ url:url，该url组成格式为baseUrl+title+fileSuffix。例:genconfig.json中设置baseUrl为'/api/'，fileSuffix为'.html'，类名为ClassA，则url为/api/ClassA.html。

## css支持
gentsdoc支持css，以适应markdown转换成html后的效果需求。以下列表中的css class需要用户自行设置。

css类名|作用于
-|-
since|开始于
modifier|修饰符
datatype|数据类型

## 转换成html
请使用markdown转html工具进行html转换。
## 文档效果
http://www.nodom.cn:3005/webroute/api/closeConnection