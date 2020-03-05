import React from "react";
import {Card,Button,Radio,Table,Modal,Badge,Form,Select,DatePicker,message} from "antd";
import moment from "moment";
import Axios from "../../axios";
import axios from "axios";
import "./detail.less";

export default class OrderDetail extends React.Component{
    state={order:{}};

    componentDidMount() {
        let orderId=this.props.match.params.orderId;
        this.request(orderId);

    }

    request=(orderId)=>{
        Axios.ajax({
            url:"/order/detail",
            baseUrl:"https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api",
            data:{isLoading:true,params:{orderId}}})
            .then((data)=>{
                console.log("reslut",JSON.stringify(data));
                this.setState({
                    order:data
                })
                this.renderMap(data);
               /* let list=data.item_list;
                list.map((item,index)=>(item.key=index));
                console.log("data",list);
                this.setState({
                    dataSource:list
                })*/
            })
    }
    renderMap=(data)=>{
        let  map = new window.BMap.Map("orderDetailMap");
        this.map=map;
        map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 11);
        this.addControl();
        this.drawBikeRoute(data.position_list);
        this.drawServiceArea(data.area);
    }
    addControl=()=>{
        let map=this.map;
        map.addControl(new window.BMap.NavigationControl());
        map.addControl(new window.BMap.ScaleControl());
    }
    drawBikeRoute=(positionList)=>{
        let map = this.map;
        let startPosition=positionList[0];
        let endPosition=positionList[positionList.length-1];
        let start=new window.BMap.Point(startPosition.lon, startPosition.lat);
        let startIcon = new window.BMap.Icon("/assets/start_point.png", new window.BMap.Size(30,30),{
                anchor:new window.BMap.Size(30,30),
                imageSize:new window.BMap.Size(30,30)
        });
        // 初始化地图， 设置中心点坐标和地图级别
        let startMarker = new window.BMap.Marker(start,{icon:startIcon});
        map.addOverlay(startMarker);

        let end=new window.BMap.Point(endPosition.lon, endPosition.lat);
        let endIcon = new window.BMap.Icon("/assets/end_point.png", new window.BMap.Size(30,30),{
            anchor:new window.BMap.Size(30,30),
            imageSize:new window.BMap.Size(30,30)
        });
        // 初始化地图， 设置中心点坐标和地图级别
        let endMarker = new window.BMap.Marker(end,{icon:endIcon});
        map.addOverlay(endMarker);
        let newPositionList=positionList.map(item=>{
            let p=new window.BMap.Point(item.lon, item.lat);
            return p;
        });
        console.log("newPositionList",newPositionList);
        //创建折现
        let polyline = new window.BMap.Polyline(newPositionList, {strokeColor:"red", strokeWeight:2});
        map.addOverlay(polyline);
    }

    drawServiceArea=(areaList)=>{
        let map = this.map;
        let newPositionList=areaList.map(item=>{
            let p=new window.BMap.Point(item.lon, item.lat);
            return p;
        });
        //创建折现
        let polyline = new window.BMap.Polygon(newPositionList, {strokeColor:"blue", strokeWeight:2});
        map.addOverlay(polyline);
    }
    render(){


        let columns=[
            {
                title:"订单编号",
                dataIndex:"order_sn"
            },
            {
                title:"车辆编号",
                dataIndex:"bike_sn"
            },
            {
                title:"用户名",
                dataIndex:"user_name"
            },
            {
                title:"手机号",
                dataIndex:"mobile"
            },
            {
                title:"里程",
                dataIndex:"distance"
            },
            {
                title:"行驶时长",
                dataIndex:"total_time",
                render:function(data){
                    return data;
                }
            },
            {
                title:"状态",
                dataIndex:"status"
            },
            {
                title:"开始时间",
                dataIndex:"start_time"
            },
            {
                title:"结束时间",
                dataIndex:"end_time"
            },
            {
                title:"订单金额",
                dataIndex:"total_fee"
            },
            {
                title:"实付金额",
                dataIndex:"user_pay"
            },
        ];

        let order=this.state.order;

        return (

                <Card style={{marginTop:10}}>
                    <div id="orderDetailMap" className="order-map"></div>
                    <div className="detail-items">
                        <div className="item-title">基础信息</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">用车模式</div>
                                <div className="detail-form-content">{order.mode=="1"?"指定区":"禁停区"}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">订单编号</div>
                                <div className="detail-form-content">{order.order_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">车辆编号</div>
                                <div className="detail-form-content">{order.bike_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">用户姓名</div>
                                <div className="detail-form-content">{order.user_name}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">手机号码</div>
                                <div className="detail-form-content">{order.mobile}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="detail-items">
                        <div className="item-title">行程轨迹</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">行程起点</div>
                                <div className="detail-form-content">{order.start_location}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">行程终点</div>
                                <div className="detail-form-content">{order.end_location}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">行程里程</div>
                                <div className="detail-form-content">{order.distance}公里</div>
                            </li>
                        </ul>
                    </div>
                </Card>
        )
    }
}
