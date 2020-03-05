import React from "react";
import {Card,Button,notification} from "antd";
import "./ui.less";
export default class Notification extends React.Component{
    state={};
    showNotification=(type,direction)=>{
        if(direction){
            //全局
            notification.config({
                placement:direction
            })
        }
        notification[type]({
            message:"msg",
            description:"description"
        });
    }
    render(){
        return (
            <div >
                <Card>
                    <Button type="primary" onClick={()=>this.showNotification("success")}>success</Button>
                    <Button type="primary" onClick={()=>this.showNotification("info")}>info</Button>
                    <Button type="primary" onClick={()=>this.showNotification("warning")}>warning</Button>
                    <Button type="primary" onClick={()=>this.showNotification("error")}>error</Button>
                </Card>
                <Card>
                    <Button type="primary" onClick={()=>this.showNotification("success","topLeft")}>success</Button>
                    <Button type="primary" onClick={()=>this.showNotification("info","topRight")}>info</Button>
                    <Button type="primary" onClick={()=>this.showNotification("warning","bottomLeft")}>warning</Button>
                    <Button type="primary" onClick={()=>this.showNotification("error","bottomRight")}>error</Button>
                </Card>
            </div>
        )
    }
}