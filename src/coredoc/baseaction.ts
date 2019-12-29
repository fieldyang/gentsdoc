import { HttpRequest} from "./httprequest";
import { HttpResponse } from "./httpresponse";
/**
 * base action
 */
class BaseAction{
    /**
     * model 获取页面数据
     */
    model:any;
    /**
     * request
     */
    request:HttpRequest; 
    /**
     * response
     */        
    response:HttpResponse;        

    setModel(data:any){
        this.model = data;
    }

    setRequest(req:HttpRequest):void{
        this.request = req;
    }

    setResponse(res:HttpResponse):void{
        this.response = res;
    }
}

export{BaseAction};