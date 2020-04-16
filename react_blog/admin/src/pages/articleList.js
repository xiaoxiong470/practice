import { Row, Col,List,Button,Modal, message } from "antd";
import {ExclamationCircleOutlined } from '@ant-design/icons';
import React,{useState,useEffect} from "react";
import Axios from "axios";
import serviceUrl from "../config/apiUrl";
import "../static/css/articleList.css";
import { useHistory } from "react-router-dom";
const {confirm}=Modal;
export default function ArticleList(){
    let [list,setList]=useState();

    let history=useHistory();
    useEffect(()=>{
        let flag=true;
        Axios.get(serviceUrl.getArticleList,{withCredentials:true})
        .then((res)=>{
            if(flag){
                setList(res.data);
            }
            
        });
        //组件销毁后不执行回调
        return ()=>{
            flag=false;
        }
    },[list]);//删除后自动刷新

    
    const handleDelete=(id)=>{
        confirm({
            title: '删除',
            icon: <ExclamationCircleOutlined />,
            content: '确定要删除这篇博客吗?',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                //删除博客
                Axios.post(serviceUrl.deleteArticle,{id},{withCredentials:true})
                .then((res)=>{
                    if(res.data&&res.data.msg=="success"){
                        message.success("删除成功");
                    }
                })
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }

    const handleEdit=(id)=>{
        //添加文章和修改文章共用一个界面，所以admin/add/:id，添加文章访问不到
        //history.push("/admin/add/"+id);
        history.push("/admin/add?id="+id);
        
    }
    
    return (
        <List 
            header={
                <Row>
                    <Col span={8}><b>标题</b></Col>
                    <Col span={4}><b>类别</b></Col>
                    <Col span={4}><b>发布时间</b></Col>
                    <Col span={4}><b>浏览量</b></Col>
                    <Col span={4}><b>操作</b></Col>
                </Row>
            }
            bordered
            dataSource={list}
            renderItem={item => (
            <List.Item >
                <Row className="list-div">
                    <Col span={8}>{item.title}</Col>
                    <Col span={4}>{item.type_name}</Col>
                    <Col span={4}>{item.add_time}</Col>
                    <Col span={4}>{item.view_count}</Col>
                    <Col span={4}>
                        <Button onClick={()=>{handleEdit(item.id)}} type="primary">修改</Button>
                        &nbsp;&nbsp;
                        <Button onClick={()=>{handleDelete(item.id)}}>删除</Button>
                    </Col>
                </Row>
            </List.Item>
            )}
        />
    )
    
}