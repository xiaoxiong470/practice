import React from "react";
import {Card,Button,Radio} from "antd";
import "./ui.less";
export default class Buttons extends React.Component{
    state={size:"default"};
    render(){
        return (
            <div >
                <Card>
                    <Button type="primary">btn</Button>
                    <Button type="danger">btn</Button>
                    <Button type="dashed">btn</Button>
                    <Button >btn</Button>
                    <Button disabled>btn</Button>
                </Card>

                <Card>
                    <Button  icon="plus">add</Button>
                    <Button icon="edit">edit</Button>
                    <Button icon="delete">delete</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">download</Button>
                    <Button shape="circle" icon="up-circle"></Button>
                </Card>

                <Card>
                    <Button   loading={true}>add</Button>
                    <Button type="primary"  loading={true}>add</Button>
                    <Button shape="circle" loading={true}></Button>
                    <Button shape="circle" loading={true} type="primary"></Button>
                    <Button type="primary">close</Button>
                </Card>
                <Card>
                    <Button.Group>
                        <Button type="primary"  icon="left">left</Button>
                        <Button type="primary" icon="right">right</Button>
                    </Button.Group>
                </Card>
                <Card>
                    <Radio.Group value={this.state.size} onChange={(event)=>{this.setState({size:event.target.value})}}>
                        <Radio value="small">small</Radio>
                        <Radio value="default">default</Radio>
                        <Radio value="large">large</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size} >left</Button>

                </Card>
            </div>
        )
    }
}