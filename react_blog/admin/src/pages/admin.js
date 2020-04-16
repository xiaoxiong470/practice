import { Layout,Menu,Breadcrumb } from 'antd';
import React from 'react';
import {PieChartOutlined,BarsOutlined,FileAddOutlined,MessageOutlined} from "@ant-design/icons";
import "../static/css/adminIdex.css"
import {BrowserRouter as Router,Route, useHistory} from "react-router-dom";
import Login from "./login";
import ArticleAdd from "./articleAdd";
import ArticleList from "./articleList";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Admin=()=>{
    let history=useHistory();
    const handleClick=(e)=>{
      //跳转
      history.push(e.key);
    }
    return (
        <div >
            <Layout style={{ minHeight: '100vh' }}>
                <Sider >
                    <div className="logo" >
                        <Menu
                            defaultSelectedKeys={['1']}
                            theme="dark"
                            mode="inline"
                        >
                            <Menu.Item key="1">
                            <PieChartOutlined />
                                <span>工作台</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <FileAddOutlined />
                                <span>添加文章</span>
                            </Menu.Item>
                            <SubMenu key="6"
                            title={
                                <span>
                                    <BarsOutlined />
                                    <span>文章管理</span>
                                </span>
                            }>
                                <Menu.Item onClick={handleClick} key="/admin/add">
                                    
                                    <span>添加文章</span>
                                </Menu.Item>
                                <Menu.Item onClick={handleClick} key="/admin/list">
                                    
                                    <span>文章列表</span>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="5">
                                <MessageOutlined />
                                <span>留言管理</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sider>
                <Layout >
                    {/* <Header style={{ background: '#fff', padding: 0 }}  >Header</Header> */}
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                            <Breadcrumb.Item href="">工作台</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            
                            <Route path="/admin/add" >
                                <ArticleAdd/>
                            </Route>
                            <Route path="/" >
                                <ArticleList/>
                            </Route>
                        </div>
                    </Content>
                    <Footer style={{textAlign:"center"}}>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default Admin;