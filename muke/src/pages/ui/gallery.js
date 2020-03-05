import React from "react";
import {Card,Col,Row,Modal} from "antd";
import "./ui.less";
export default class Gallery extends React.Component{
    state={visible:false};
    handleClick=(item)=>{
        this.setState({
            imgUrl:"/gallery/"+item,
            visible:true
        })
    }
    render(){
        let imgs=[
            ["1.jpg","2.jpg","3.jpg","4.jpg"],
            ["5.jpg","6.jpg","7.jpg","8.jpg"]
        ];
        let cards=imgs.map(list=>{
                return list.map(item=>{
                    return <Card  cover={<img  src={"/gallery/"+item} onClick={()=>this.handleClick(item)}/>} style={{marginBottom:10}}>
                        <Card.Meta title="idol" description="idol" ></Card.Meta>
                    </Card>
                })
            })
        return (
            <div >
                <Row gutter={16}>
                    <Col span={12}>
                        {cards[0]}
                    </Col>
                    <Col span={12}>
                        {cards[1]}
                    </Col>
                </Row>
                <Modal   title="idol" visible={this.state.visible} footer={null} onCancel={()=>{this.setState({visible:false})}}>
                    <img style={{height:300}} src={this.state.imgUrl} alt="hello"/>
                </Modal>
            </div>
        )
    }
}