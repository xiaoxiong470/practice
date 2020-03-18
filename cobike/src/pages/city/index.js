import React from "react";
import {Card,Button,Radio,Table,Modal,Badge,Form,Select} from "antd";
import Axios from "../../axios";
import axios from "axios";
import util from "../../utils/utils";
import BaseForm from "../../components/BaseForm";
export default class City extends React.Component{
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
            url:"api/open_city",
            baseUrl:"https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/",
            data:{isLoading:true,params}
        });
    }
   handleOpenCity=()=>{

   }
   handleSubmit=()=>{
       //console.log("openCityForm",this.openCityForm.props.form);
        this.setState({show:false});
        console.log("openCityForm",this.openCityForm.props.form.getFieldsValue());
   }

    handleSelect=(values)=>{
        console.log("order select params",values);
        this.request(values);
    }
    render(){

        let columns=[
            {
                title:"城市ID",
                dataIndex:"id"
            },
            {
                title:"城市名称",
                dataIndex:"name"
            },
            {
                title:"用车模式",
                dataIndex:"mode",
                render(item){
                    switch (item) {
                        case 1:
                            return "指定停车地点";
                        case 2:
                            return "禁停区模式";
                        default:
                            return "";
                    }
                }
            },
            {
                title:"营运模式",
                dataIndex:"op_mode",
                render(item){
                    switch (item) {
                        case 1:
                            return "自营";
                        case 2:
                            return "加盟";
                        default:
                            return "";
                    }
                }
            },
            {
                title:"授权加盟商",
                dataIndex:"franchisee_name"
            },
            {
                title:"城市管理员",
                dataIndex:"city_admins",
                render:function(data){
                    return data.map(item=>item.user_name).join(",");
                }
            },
            {
                title:"城市开通时间",
                dataIndex:"open_time"
            },
            {
                title:"操作时间",
                dataIndex:"update_time"
            },
            {
                title:"操作人",
                dataIndex:"sys_user_name"
            }
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
                label:"用车模式",
                field:"mode",
                list:[
                    {
                        value:"",
                        text:"全部"
                    },
                    {
                        value:"1",
                        text:"指定停车地点"
                    },
                    {
                        value:"2",
                        text:"禁停区模式"
                    }
                ],
                width:150
            },
            {
                type:"SELECT",
                label:"营运模式",
                field:"op_mode",
                list:[
                    {
                        value:"",
                        text:"全部"
                    },
                    {
                        value:"1",
                        text:"加盟"
                    },
                    {
                        value:"2",
                        text:"自营"
                    }
                ],
                width:80
            }
        ];
        return (

            <div >
                <Card >
                    <BaseForm formItemList={formItemList} handleSelect={this.handleSelect}/>
                </Card>

                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={()=>{this.setState({show:true})}}>开通城市</Button>
                </Card>
                <div className="content-wrap">
                    <Table columns={columns}  dataSource={this.state.dataSource} pagination={this.state.pagination}>

                    </Table>
                </div>
                <Modal title="开通城市" visible={this.state.show}
                       onCancel={()=>{this.setState({show:false})}}
                       onOk={this.handleSubmit}>
                    <OpenCityFormWrap wrappedComponentRef={(form)=>{this.openCityForm=form}}/>
                </Modal>

            </div>
        )
    }
}



class OpenCityForm extends React.Component{
    render(){
        const {getFieldDecorator}=this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 19 },
            },
        };
        return (
            <Form {...formItemLayout}>
                <Form.Item label="开通城市" >
                    {
                        getFieldDecorator('id', {
                            rules: [{ required: true}],
                            initialValue:"1"
                        })(
                            <Select>
                                <Select.Option value="1">北京</Select.Option>
                                <Select.Option value="2">上海</Select.Option>
                                <Select.Option value="3">广州</Select.Option>
                                <Select.Option value="4">深圳</Select.Option>
                            </Select>
                        )
                    }

                </Form.Item>
                <Form.Item label="营运模式" >
                    {
                        getFieldDecorator('op_mode', {
                            initialValue:"1"
                        })(
                            <Radio.Group>
                                <Radio value="1"> 自营</Radio>
                                <Radio value="2">加盟</Radio>
                            </Radio.Group>
                        )
                    }
                </Form.Item>
                <Form.Item label="用车模式" >
                    {
                        getFieldDecorator('mode', {
                            initialValue:"1"
                        })(
                            <Radio.Group>
                                <Radio value="1"> 指定停车地点</Radio>
                                <Radio value="2">禁停区模式</Radio>
                            </Radio.Group>
                        )
                    }
                </Form.Item>

            </Form>
        )
    }
}

const OpenCityFormWrap=Form.create()(OpenCityForm);