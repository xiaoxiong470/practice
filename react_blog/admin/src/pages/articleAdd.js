import React, { useState, useEffect } from "react";
import { Row,Col, Input,Select, Button, DatePicker } from "antd";
import marked from "marked";
import hljs from "highlight.js";
import axios from "axios";
import serviceUrl from "../../src/config/apiUrl";
import "../static/css/articleAdd.css"
const ArticleAdd=()=>{
    let [articleTitle,setArticleTitle]=useState();
    let [articleContent,setArticleContent]=useState();
    let [articleContentHtml,setArticleContentHtml]=useState();
    let [articleType,setArticleType]=useState([]);
    let [articleProduction,setArticleProduction]=useState();
    let [articleProductionHTML,setArticleProductionHTML]=useState();
    let [articleDate,setArticleDate]=useState();

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
  
   
    useEffect(()=>{
        axios.get(serviceUrl.articleType,{withCredentials:true})
        .then((res)=>{
              setArticleType(res.data);
              console.log(res.data);
            })
    },[])
    const handelArticleContent=(e)=>{
        let v=e.target.value;
        setArticleContent(v);
        setArticleContentHtml(marked(v));
    }

    const handelArticleProduction=(e)=>{
        let v=e.target.value;
        setArticleProduction(v);
        setArticleProductionHTML(marked(v));
    }
    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={19}>
                            <Input placeholder="文章标题" size="large" onChange={(e)=>{setArticleTitle(e.target.value)}}/>
                        </Col>
                        <Col span={5}>
                            <Select  placeholder="请选择类型" size="large" onSelect={(v)=>{setArticleType(v)}}>
                                {
                                    articleType.map((item)=>{
                                    return <Select.Option key={item.en_name} value={item.id}>{item.type_name}</Select.Option>
                                    })
                                }
                                
                            </Select>
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10}>
                        <Col span={12}>
                            <Input.TextArea className="markdown-content" rows={35} placeholder="文章内容" onChange={handelArticleContent}>

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
                            <Button type="primary" size="large">发布文章</Button>
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10}>
                        <Col span={24}>
                            <Input.TextArea  rows={4} placeholder="文章简介" onChange={handelArticleProduction}>

                            </Input.TextArea>
                            <br/>
                            <br/>
                            <div className="introduce-html" dangerouslySetInnerHTML={{__html:articleProductionHTML}}>

                            </div>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker placeholder="发布日期" size="large" onChange={(date,dateStr)=>{setArticleDate(date)}}>

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