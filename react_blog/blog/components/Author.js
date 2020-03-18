import React from "react";
import {Avatar,Divider} from "antd";
import "../static/style/components/author.css";
import {
    QqOutlined,
    WechatOutlined,
    GithubOutlined
  } from '@ant-design/icons';
const Author=()=>(
    <div className="author-div comm-box">
        <Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <div>专注于WEB和移动前端开发</div>
        <div className="author-introduction">
            光头程序员，专注于WEB和移动前端开发。
            <Divider>社交帐号</Divider>
            <Avatar size={28} icon={<QqOutlined />} className="account"/>
            <Avatar size={28} icon={<WechatOutlined />} className="account"/>
            <Avatar size={28} icon={<GithubOutlined />} className="account"/>
        </div>
        
    </div>
)

export default Author;