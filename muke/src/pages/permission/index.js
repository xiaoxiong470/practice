import React from "react";
import {Modal,Form,Input,Select,Card,Button,Table,Tree,Transfer} from "antd";
import Axios from "../../axios";
import menuConfig from "../../config/menuConfig";
export default class Permission extends React.Component{

    constructor(props){
        super(props);
        this.setState({showRoleAuth:true})
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            mockData.push({
                key: i.toString(),
                title: `content${i + 1}`
            });
        }
        const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);
        this.state={mockData,targetKeys:oriTargetKeys};
    }
    componentDidMount() {
        //this.request();
    }
    request=()=>{
        Axios.request(this,{
            url:"api/user/list",
            baseUrl:"https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/",
            data:{isLoading:true}
        });
    }

    openRoleAuth=()=>{
        if(!this.state.selectedRow){
            Modal.info({title:"信息",content:"至少选择一条信息"});
            return;
        }
        this.setState({
            showRoleAuth:true
        })
    }

    saveRoleAuth=()=>{
        //console.log("this.roleAuthForm",this.roleAuthForm,);
        let values=this.roleAuthForm.props.form.getFieldsValue();
        //console.log(values);
        let roleInfo=this.state.selectedRow;
        Axios.ajax({
            url:"api/role/add",
            baseUrl:"https://wwwauthorityInfo.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/",
            data:{params:{...values,id: roleInfo.id}}
        }).then(res=>{
            this.setState({showAuthority:false});
            this.userForm.props.form.resetFields();
        })
    }

    openRole=()=>{
        this.setState({showCreateRole:true})
    }

    createRole=()=>{
        let values=this.roleForm.props.form.getFieldsValue();
        Axios.ajax({
            url:"api/role/add",
            baseUrl:"https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/",
            data:{params:values}
        }).then(res=>{
            this.setState({showCreateRole:false});
            this.userForm.props.form.resetFields();
            //刷新界面
        })
    }
    openAuthority=()=>{
        if(!this.state.selectedRow){
            Modal.info({title:"信息",content:"至少选择一条信息"});
            return;
        }
        this.setState({showAuthority:true})
    }
    saveAuthrotity=()=>{
        let values=this.authorityForm.props.form.getFieldsValue();
        let authorityInfo=this.state.authorityInfo;
        Axios.ajax({
            url:"api/role/add",
            baseUrl:"https://wwwauthorityInfo.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/",
            data:{params:{...values,authorityInfo}}
        }).then(res=>{
            this.setState({showAuthority:false});
            this.userForm.props.form.resetFields();
        })
    }
    setTargetKeys=(targetKeys)=>{
        console.log("setTargetKeys",this.state.targetKeys);
        this.setState({
            targetKeys
        })
    }

    render(){

        let columns=[
            {
                title:"角色id",
                dataIndex:"id"
            },
            {
                title:"角色名称",
                dataIndex:"role_name"
            },
            {
                title:"创建时间",
                dataIndex:"create_time"
            },
            {
                title:"使用状态",
                dataIndex:"status",
                render(v){
                    return v==1?"开启":"关闭";
                }
            },
            {
                title:"授权时间",
                dataIndex:"authorize_time"
            },
            {
                title:"授权人",
                dataIndex:"authorize_user"
            }

        ];
        let datasource=[
            {
                id:1,
                role_name:"admin",
                create_time:"2020-01-01 9:00:00",
                authorize_time:"1年",
                authorize_user:"kris",
                status:1,
                authorityInfo: ["/admin/ui", "/admin/ui/buttons", "/admin/ui/modals", "/admin/ui/loadings", "/admin/ui/notification", "/admin/ui/messages", "/admin/ui/tab", "/admin/ui/gallery", "/admin/ui/carousels"]
            }
        ];

        return (
            <div>
                <Card>
                    <Button type="primary" onClick={this.openRole}> 创建角色</Button>
                    <Button type="primary" onClick={this.openAuthority}>权限控制</Button>
                    <Button type="primary" onClick={this.openRoleAuth}>用户授权</Button>
                </Card>
                <div className="content-wrap">
                    <Table columns={columns}  dataSource={datasource} pagination={this.state.pagination} bordered
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
                    <Modal title="创建角色" visible={this.state.showCreateRole}
                           onCancel={()=>{
                               this.setState({showCreateRole:false});
                               this.userForm.props.form.resetFields();
                           }}
                           onOk={this.createRole}>
                        <UserFormWrap wrappedComponentRef={(form)=>{this.roleForm=form}}  />
                    </Modal>
                    <Modal title="权限控制" visible={this.state.showAuthority}
                           onCancel={()=>{
                               this.setState({showAuthority:false});
                               this.authorityForm.props.form.resetFields();
                           }}
                           onOk={this.saveAuthrotity}>
                        <AuthorityFormWrap wrappedComponentRef={(form)=>{this.authorityForm=form}}
                                           getAuthority={(authorityInfo)=>{ console.log(authorityInfo);this.setState({authorityInfo})}}
                                           authorityInfo={this.state.authorityInfo}
                                           roleInfo={this.state.selectedRow} />
                    </Modal>
                    <Modal title="用户授权"
                           visible={this.state.showRoleAuth}
                           onOk={this.saveRoleAuth}
                           onCancel={()=>{this.setState({showRoleAuth:false})}}>
                        <RoleAuthFormWrap roleInfo={this.state.selectedRow}
                                          mockData={this.state.mockData}
                                          targetKeys={this.state.targetKeys}
                                          // setTargetKeys={this.setTargetKeys}
                                          wrappedComponentRef={(form)=>{this.roleAuthForm=form}}

                        />
                    </Modal>
                </div>
            </div>
        )
    }
}

class RoleAuthForm extends React.Component{

    constructor(props){
        super(props);
        const {targetKeys,mockData}=this.props;
        this.state={
            mockData:mockData,
            targetKeys,
            selectedKeys:targetKeys
        };
    }
    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });
        //const {setTargetKeys}=this.props;
        //setTargetKeys(nextTargetKeys);
        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    };

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    };

    render(){
        const {getFieldDecorator}=this.props.form;
        const {roleInfo,mockData,targetKeys}=this.props;
        console.log("roleauth",targetKeys);
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

        return (
            <Form {...formItemLayout}>
                <Form.Item label="角色名称" >
                    <Input  disabled value={roleInfo.role_name}/>
                </Form.Item>
                <Form.Item label="状态" >
                    {
                        getFieldDecorator('status', {
                            initialValue:roleInfo.status+""
                        })(
                            <Select>
                                <Select.Option value="1"> 开启</Select.Option>
                                <Select.Option value="2">关闭</Select.Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="用户" >
                    {
                        getFieldDecorator('auth')(
                               <Transfer   dataSource={this.state.mockData}
                                titles={['Source', 'Target']}
                                targetKeys={this.state.targetKeys}
                                selectedKeys={this.state.selectedKeys}
                                onChange={this.handleChange}
                                onSelectChange={this.handleSelectChange}
                                render={item => item.title}
                                ></Transfer>
                        )
                    }
                </Form.Item>
            </Form>
        )
    }
}

const RoleAuthFormWrap=Form.create()(RoleAuthForm);

class RoleForm extends React.Component{
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
                <Form.Item label="角色名称" >
                    {
                        getFieldDecorator('role_name', {
                            rules: [{ required: true}]
                        })(
                            <Input placeholder="请输入姓名"/>
                        )
                    }
                </Form.Item>
                <Form.Item label="状态" >
                    {
                        getFieldDecorator('status', {
                            initialValue:"1"
                        })(
                            <Select>
                                <Select.Option value="1"> 开启</Select.Option>
                                <Select.Option value="2">关闭</Select.Option>
                            </Select>
                        )
                    }
                </Form.Item>
            </Form>
        )
    }
}

const UserFormWrap=Form.create()(RoleForm);


class AuthorityForm extends React.Component{
    renderMenu=(data)=>{
        return data.map(item=>{
            if(item.children){
                return (<Tree.TreeNode key={item.key} title={item.title}>
                    {this.renderMenu(item.children)}
                </Tree.TreeNode>);
            }else{
                return (<Tree.TreeNode key={item.key} title={item.title}/>);
            }
        })
    }
    render(){
        const {getFieldDecorator}=this.props.form;
        const {roleInfo,getAuthority,authorityInfo=[]}=this.props;
        console.log("authorityInfo",authorityInfo);
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

        return (
            <Form {...formItemLayout}>
                <Form.Item label="角色名称" >
                      <Input  disabled value={roleInfo.role_name}/>
                </Form.Item>
                <Form.Item label="状态" >
                    {
                        getFieldDecorator('status', {
                            initialValue:roleInfo.status+""
                        })(
                            <Select>
                                <Select.Option value="1"> 开启</Select.Option>
                                <Select.Option value="2">关闭</Select.Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Tree checkable={true} checkedKeys={[...roleInfo.authorityInfo,...authorityInfo]} onCheck={(checkedKeys)=>{getAuthority(checkedKeys);}}>
                    <Tree.TreeNode title="权限控制" >
                        {this.renderMenu(menuConfig)}
                    </Tree.TreeNode>
                </Tree>
            </Form>
        )
    }
}

const AuthorityFormWrap=Form.create()(AuthorityForm);



