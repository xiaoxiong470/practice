import React from "react";
import {Card} from "antd";
import ReactEcharts from "echarts-for-react";
export default class BarDemo extends React.Component{
    getOptions=()=>{
        let option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        return option;
    }

    getOptions1=()=>{
        let option = {
            legend: {
                data: ["ofo", "摩拜", "哈啰"]
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'ofo',
                    type: 'bar',
                    data: [100, 200, 300, 434, 500, 600, 700],

                },
                {
                    name: '摩拜',
                    type: 'bar',
                    data: [200, 400, 600, 800, 1000, 1200, 1400]
                },
                {
                    name: '哈啰',
                    type: 'bar',
                    data: [50, 100, 150, 200, 250, 300, 350]
                }
            ]
        };
        return option;
    }


    render(){
        return (
            <div>
                <Card title="基础柱形图">
                    <ReactEcharts option={this.getOptions()}></ReactEcharts>
                </Card>
                <Card title="" >
                    <ReactEcharts option={this.getOptions1()}></ReactEcharts>
                </Card>
            </div>
        );
    }
}