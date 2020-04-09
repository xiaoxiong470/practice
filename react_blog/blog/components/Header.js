import React, { useEffect, useState } from "react";
import {Row,Col,Menu,Icon} from "antd";
import {
    SmileOutlined,
    VideoCameraOutlined,
    HomeOutlined
  } from '@ant-design/icons';
import "../static/style/components/header.css";
import serviceUrl from "../config/apiUrl";
import axios from "axios";
import router from "next/router";
import Link from "next/link";

// 遇到一个坑，组件不能使用服务端渲染，页面组件可以
//再次犯错，[type,setType]=useState
let {Item}=Menu;
const Header=()=>{
    //let result;变量获取不到异步数据
    let [type,setType]=useState();
    
    useEffect(()=>{
        const getData=async ()=>{
            let data=await axios.get(serviceUrl.typeinfo);
            setType(data.data);
            return data.data;
        }
        getData();
        //首页切换到具体文章类型，并没有打印，说明hearder复用了
        return ()=>{
            console.log("header end")
        }
    },[]);
    const handleClick=({key})=>{
        if(key==="home"){
            router.push("/index");
        }else{
            router.push("/list/[type]","/list/"+key);
        //     router.push({
        //     pathname:"/list",
        //     query:{type:key}
        // })
        }
        
        // router.push({
        //     "pathname":"/",
        //     query:{}
        // })
    }
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <span className="header-logo">jishupang</span>
                    <span className="header-txt">专注前端开发，每年100集免费视频</span>
                </Col>
                <Col xs={0} sm={0} md={10} lg={10} xl={10}>
                    <Menu mode="horizontal">
                        {
                            type&&type.map(item=>{
                                return (
                                    <Item key={item.en_name} onClick={handleClick}>
                                        <HomeOutlined />
                                        {item.type_name}
                                    </Item>
                                )
                            })
                        }
                        {/* <HomeOutlined />
                        <VideoCameraOutlined />
                        <SmileOutlined /> */}
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header;