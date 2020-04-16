import React, { useState, useEffect } from "react";
import { Row,Col, Input,Select, Button, DatePicker,message } from "antd";
import marked from "marked";
import hljs from "highlight.js";
import axios from "axios";
import serviceUrl from "../../src/config/apiUrl";
import "../static/css/articleAdd.css"
import { useParams ,useLocation} from "react-router-dom";
import moment from "moment";
const ArticleAdd=()=>{
    let [articleTitle,setArticleTitle]=useState();
    let [articleContent,setArticleContent]=useState();
    let [articleContentHtml,setArticleContentHtml]=useState();
    let [articleType,setArticleType]=useState();
    let [blogTypes,setBlogTypes]=useState();
    let [articleProduction,setArticleProduction]=useState();
    let [articleProductionHTML,setArticleProductionHTML]=useState();
    let [articleDate,setArticleDate]=useState();
    //判断修改还是新增
    let [articleId,setArticleId]=useState();
    
    

    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        highlight: function(code, language) {
        return hljs.highlightAuto(code).value;
        },
        pedantic: false,//容错
        gfm: false,//github上的Markdown
        breaks: true,//是否支持github的换行符
        sanitize: false,//解析HTML
        tables:true,//github上的table
        smartLists: true,//自动渲染列表
        smartypants: false,
    });
  
    //let params=useParams();
    // /admin/add?id="+id : {}
    // /admin/add/"+id ：{id: "2"}
    //console.log("params",params);
    let location=useLocation();
    // /admin/add?id="+id,{pathname: "/admin/add", search: "?id=2", hash: "", state: undefined, key: "1bn594"}
    // /admin/add/"+id {pathname: "/admin/add/2", search: "", hash: "", state: undefined, key: "lvwhev"}
   //console.log("location",location);
   let str=location.search&&location.search.replace("?","");
   
   let arr=str.split("=");
   console.log("str",arr);

   //博客修改回显
   useEffect(()=>{
        axios.post(serviceUrl.getArticleById,{id:arr[1]},{withCredentials:true})
        .then((res)=>{
            console.log(res);
            if(arr){
                setArticleId(arr[1]);
              }
            if(res.data){
                let data=res.data[0];
                setArticleContent(data.article_content);
                setArticleContentHtml(marked(data.article_content));
                //sql语句进行了转换
                setArticleDate(data.add_time);
                setArticleProduction(data.introduce);
                setArticleProductionHTML(marked(data.introduce));
                setArticleTitle(data.title);
                setArticleType(data.type_id);
            }  
        })
       
    },[])

    //博客类型
    useEffect(()=>{
        axios.get(serviceUrl.articleType,{withCredentials:true})
        .then((res)=>{
              setBlogTypes(res.data);
            })
    },[])

    //博客简介改变事件
    const handelArticleContent=(e)=>{
        let v=e.target.value;
        setArticleContent(v);
        setArticleContentHtml(marked(v));
    }
    //博客内容改变事件
    const handelArticleProduction=(e)=>{
        let v=e.target.value;
        setArticleProduction(v);
        setArticleProductionHTML(marked(v));
    }

    //保存博客
    const saveArticle=()=>{
        if(!articleContent){
            message.error("文章内容为空");
           return;
        }
        if(!articleTitle){
            message.error("文章标题为空");
            return;
        }

        if(!articleType){
            message.error("文章类型为空");
            return;
        }
        //日期转换成时间戳
        let date=new Date(articleDate).getTime()/1000;//ms
        let params={
           type_id:articleType,
           title:articleTitle,
           article_content:articleContent,
           add_time:date,
           introduce:articleProduction
        };
        console.log(date);
        let url=serviceUrl.saveArticle;
        console.log("articleId",articleId);
        //修改
        if(articleId){
            params.id=articleId;
            url=serviceUrl.updateArticle;
        }

        axios.post(url,params,{withCredentials:true})
        .then(res=>{              
            // data: {articleId: 10, msg: "success"}
            // status: 200
            // statusText: "OK"
            // headers: {content-length: "32", content-type: "application/json; charset=utf-8"}
            // config: {url: "http://127.0.0.1:7001/saveArticle", method: "post", data: "{"type_id":2,"title":"test03","article_content":"t…3","add_time":1587703391266,"introduce":"test03"}", headers: {…}, transformRequest: Array(1), …}
            // request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: true, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
           if(res.data&&res.data.msg=="success"){
              message.success("博客保存成功");
              setArticleId(res.data.articleId);
           }else{
              message.error("博客保存失败");
           }
        })
    }
    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={19}>
                            <Input placeholder="文章标题" size="large" value={articleTitle} onChange={(e)=>{setArticleTitle(e.target.value)}}/>
                        </Col>
                        <Col span={5}>
                            <Select  placeholder="请选择类型" size="large" value={articleType} onSelect={(v)=>{setArticleType(v)}} style={{width:"100%"}}>
                                {
                                    blogTypes&&blogTypes.map((item)=>{
                                    return <Select.Option key={item.en_name} value={item.Id}>{item.type_name}</Select.Option>
                                    })
                                }
                                
                            </Select>
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10}>
                        <Col span={12}>
                            <Input.TextArea className="markdown-content" value={articleContent} rows={35} placeholder="文章内容" onChange={handelArticleContent}>
                               
                            </Input.TextArea>
                        </Col>
                        <Col span={12}>
                            <div className="show-html" dangerouslySetInnerHTML={{__html:articleContentHtml}}>
                                
                            </div>
                        </Col>
                    </Row>

                    
                </Col>
                <Col span={6}>
                    <Row>
                        <Col>
                            <Button type="" size="large">暂存文章</Button>
                            &nbsp;&nbsp;
                            <Button type="primary" onClick={saveArticle} size="large">发布文章</Button>
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10}>
                        <Col span={24}>
                            <Input.TextArea  rows={4} value= {articleProduction} placeholder="文章简介" onChange={handelArticleProduction}>
                              
                            </Input.TextArea>
                            <br/>
                            <br/>
                            <div className="introduce-html" dangerouslySetInnerHTML={{__html:articleProductionHTML}}>

                            </div>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={24}>
                            <div className="date-select">
                                <DatePicker placeholder="发布日期" size="large" style={{width:"100%"}}   onChange={(date,dateStr)=>{setArticleDate(date)}}>

                                </DatePicker>

                            </div>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default  ArticleAdd;