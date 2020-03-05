import React from "react";
import {Card} from "antd";
import ReactEcharts from "echarts-for-react";
export default class LineDemo extends React.Component{
    getOptions=()=>{

        let option = {
            title: {
                text: 'ofo数量统计',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
        return option;
    }

    getOptions1=()=>{
        let option = {
            title: {
                text: 'ofo数量统计',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        };
        return option;
    }


    render(){
        return (
            <div>
                <Card title="基础折线图">
                    <ReactEcharts option={this.getOptions()}></ReactEcharts>
                </Card>
                <Card title="" >
                    <ReactEcharts option={this.getOptions1()}></ReactEcharts>
                </Card>
            </div>
        );
    }
}