import React from "react";
import {Card,Button,Radio,Form,Input,Icon,message,Checkbox} from "antd";
const FormItem=Form.Item;
 class LoginForm extends React.Component{
    state={size:"default"};
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.info("ss");
                console.log(values);
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div >
                <Card title="内联表单">
                   <Form layout="inline">
                       <FormItem>
                           <Input placeholder="用户名"/>
                       </FormItem>
                       <FormItem>
                           <Input placeholder="密码"/>
                       </FormItem>
                       <FormItem>
                           <Button>登录</Button>
                       </FormItem>
                   </Form>
                </Card>
                <Card title="内联表单">
                    <Form style={{width:300}} onSubmit={this.handleSubmit} style={{maxWidth:300}}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your password!' }
                                    ,{ min: 6, message: '至少6位!' },{ max: 8, message: '至多8位!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="password"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                <a className="login-form-forgot" href="" style={{float:"right"}}>
                                    Forgot password
                                </a>
                                <Button htmlType="submit" type="primary" style={{width:"100%"}}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(LoginForm);