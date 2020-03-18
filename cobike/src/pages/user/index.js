import React from "react";
import {Card,Button,Radio,Table,Modal,Badge,Form,Select,Input,DatePicker} from "antd";
import Axios from "../../axios";
import BaseForm from "../../components/BaseForm";
import moment from "moment";
export default class User extends React.Component{
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
            url:"api/user/list",
            baseUrl:"https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/",
            data:{isLoading:true,params}
        });
    }

    handleSubmit=()=>{
        //console.log("openCityForm",this.openCityForm.props.form);
        this.setState({show:false});
        console.log("userForm",this.userForm.props.form.getFieldsValue());
        let values=this.userForm.props.form.getFieldsValue();
        Axios.ajax({
            url:"api/user/add",
            baseUrl:"https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/",
            data:{params:values}
        }).then(res=>{
            console.log("submit");
            this.userForm.props.form.resetFields();
        })
    }

    handleSelect=(values)=>{
        console.log("order select params",values);
        this.request(values);
    }
    handleOperate=(type)=>{
        let title;
        if(type=="create"){
            title="创建用户";
            this.setState({
                selectedRow:{}
            })
        }else if(type=="edit"){
            if(!this.state.selectedRow){
                Modal.info({title:"信息",content:"至少选择一条数据"});
                return;
            }
            title="编辑用户";
        }else if(type=="detail"){
            title="用户详情";
        }
        this.setState({
            show:true,
            title,
            type
        })
    }
    handleDelete=()=>{
        if(!this.state.selectedRow){
            Modal.info({title:"信息",content:"至少选择一条数据"});
            return;
        }
        let user=this.state.selectedRow;
        Axios.ajax({
            url:"api/user/delete",
            baseUrl:"https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/",
            data:{params:{id:user.id}}
        }).then(res=>{
            console.log(res);
            this.setState({show:false,selectedRow:{}});
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
                dataIndex:"username"
            },
            {
                title:"性别",
                dataIndex:"sex",
                render(item){
                    switch (item) {
                        case 1:
                            return "女";
                        case 2:
                            return "男";
                        default:
                            return "";
                    }
                }
            },
            {
                title:"状态",
                dataIndex:"state",
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
                title:"爱好",
                dataIndex:"interest"
            },
            {
                title:"生日",
                dataIndex:"birthday"
            },
            {
                title:"联系地址",
                dataIndex:"address"
            },
            {
                title:"早起时间",
                dataIndex:"time"
            }
        ];

         let datasource=[
             {
                 id:1,
                 username:"Kris",
                 time:"20:80",
                 address:"北京",
                 birthday:"1990-10-01",
                 interest:"跳舞",
                 state:1,
                 sex:1
             }
         ];
        let formItemList=[
            {
                type:"INPUT",
                label:"用户名",
                field:"username",
                width:150
            }
        ];
        return (

            <div >
                <Card >
                    <BaseForm formItemList={formItemList} handleSelect={this.handleSelect}/>
                </Card>

                <Card style={{marginTop:10}}>
                    <Button type="primary"  onClick={()=>{this.handleOperate("create")}}>创建用户</Button>
                    <Button type="primary"  onClick={()=>{this.handleOperate("edit")}}>编辑用户</Button>
                    <Button  onClick={()=>{this.handleOperate("detail")}}>用户详情</Button>
                    <Button  type="danger" onClick={this.handleDelete}>删除用户</Button>
                </Card>
                <div className="content-wrap">
                    <Table columns={columns}  dataSource={this.state.dataSource} pagination={this.state.pagination} bordered
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
                           }>

                    </Table>
                </div>
                <Modal title={this.state.title} visible={this.state.show}
                       footer={(()=>{if(this.state.type=="detail")return null})()}
                       onCancel={()=>{
                           this.setState({show:false});
                           this.userForm.props.form.resetFields();
                           console.log("this.userForm",this.userForm.props.form.resetFields);
                       }}
                       onOk={this.handleSubmit}>
                    <UserFormWrap wrappedComponentRef={(form)=>{this.userForm=form}} operateType={this.state.type} userInfo={this.state.selectedRow}/>
                </Modal>

            </div>
        )
    }
}



class UserForm extends React.Component{
    render(){
        let userInfo=this.props.userInfo;
        let type=this.props.operateType;
        if(!userInfo){
            userInfo={};
        }
        console.log("userInfo",userInfo.sex);
        const {getFieldDecorator}=this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 21 },
            },
        };
        function getState(s){
            let result="";
            if(s==1){
                result="极好";
            }else if(s==2){
                result="良好";
            }else if(s==3){
                result="一般";
            }else if(s==4){
                result="差";
            }
            return result;
        }
        return (
            <Form {...formItemLayout}>

                <Form.Item label="姓名" >
                    {
                        type=="detail"?userInfo.username:
                        getFieldDecorator('name', {
                            rules: [{ required: true}],
                            initialValue:userInfo.username
                        })(
                           <Input placeholder="请输入姓名"/>
                        )
                    }

                </Form.Item>
                <Form.Item label="性别" >
                    {
                        type=="detail"?userInfo.sex==1?"男":"女":
                        getFieldDecorator('sex', {
                            initialValue:userInfo.sex+""
                        })(
                            <Radio.Group>
                                <Radio value="2"> 男</Radio>
                                <Radio value="1">女</Radio>
                            </Radio.Group>
                        )
                    }
                </Form.Item>
                <Form.Item label="状态" >
                    {


                        type=="detail"?getState(userInfo.state):
                        getFieldDecorator('state', {
                            initialValue:userInfo.state

                        })(
                            <Select>
                                <Select.Option value="1"> 极好</Select.Option>
                                <Select.Option value="2">良好</Select.Option>
                                <Select.Option value="3">一般</Select.Option>
                                <Select.Option value="4">差</Select.Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="生日" >
                    {
                        type=="detail"?userInfo.birthday:
                        getFieldDecorator('birthday',{
                            initialValue:moment(userInfo.birthday)
                        })(
                            <DatePicker format="YYYY-MM-DD"/>
                        )
                    }
                </Form.Item>
                <Form.Item label="联系地址:" >
                    {
                        type=="detail"?userInfo.address:
                        getFieldDecorator('address',{
                            initialValue:userInfo.address
                        })(
                            <Input.TextArea/>
                        )
                    }
                </Form.Item>
            </Form>
        )
    }
}

const UserFormWrap=Form.create()(UserForm);