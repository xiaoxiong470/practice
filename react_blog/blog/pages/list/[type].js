import React,{useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Row,Col,Breadcrumb,List} from "antd";
import {CalendarOutlined,FolderOpenOutlined,FireOutlined} from '@ant-design/icons';
import Header from "../../components/Header";
import Author from "../../components/Author";
import Advert from "../../components/Advert";
import Footer from "../../components/Footer";
import "../../static/style/pages/list.css";
import serviceUrl from "../../config/apiUrl";
import fetch from "node-fetch";

const BlogList = ({posts}) => {
 
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
            <div className="">
              <Breadcrumb separator="/">
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>列表</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List 
            header={<div>最新日志</div>}
            dataSource={posts} 
            itemLayout="vertical"
            renderItem={(item)=>{
               return (
                <List.Item>
                    <div className="list-title">
                      <Link href={{pathname:"/detail",query:{id:item.Id}}}>
                       <a>{item.title}</a>
                      </Link>
                    </div> 
                    <div className="list-icon">
                      <span><CalendarOutlined />{item.add_time}</span>
                      <span><FolderOpenOutlined />{item.type_name}</span>
                      <span><FireOutlined />{item.view_count}</span>
                    </div>
                   <div className="list-context">{item.introduce}</div> 
                </List.Item>
               );
            }}/>
          </Col>
          <Col className="comm-box" xs={0} sm={0} md={8} lg={8} xl={8}>
            <Author/>
            <Advert/>
          </Col>
        </Row>
        <Footer/>   
      </div>
      
    </div>
  )
}

//服务端渲染动态路由可获得参数，普通路由传递参数不能获得，如router.push("/list?type=life")
export async function getStaticProps({params}) {
  //console.log("context",context);
  // const router=useRouter();
  //console.log("params",params);
  if(!params){

  }
  //console.log("111");
  const res = await fetch(serviceUrl.articlelistbytype+params.type);
  const posts = await res.json();
  return {
    props: {
      posts
    },
  }
}
//服务端渲染动态路由此方法必有
export async function getStaticPaths() {
  //console.log("params",params);undefined
  return {paths:[],fallback: true}
}
export default BlogList
