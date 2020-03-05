import JsonP from "jsonp";
import axios from "axios";
import {Modal} from "antd";
import messages from "../pages/ui/messages";
import util from "../utils/utils";
export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:"callback"
            },function(err,response){
                if(response.status=="success"){
                    //console.log("axios",response);
                    resolve(response.results);
                }else{
                    reject(response.error);
                }
            })
        })
    }
    static request(_this,options){
        Axios.ajax(options)
            .then((data)=>{
                //console.log("reslut",JSON.stringify(data));
                let list=data.item_list;
                list.map((item,index)=>(item.key=index));
                _this.setState({
                    dataSource:list,
                    pagination:util.pagination(data,(current)=>{
                        _this.params.page=current;
                        _this.request();
                    })
                })
            })
    }
    static ajax(options){
        let baseUrl="https://www.easy-mock.com/mock/5e1ac80564a3c20d7f366d4d";
        if(options.data&&options.data.isLoading!=false){
            let ajaxLoading=document.getElementById("ajaxLoading");
            ajaxLoading.style.display="block";
        }
        return new Promise((resolve,reject)=>{

            axios.request({
                url:options.url,
                baseURL:options.baseUrl?options.baseUrl:baseUrl,
                method: 'get',
                timeout:10000,
                params:options.data&&options.data.params
            })
                .then(res=>{
                    if(options.data&&options.data.isLoading!=false){
                        let ajaxLoading=document.getElementById("ajaxLoading");
                        ajaxLoading.style.display="none";
                    }

                    if(res.status=="200"){
                         let result=res.data;

                         if(result.code=="0"){
                             resolve(result.result);
                             //console.log("reslut",JSON.stringify(result.result));
                         }else{
                             console.log(result.msg);
                             Modal.info({
                                 title:"提示",
                                 content:result.msg
                             })
                         }
                    }else{
                        reject(res.data);
                    }
                })
        })
    }
}