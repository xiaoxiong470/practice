import React from "react";
import {Card,Button,Radio,Table,Modal,Badge} from "antd";
import Axios from "../../axios";
import axios from "axios";
import util from "../../utils/utils";
export default class HighTable extends React.Component{
    state={};
    params={
        page:1
    }
    componentDidMount() {
        const dataSource = [
            {
                id: '1',
                uesrname: 'kris',
                sex: "m",
                status:"好",
                hobby:["篮球","足球"],
                birthday:"1990-10-01",
                address: '西湖区湖底公园1号',
                age:"30"

            },
            {
                id: '2',
                uesrname: '李钟硕',
                sex: "m",
                status:"好",
                hobby:["篮球","足球"],
                birthday:"1990-10-01",
                address: '西湖区湖底公园1号',
                age:"29"

            },
            {
                id: '1',
                uesrname: '李洙赫',
                sex: "m",
                status:"好",
                hobby:["篮球","足球"],
                birthday:"1990-10-01",
                address: '西湖区湖底公园1号',
                age:"31"

            },
            {
                id: '2',
                uesrname: '李钟硕',
                sex: "m",
                status:"好",
                hobby:["篮球","足球"],
                birthday:"1990-10-01",
                address: '西湖区湖底公园1号',
                age:"29"

            },{
                id: '1',
                uesrname: 'kris',
                sex: "m",
                status:"好",
                hobby:["篮球","足球"],
                birthday:"1990-10-01",
                address: '西湖区湖底公园1号',
                age:"29"

            },
            {
                id: '2',
                uesrname: '李钟硕',
                sex: "w",
                status:"好",
                hobby:["篮球","足球"],
                birthday:"1990-10-01",
                address: '西湖区湖底公园1号',
                age:"29"

            }
        ];
        dataSource.map((item,index)=>(item.key=index));
        this.setState({
            dataSource
        });
        this.request();
    }
    request=()=>{
        let _this=this;
        Axios.ajax({
            url:"/ReactDemos/getUsers",
            data:{isLoading:true,params:{current:this.params.page}}})
            .then((data)=>{
                data.data.map((item,index)=>(item.key=index));
                console.log("data",data);
                _this.setState({
                    dataSource2:data.data,
                    pagination:util.pagination(data,(current)=>{
                        _this.params.page=current;
                        _this.request();
                    })
                })
            })
    }

    handleClick=(record, rowIndex)=>{
        this.setState({
            selectedItem:[rowIndex]
        });
        Modal.info({
            content:record.uesrname+":"+record.hobby
        })
    }

    handleChange=(pagination, filters, sorter, extra) => {
       console.log("sorter",sorter);
    }

    handleDelete=() => {
        this.setState({
            selectedRowKeys:[],
            selectedRows:[]
        })

    }

    render(){

        let columns=[
            {
                title:"id",
                dataIndex:"id"
            },
            {
                title:"用户名",
                dataIndex:"uesrname"
            },
            {
                title:"性别",
                dataIndex:"sex",
                render(sex){
                    if(sex=="m"){
                        return "男";
                    }else{
                        return "女";
                    }
                }
            },
            {
                title:"状态",
                dataIndex:"status"
            },
            {
                title:"爱好",
                dataIndex:"hobby"
            },
            {
                title:"生日",
                dataIndex:"birthday"
            },
            {
                title:"地址",
                dataIndex:"address"
            },
            {
                title:"年龄",
                dataIndex:"age",
                sorter:(a,b)=>{
                    return a.age-b.age;
                },
                order:"ascend"
            },
        ];
        let columns1=[
            {
                title:"id",
                dataIndex:"id",
                fixed:"left",
                width:100
            },
            {
                title:"用户名",
                dataIndex:"uesrname",
                width:100
            },
            {
                title:"性别",
                dataIndex:"sex",
                width:100,
                render(sex){
                    if(sex=="m"){
                        return <Badge status="success" text="男"></Badge>;
                    }else{
                        return <Badge status="error" text="女"></Badge>;
                    }
                }
            },
            {
                title:"状态",
                width:100,
                dataIndex:"status"
            },
            {
                title:"状态",
                width:100,
                dataIndex:"status"
            },
            {
                title:"状态",
                width:100,
                dataIndex:"status"
            },
            {
                title:"状态",
                width:100,
                dataIndex:"status"
            },
            {
                title:"状态",
                width:100,
                dataIndex:"status"
            },
            {
                title:"状态",
                width:100,
                dataIndex:"status"
            },
            {
                title:"爱好",
                width:100,
                dataIndex:"hobby"
            },
            {
                title:"生日",
                width:100,
                dataIndex:"birthday"
            },
            {
                title:"地址",
                width:100,
                dataIndex:"address"
            },
            {
                title:"早起时间",
                width:100,
                dataIndex:"time"
            },
        ]
        return (

            <div >
                <Card title="固定表头">
                    <Table columns={columns} dataSource={this.state.dataSource} bordered pagination={false} scroll={{y:300}}>

                    </Table>
                </Card>

                <Card title="固定左列">
                    <Table columns={columns1} dataSource={this.state.dataSource} bordered pagination={false} scroll={{x:900}}>

                    </Table>
                </Card>

                <Card title="表格单选">
                    <Table columns={columns}
                           dataSource={this.state.dataSource}
                           bordered pagination={false}
                           onChange={this.handleChange}
                           >

                    </Table>
                </Card>

            </div>
        )
    }
}