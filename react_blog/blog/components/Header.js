import React from "react";
import {Row,Col,Menu,Icon} from "antd";
import {
    SmileOutlined,
    VideoCameraOutlined,
    HomeOutlined
  } from '@ant-design/icons';
import "../static/style/components/header.css";
let {Item}=Menu;
const Header=()=>(
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className="header-logo">jishupang</span>
                <span className="header-txt">专注前端开发，每年100集免费视频</span>
            </Col>
            <Col xs={0} sm={0} md={10} lg={10} xl={10}>
                <Menu mode="horizontal">
                   <Item key="home">
                       <HomeOutlined />
                       首页
                   </Item>
                   <Item key="video">
                       <VideoCameraOutlined />
                       视频
                   </Item>
                   <Item key="life">
                       <SmileOutlined />
                       {/* <Icon type="smile"/> */}
                       生活
                   </Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header;