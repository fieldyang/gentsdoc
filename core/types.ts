/**
 * 基本解析类型
 */
interface BaseObj{
    name:string;                    //名字
    type?:string;                   //对象类型
    annoStr?:string;                //源注释串
    annotation?:object;             //注释对象
    since?:string;                  //开始于
}
/**
 * class 对象
 */
interface ClassObj extends BaseObj{
    clsType?:string;                //类型 class、interface
    extends?:string;                //extends 或 implements
    superClass?:string;             //继承的类或实现的接口
    methods:Array<MethodObj>;       //方法集合
    props:Array<PropObj>;           //属性集合
    constructors:Array<MethodObj>;  //构造器数组
}

/**
 * 属性对象
 */
interface PropObj extends BaseObj{
    private?:boolean;
    static?:boolean;
    need?:boolean;
    type?:string;           //类型
    value?:string;          //值
}

/**
 * 方法对象
 */
interface MethodObj extends BaseObj{
    private?:boolean;
    static?:boolean;
    async?:boolean;
    returns?:string;
    throws?:string;
    need?:boolean;
    params:Array<ParamObj>;
}

/**
 * 参数对象
 */
interface ParamObj{
    name:string;
    type?:string;
    need?:boolean;
    annotation?:string;     //串
}

/**
 * 枚举对象
 */
interface EnumObj extends BaseObj{
    props:Array<PropObj>;
}

export{BaseObj,ClassObj,EnumObj,MethodObj,PropObj,ParamObj}