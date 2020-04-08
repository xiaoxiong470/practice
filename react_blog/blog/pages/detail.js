import React,{useState} from 'react'
import Head from 'next/head'
import {Row,Col,Breadcrumb,List,Affix,Anchor} from "antd";
import axios from "axios";
import {CalendarOutlined,FolderOpenOutlined,FireOutlined} from '@ant-design/icons';
import marked from "marked";
import hljs from "highlight.js";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../static/style/pages/detail.css";
import "markdown-navbar/dist/navbar.css";
import "highlight.js/styles/monokai-sublime.css";
import Tocify from '../components/tocity.tsx';
import serviceUrl from "../config/apiUrl";

const Detail = (blog) => {
  
  const renderer = new marked.Renderer();
  let tocify=new Tocify();
  renderer.heading = function(text, level) {
    const anchor = tocify.add(text, level);
    let html=`<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    return html;
  };
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


  
 // console.log
  let html=marked(blog.article_content);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="comm-main">
        <Row justify="center">
          <Col className="comm-left" xs={24} sm={24} md={14} lg={14} xl={14}>
            <div className="bread-div">
              <Breadcrumb separator="/">
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/list">列表</a></Breadcrumb.Item>
                <Breadcrumb.Item>{blog.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="detailed-title">{blog.title}</div> 
            <div className="list-icon center">
              <span><CalendarOutlined />{blog.add_time}</span>
              <span><FolderOpenOutlined />{blog.type_name}</span>
              <span><FireOutlined />{blog.view_count}</span>
            </div>
            
            <div className="detailed-content" dangerouslySetInnerHTML={{__html:html}}>
              {/* <ReactMarkdown source={blog.article_content} escapeHtml={false}/>   */}
              {/* {html} */}
            </div> 
          </Col>
          <Col className="comm-box" xs={0} sm={0} md={8} lg={8} xl={8}>
            <Author/>
            <Advert/>
            <Affix offsetTop={10}>
              <div className="comm-box">
                <div className="nav-title">文章目录</div>
                {/* <MrakNav source={blog.article_content} ordered={false} headingTopOffset={10}/> */}
                {tocify&&tocify.render()}
              </div>
            </Affix>
            
            
          </Col>
        </Row>
        <Footer/>   
      </div>
      
    </div>
  )
}

Detail.getInitialProps=async(context)=>{
  //console.log(context);
  let promise=new Promise((resolve,reject)=>{
    axios.get(serviceUrl.articledetail+context.query.id)
    .then((data)=>{
       //console.log("-----------------------------------------------------------",data);
       let result=data.data[0];
       resolve(result);
    })
 })
 return await promise;
}
export default Detail
