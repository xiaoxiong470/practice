import React,{useState} from 'react'
import Head from 'next/head'
import {Row,Col,Breadcrumb,List,Affix} from "antd";
import ReactMarkdown from "react-markdown";
import MrakNav from "markdown-navbar";
import {CalendarOutlined,FolderOpenOutlined,FireOutlined} from '@ant-design/icons';
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../static/style/pages/detail.css";
import "markdown-navbar/dist/navbar.css";

let markdown='\n' +
  '# p01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
//let dataSource=
const Detail = () => {
  
  
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
                <Breadcrumb.Item>xxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="detailed-title">详情</div> 
            <div className="list-icon center">
              <span><CalendarOutlined />2020-3-17</span>
              <span><FolderOpenOutlined />教程</span>
              <span><FireOutlined />3897</span>
            </div>
            <div className="detailed-content">
              <ReactMarkdown source={markdown} escapeHtml={false}/>  
            </div> 
          </Col>
          <Col className="comm-box" xs={0} sm={0} md={8} lg={8} xl={8}>
            <Author/>
            <Advert/>
            <Affix offsetTop={10}>
              <div className="comm-box">
                <div className="nav-title">文章目录</div>
                <MrakNav source={markdown} ordered={false} headingTopOffset={10}/>
              </div>
            </Affix>
            
            
          </Col>
        </Row>
        <Footer/>   
      </div>
      
    </div>
  )
}

export default Detail
