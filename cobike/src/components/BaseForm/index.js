import React from "react";
import {Card,Button,Radio,Table,Modal,Badge,Form,Select,DatePicker,message,Input} from "antd";
import moment from "moment";

class BaseForm extends React.Component{
    renderForm=()=>{
        const {formItemList}=this.props;
        const {getFieldDecorator}=this.props.form;
        if(!formItemList){
            return;
        }
        let list=formItemList.map(item=>{
            let formItem;
            let label=item.label;
            let field=item.field;
            let optionList=item.list;
            let width=item.width;
            switch (item.type) {
                case "SELECT":
                    return <Form.Item label={item.label}  >
                        {
                            getFieldDecorator(field)(
                                <Select placeholder="全部" style={{width}}>
                                    {
                                        optionList.map(op=>(<Select.Option value={op.value}>{op.text}</Select.Option>))
                                    }
                                </Select>
                            )
                        }

                    </Form.Item>
                case "时间":
                   return <Form.Item label="时间" >
                        {
                            getFieldDecorator('start_time', {
                                defaultValue:moment.now()
                            })(
                                <DatePicker style={{width:150}} format="YYYY-MM-DD" ></DatePicker>
                            )
                        }
                        &nbsp;~&nbsp;
                        {
                            getFieldDecorator('end_time', {
                                defaultValue:moment.now()
                            })(
                                <DatePicker style={{width:150}} format="YYYY-MM-DD"></DatePicker>
                            )
                        }
                    </Form.Item>
                case "INPUT":
                    return <Form.Item label={item.label}  >
                        {
                            getFieldDecorator(field)(
                                <Input  style={{width}}/>
                            )
                        }

                    </Form.Item>
                default:
                    return <div></div>;

            }
        })
        return list;
    }
    handleClick=()=>{
        const {getFieldsValue}=this.props.form;
        const {handleSelect}=this.props;
        let values= getFieldsValue();
        handleSelect(values);
    }
    render(){
        const {getFieldDecorator}=this.props.form;
        return (
            <Form layout="inline">
                {this.renderForm()}
                <Button type="primary" onClick={this.handleClick}>查询</Button>
                <Button type="primary" onClick={()=>{this.props.form.resetFields()}}>重置</Button>
            </Form>
        )
    }
}

export  default  Form.create()(BaseForm);