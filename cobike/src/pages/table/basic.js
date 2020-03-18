import React from "react";
import {Card,Button,Radio,Table,Modal} from "antd";
import Axios from "../../axios";
import axios from "axios";
import util from "../../utils/utils";
export default class BasicTable extends React.Component{
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
                time:"6:50"

            },
            {
                id: '2',
                uesrname: '李钟硕',
                sex: "m",
                status:"好",
                hobby:["篮球","足球"],
                birthday:"1990-10-01",
                address: '西湖区湖底公园1号',
                time:"6:50"

            }
        ];
        dataSource.map((item,index)=>(item.key=index));
        this.setState({
            dataSource
        });

        /*Axios.ajax({
            url:"/ReactDemos/getUsers",
            data:{isLoading:true,params:{current:this.params.page}}})
            .then((data)=>{
                data.data.map((item,index)=>(item.key=index));
                console.log("data",data);
                this.setState({
                    dataSource2:data.data,
                    pagination:util.pagination(data,(current)=>{
                        this.params.page=current;
                    })
                })
            })*/
        this.request();
        /*res.then((data)=>{
            this.setState({
                dataSource2:data
            })
        })*/

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

    handleChange=(selectedRowKeys, selectedRows) => {
        this.setState({
            selectedRowKeys,
            selectedRows
        })
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
                title:"早起时间",
                dataIndex:"time"
            },
        ]
        return (

            <div >
                <Card title="基础表格">
                    <Table columns={columns} dataSource={this.state.dataSource} bordered pagination={false}>

                    </Table>
                </Card>

                <Card title="动态表格-mock">
                    <Table columns={columns} dataSource={this.state.dataSource2} bordered pagination={false}>

                    </Table>
                </Card>

                <Card title="表格单选-mock">
                    <Table rowSelection={{type:"radio",selectedRowKeys:this.state.selectedItem}}
                           columns={columns}
                           dataSource={this.state.dataSource}
                           bordered pagination={false}
                           onRow={(record,index)=>{
                               return {
                                   onClick:()=>{this.handleClick(record,index)}
                               }
                           }}>

                    </Table>
                </Card>

                <Card title="表格复选-mock">
                    <Button type="danger" style={{margin:5}} onClick={this.handleDelete}>删除</Button>
                    <Table rowSelection={{type:"checkbox",selectedRowKeys:this.state.selectedRowKeys,onChange:this.handleChange}}
                           columns={columns}
                           dataSource={this.state.dataSource}
                           bordered pagination={false}>

                    </Table>
                </Card>

                <Card title="表格pagination">
                    <Table columns={columns}
                           dataSource={this.state.dataSource}
                           bordered pagination={this.state.pagination}>

                    </Table>
                </Card>
            </div>
        )
    }
}