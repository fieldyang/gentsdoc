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
     * 切点名
     */
    name='aaa';

    /**
     * 
     */
    dodata;
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

/**
 * 颜色
 * @enum  测试
 */
enum Color{
    /**
     * 红色
     */
    A='red',
    /**
     * 黑色
     */
    B='black',
    /**
     * 蓝色
     */
    C }