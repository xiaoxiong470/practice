import React from "react";
import {Card,Button,Spin,Icon,Alert} from "antd";
import "./ui.less";
export default class Loadings extends React.Component{
    state={size:"default"};
    render(){
        const icon=<Icon type="loading"></Icon>;
        return (
            <div >
                <Card>
                    {/*自定义图标*/}
                    <Spin size="large" indicator={icon} tip="...loading"></Spin>
                </Card>

                <Card>
                    <Spin tip="loading" >
                        {/*在表单等异步操作中加载,spinning={false}停止加载*/}
                        <Alert message="kris" description="kris is my idol" type="info"/>
                    </Spin>

                    <Spin tip="loading" indicator={icon}>
                        <Alert message="kris" description="kris is my idol" type="info"/>
                    </Spin>



                </Card>

            </div>
        )
    }
}