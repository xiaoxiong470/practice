import React,{useState} from 'react'
import Head from 'next/head';
import Link from "next/link";
import {Row,Col,Button,List} from "antd";
import {CalendarOutlined,FolderOpenOutlined,FireOutlined} from '@ant-design/icons';
import axios from "axios";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../static/style/pages/index.css";

//let dataSource=
const Home = (list) => {
  //console.log(list);
  let [blogList,setBlogList]=useState(list.data);
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
            <List 
            header={<div>最新日志</div>}
            dataSource={blogList} 
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
                   <div className="list-context">{item.article_content}</div> 
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

Home.getInitialProps=async()=>{
  let promise=new Promise((resolve,reject)=>{
     axios.get("http://127.0.0.1:7001/default/articlelist")
     .then((data)=>{
        //console.log("-----------------------------------------------------------",data);
        let result={data:data.data}
        resolve(result);
     })
  })
  //直接返回数组不可以
  return await promise;
}
export default Home
