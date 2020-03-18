import React from "react";
import {Card,Button,Radio,Form,Input,Icon,message,Checkbox,InputNumber,Select,Switch,DatePicker,TimePicker,Upload} from "antd";
import "./form.less";
import moment from "moment";
const FormItem=Form.Item;

 class RegisterForm extends React.Component{
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
     handleChange = info => {
         if (info.file.status === 'uploading') {
             this.setState({ loading: true });
             return;
         }
         if (info.file.status === 'done') {
             // Get this url from response in real world.
             getBase64(info.file.originFileObj, imageUrl =>
                 this.setState({
                     imageUrl,
                     loading: false,
                 }),
             );
         }
     };


    render(){

        const { getFieldDecorator } = this.props.form;
        let dateFromat='YYYY/MM/DD HH:mm:ss';
        let offsetLayout={
            wrapperCol: {
                span:12,
                offset:3
            }
        }
        let formItemLayout={
            labelCol:{span:3},
            wrapperCol:{span:12}
        }

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <div >
                <Card title="注册表单">
                   <Form >
                       <FormItem label="用户名" {...formItemLayout}>
                           {getFieldDecorator('username', {
                               rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
                           })(<Input placeholder="用户名"/>)}
                       </FormItem>
                       <FormItem label="密码" {...formItemLayout}>
                           {getFieldDecorator('password', {
                               rules: [{ required: true, message: 'Please input your password!' }],
                           })( <Input placeholder="密码" type="password"/>)}
                       </FormItem>
                       <FormItem label="性别" {...formItemLayout}>
                           {getFieldDecorator('remember', {
                               initialValue: "man",
                           })(<Radio.Group >
                               <Radio value="man" >男</Radio>
                               <Radio value="woman">女</Radio>
                               </Radio.Group>)}
                       </FormItem>
                       <FormItem label="年龄" {...formItemLayout}>
                           {getFieldDecorator('age', {
                               initialValue: "1",
                               rules:[{min:10,max:100}]
                           })(<InputNumber>
                           </InputNumber>)}
                       </FormItem>
                       <FormItem label="当前状态" {...formItemLayout}>
                          <Select value="kris">
                              <Select.Option key="1">kris</Select.Option>
                              <Select.Option key="2">lzh</Select.Option>
                          </Select>
                       </FormItem>
                       <FormItem label="爱好" {...formItemLayout}>
                           <Select defaultValue={["1"]} mode="multiple">
                               <Select.Option key="1">kris</Select.Option>
                               <Select.Option key="2">lzh</Select.Option>
                           </Select>
                       </FormItem>
                       <FormItem label="是否已婚" {...formItemLayout}>
                           <Switch checked={true}></Switch>
                       </FormItem>
                       <FormItem label="生日" {...formItemLayout}>
                           <DatePicker showTime={{defaultValue:moment("11:48:34","HH:mm:ss")}} defaultValue={moment("2020-1-29",dateFromat)} format={dateFromat}></DatePicker>
                       </FormItem>
                       <FormItem label="联系地址" {...formItemLayout}>
                           <Input.TextArea autoSize={{minRows:3,maxRows:5}}></Input.TextArea>
                       </FormItem>
                       <FormItem label="早起时间" {...formItemLayout}>
                           <TimePicker defaultValue={moment("11:24:23","HH:mm:ss")}></TimePicker>
                       </FormItem>
                       <FormItem label="头像" {...formItemLayout}>
                           <Upload
                               name="avatar"
                               listType="picture-card"
                               className="avatar-uploader"
                               showUploadList={false}
                               action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                               beforeUpload={beforeUpload}
                               onChange={this.handleChange}
                           >
                               {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                           </Upload>
                       </FormItem>
                       <FormItem {...offsetLayout}>
                           <Checkbox checked={true}>我已阅读过<a href="#">慕课协议</a></Checkbox>
                       </FormItem>
                       <FormItem {...offsetLayout}>
                           <Button type="primary">注册</Button>
                       </FormItem>
                   </Form>
                </Card>

            </div>
        )
    }
}

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
export default Form.create()(RegisterForm);