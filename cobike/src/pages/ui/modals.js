import React from "react";
import {Card,Button,Modal} from "antd";
import "./ui.less";
export default class Modals extends React.Component{
    state={
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false
    };
    handleClick=(type)=>{
        this.setState({
            [type]:true
        })
    }
    handleClose=(type)=>{
        this.setState({
            [type]:false
        })
    }
    handleModalMethod=(type)=>{
        let i=Modal[type]({
               title:"你喜欢吴亦凡吗",
               content:"你喜欢吴亦凡吗",
               okText:"喜欢",
               cancelText:"不喜欢",
               onOk:function (e) {
                   //console.log(e);
                   i.destroy();
               },
                onCancel:function (e) {
                    //console.log(e);
                    i.destroy();
                }
            })
    }
    render(){
        return (
            <div >
                <Card title="基础模态框">
                    <Button type="primary" onClick={()=>this.handleClick("showModal1")}>基础</Button>
                    <Button type="danger" onClick={()=>this.handleClick("showModal2")}>自定义页脚</Button>
                    <Button type="dashed" onClick={()=>this.handleClick("showModal3")}>顶部20px</Button>
                    {/*暂未实现*/}
                    <Button  onClick={()=>this.handleClick("showModal4")}>水平垂直居中</Button>
                </Card>
                <Modal title="basic modals" visible={this.state.showModal1} onCancel={()=>this.handleClose("showModal1")}>
                    hello,world
                </Modal>
                <Modal title="basic modals" okText="kris" cancelText="lzh" visible={this.state.showModal2} onCancel={()=>this.handleClose("showModal2")}>
                    hello,world
                </Modal>
                <Modal title="basic modals" style={{top:20}} visible={this.state.showModal3} onCancel={()=>this.handleClose("showModal3")}>
                    hello,world
                </Modal>
                <Modal title="basic modals" visible={this.state.showModal4} onCancel={()=>this.handleClose("showModal4")}>
                    hello,world
                </Modal>

                <Card title="信息框">
                    <Button type="primary" onClick={()=>this.handleModalMethod("confirm")}>confirm</Button>
                    <Button type="danger" onClick={()=>this.handleModalMethod("success")}>success</Button>
                    <Button type="dashed" onClick={()=>this.handleModalMethod("info")}>info</Button>
                    <Button  onClick={()=>this.handleModalMethod("warning")}>warning</Button>
                    <Button  onClick={()=>this.handleModalMethod("error")}>error</Button>
                </Card>
            </div>
        )
    }
}