import React,{useState} from 'react'
import Head from 'next/head'
import {Row,Col,Breadcrumb,List,Affix,Anchor} from "antd";
import {CalendarOutlined,FolderOpenOutlined,FireOutlined} from '@ant-design/icons';
import marked from "marked";
import hljs from "highlight.js";
import Header from "../../components/Header";
import Author from "../../components/Author";
import Advert from "../../components/Advert";
import Footer from "../../components/Footer";

import "../../static/style/pages/detail.css";
import "markdown-navbar/dist/navbar.css";
import "highlight.js/styles/monokai-sublime.css";
import Tocify from '../../components/tocity.tsx';
import serviceUrl from "../../config/apiUrl";
import fetch from "node-fetch"

const Detail = ({posts}) => {
  //console.log("posts",posts);

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


  
  // console.log(posts[0]);
  let html=marked(posts&&posts[0]&&posts[0].article_content);
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
                <Breadcrumb.Item>{posts.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="detailed-title">{posts.title}</div> 
            <div className="list-icon center">
              <span><CalendarOutlined />{posts.add_time}</span>
              <span><FolderOpenOutlined />{posts.type_name}</span>
              <span><FireOutlined />{posts.view_count}</span>
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

//服务端渲染动态路由可获得参数，普通路由传递参数不能获得，如router.push("/list?type=life")
export async function getStaticProps({params}) {
  //console.log("1111111111111111111",params);
  let url=serviceUrl.articledetail+params.id;
  //console.log("url",url);
  const res = await fetch(serviceUrl.articledetail+params.id);
  
  const posts = await res.json();
  //console.log("posts",posts);
  return {
    props: {
      posts
    },
  }
}
//服务端渲染动态路由此方法必有
export async function getStaticPaths() {
  return {paths:[],fallback: true}
}
export default Detail
