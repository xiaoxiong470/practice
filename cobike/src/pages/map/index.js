import React from "react";
import {Card,Button,Radio,Table,Modal,Badge,Form,Select,Input,DatePicker} from "antd";
import Axios from "../../axios";
import BaseForm from "../../components/BaseForm";
import moment from "moment";
export default class BikeMap extends React.Component{
    state={show:false};
    params={
        page:1
    }
    componentDidMount() {
        this.request();
    }
    request=()=>{
        Axios.ajax({
            url:"api/map/bike_list",
            baseUrl:"https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/"
        }).then(res=>{
            console.log("bikemap",res);
            this.setState({
                totalCount:res.total_count
            })
            this.request();
        });
    }

    renderMap=(data)=>{
        if(!data){
            return;
        }

        let routeList=data.route_list;
        let  map = new window.BMap.Map("container");
        //添加平移和尺寸插件
        map.addControl(new window.BMap.NavigationControl());
        map.addControl(new window.BMap.ScaleControl());

        let startLng=routeList[0].split(",")[0];
        let startLat=routeList[0].split(",")[1];

        let start=new window.BMap.Point(startLng, startLat);
        let startIcon = new window.BMap.Icon("/assets/start_point.png", new window.BMap.Size(30,30),{
            anchor:new window.BMap.Size(30,30),
            imageSize:new window.BMap.Size(30,30)
        });
        // 初始化地图， 设置中心点坐标和地图级别
        let startMarker = new window.BMap.Marker(start,{icon:startIcon});
        //添加起点
        map.addOverlay(startMarker);

        let endLng=routeList[0].split(",")[0];
        let endLat=routeList[0].split(",")[1];
        let end=new window.BMap.Point(endLng, endLat);
        let endIcon = new window.BMap.Icon("/assets/end_point.png", new window.BMap.Size(30,30),{
            anchor:new window.BMap.Size(30,30),
            imageSize:new window.BMap.Size(30,30)
        });
        // 初始化地图， 设置中心点坐标和地图级别
        let endMarker = new window.BMap.Marker(end,{icon:endIcon});
        //添加终点
        map.addOverlay(endMarker);
        //以终点为中心
        map.centerAndZoom(end, 11);


        let routePositionList=routeList.map(item=>{
            let lng=item.split(",")[0];
            let lat=item.split(",")[1];
            let p=new window.BMap.Point(lng, lat);
            return p;
        });
        //console.log("newPositionList",newPositionList);
        //创建路线
        let polyline = new window.BMap.Polyline(routePositionList, {strokeColor:"red", strokeWeight:2});
        map.addOverlay(polyline);

        //创建服务区
        let seviceList=data.service_list;
        let servicePositionList=seviceList.map(item=>{
            let lng=item.split(",")[0];
            let lat=item.split(",")[1];
            let p=new window.BMap.Point(lng, lat);
            return p;
        });
        //创建多边形
        let polygon = new window.BMap.Polygon(servicePositionList, {strokeColor:"blue", strokeWeight:2});
        //
        map.addOverlay(polyline);

        //定位
        let icon = new window.BMap.Icon("/assets/bike.jpg", new window.BMap.Size(30,30),{
            anchor:new window.BMap.Size(30,30),
            imageSize:new window.BMap.Size(30,30)
        });
        let bikeList=data.bike_list;
        bikeList.map(item=>{
            let lng=item.split(",")[0];
            let lat=item.split(",")[1];
            let p=new window.BMap.Point(lng, lat);
            // 初始化地图， 设置中心点坐标和地图级别
            let marker = new window.BMap.Marker(start,{icon:icon});
            map.addOverlay(marker);
        });


    }
    handleSelect=(values)=>{
        console.log("map select params",values);
        this.request(values);
    }

    render(){
        let formItemList=[
            {
                type:"SELECT",
                label:"城市",
                field:"cityName",
                width:100,
                list:[
                    {
                        value:"",
                        text:"全部"
                    },
                    {
                        value:"1",
                        text:"北京"
                    },
                    {
                        value:"2",
                        text:"上海"
                    },
                    {
                        value:"3",
                        text:"深圳"
                    },
                    {
                        value:"4",
                        text:"广州"
                    }
                ]
            },
            {
                type: "时间"
            },
            {
                type:"SELECT",
                label:"订单状态",
                field:"status",
                width:150,
                list:[
                    {
                        value:"",
                        text:"全部"
                    },
                    {
                        value:"1",
                        text:"进行中"
                    },
                    {
                        value:"2",
                        text:"进行中(临时停车)"
                    },
                    {
                        value:"3",
                        text:"结束"
                    }
                ]
            }
        ];
        return (

            <div >
                <Card >
                    <BaseForm formItemList={formItemList} handleSelect={this.handleSelect}/>
                </Card>
                <div >
                    共有{this.state.totalCount}辆
                </div>

                <div id="container">

                </div>
            </div>
        )
    }
}


