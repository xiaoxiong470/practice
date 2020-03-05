import React from "react";
import {Card,Button,Radio,Table,Modal,Badge,Form,Select,DatePicker,message} from "antd";
import moment from "moment";
import Axios from "../../axios";
import axios from "axios";
import util from "../../utils/utils";
import BaseForm from "../../components/BaseForm";

export default class Order extends React.Component{
    state={show:false};
    params={
        page:1
    }
    componentDidMount() {
        this.request();
    }

    request=(params={})=>{
        params.current=this.params.page;
        Axios.request(this,{
            url:"/order/list",
            baseUrl:"https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api",
            data:{isLoading:true,params}});
    }
   handleSubmit=()=>{
       //console.log("openCityForm",this.openCityForm.props.form);
        console.log("openCityForm",this.openCityForm.props.form.getFieldsValue());
   }
    handleEndOrder=()=>{
        let order=this.state.selectedRow;
        console.log("order",order);
        Modal.confirm({
            title:"结束订单",
            content:"确认结束订单吗？",
            onOk(){
                message.success(order.user_name);
            },
            onCancel(){

            }

        })
    }
    handleOrderDetail=()=>{
        let order=this.state.selectedRow;
        if(!order){
            message.info("请选择一条订单");
            return;
        }
        window.open("http://localhost:3000/common/order/detail/"+order.order_sn,"_blank");
    }

    handleSelect=(values)=>{
      console.log("order select params",values);
      this.request(values);
    }
    render(){

        let columns=[
            {
                title:"订单编号",
                dataIndex:"order_sn"
            },
            {
                title:"车辆编号",
                dataIndex:"bike_sn"
            },
            {
                title:"用户名",
                dataIndex:"user_name"
            },
            {
                title:"手机号",
                dataIndex:"mobile"
            },
            {
                title:"里程",
                dataIndex:"distance"
            },
            {
                title:"行驶时长",
                dataIndex:"total_time",
                render:function(data){
                    return data;
                }
            },
            {
                title:"状态",
                dataIndex:"status"
            },
            {
                title:"开始时间",
                dataIndex:"start_time"
            },
            {
                title:"结束时间",
                dataIndex:"end_time"
            },
            {
                title:"订单金额",
                dataIndex:"total_fee"
            },
            {
                title:"实付金额",
                dataIndex:"user_pay"
            },
        ];
        let formItemList=[
            {
                type:"SELECT",
                label:"城市",
                field:"id",
                list:[
                    {
                        value:"",
                        text:"全部"
                    },
                    {
                        value:"1",
                        text:"北京"
                    },
                    {
                        value:"2",
                        text:"上海"
                    },
                    {
                        value:"3",
                        text:"深圳"
                    },
                    {
                        value:"4",
                        text:"广州"
                    },
                ],
                width:80
            },
            {
                type:"SELECT",
                label:"状态",
                field:"status",
                list:[
                    {
                        value:"",
                        text:"全部"
                    },
                    {
                        value:"2",
                        text:"进行中(临时停车)"
                    },
                    {
                        value:"3",
                        text:"进行中"
                    },
                    {
                        value:"4",
                        text:"结束"
                    },
                ],
                width:150
            },
            {
                type:"时间"
            }
        ];

        return (

            <div >
                <Card >
                   <BaseForm formItemList={formItemList} handleSelect={this.handleSelect}/>
                </Card>

                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.handleOrderDetail}>订单详情</Button>
                    <Button type="primary" onClick={this.handleEndOrder}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table columns={columns}
                           rowSelection={{type:"radio",selectedRowKeys:this.state.selectedRowKeys}}
                           onRow={
                               (item)=>{
                                   return {
                                       onClick:()=>{
                                           this.setState({
                                               selectedRowKeys:[item.key],
                                               selectedRow:item
                                           })
                                       }
                                   }

                               }
                           }
                           bordered={true}
                           dataSource={this.state.dataSource}
                           pagination={this.state.pagination}>

                    </Table>
                </div>
            </div>
        )
    }
}

/*
* datasource=[
        {
            key:1,
            order_sn:"1",
            bike_sn:"1",
            user_name:"kris",
            mobile:"15931185617",
            distance:"100",
            total_time:"10",
            status:"1",
            start_time:"20201001",
            end_time:"20201001",
            total_fee:"3",
            user_pay:"2"
        },
        {
            key:2,
            order_sn:"2",
            bike_sn:"2",
            user_name:"lzh",
            mobile:"15931185617",
            distance:"100",
            total_time:"10",
            status:"2",
            start_time:"20201002",
            end_time:"20201002",
            total_fee:"3",
            user_pay:"2"
        }
    ];*/