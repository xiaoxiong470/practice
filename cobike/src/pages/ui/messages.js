import React from "react";
import {Card,Button,message} from "antd";
import "./ui.less";
export default class Messages extends React.Component{
    state={};
    showMessage=(type)=>{
        message[type]("kris");
    }
    render(){
        return (
            <div >
                <Card>
                    <Button type="primary" onClick={()=>this.showMessage("success")}>success</Button>
                    <Button type="primary" onClick={()=>this.showMessage("info")}>info</Button>
                    <Button type="primary" onClick={()=>this.showMessage("warning")}>warning</Button>
                    <Button type="primary" onClick={()=>this.showMessage("error")}>error</Button>
                    <Button type="primary" onClick={()=>this.showMessage("loading")}>loading</Button>
                </Card>
            </div>
        )
    }
}