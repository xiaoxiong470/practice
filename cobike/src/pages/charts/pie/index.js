import React from "react";
import {Card} from "antd";
import ReactEcharts from "echarts-for-react";
export default class PieDemo extends React.Component{
    getOptions=()=>{
        let option = {
            title: {
                text: 'ofo数量统计',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data:["Mon","Tue","Wen","Thu","Fri","Sat","Sun"]

            },
            series: [
                {
                    name: '数量',
                    type: 'pie',
                    radius: '55%',
                    center: ['40%', '50%'],
                    data: [
                        {value: 100, name: 'Mon'},
                        {value: 200, name: 'Tue'},
                        {value: 300, name: 'Wen'},
                        {value: 400, name: 'Thu'},
                        {value: 500, name: 'Fri'},
                        {value: 600, name: 'Sat'},
                        {value: 700, name: 'Sun'}],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
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
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                right: 0,
                top: 20,
                bottom: 20,
                data:["Mon","Tue","Wen","Thu","Fri","Sat","Sun"]

            },
            series: [
                {
                    name: '数量',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['40%', '60%'],
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    data: [
                        {value: 100, name: 'Mon'},
                        {value: 200, name: 'Tue'},
                        {value: 300, name: 'Wen'},
                        {value: 400, name: 'Thu'},
                        {value: 500, name: 'Fri'},
                        {value: 600, name: 'Sat'},
                        {value: 700, name: 'Sun'}],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        return option;
    }

    getOptions2=()=>{
        let option = {
            title: {
                text: 'ofo数量统计',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                right: 0,
                top: 20,
                bottom: 20,
                data:["Mon","Tue","Wen","Thu","Fri","Sat","Sun"]

            },
            series: [
                {
                    name: '数量',
                    type: 'pie',
                    radius: "70%",
                    center: ['40%', '60%'],
                    roseType: 'rose',
                    data: [
                        {value: 300, name: 'Mon'},
                        {value: 200, name: 'Tue'},
                        {value: 800, name: 'Wen'},
                        {value: 400, name: 'Thu'},
                        {value: 900, name: 'Fri'},
                        {value: 600, name: 'Sat'},
                        {value: 700, name: 'Sun'}
                        ].sort(function (a, b) { return a.value - b.value; }),
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        return option;
    }
    render(){
        return (
            <div>
                <Card title="基础饼图">
                    <ReactEcharts option={this.getOptions()}></ReactEcharts>
                </Card>
                <Card title="" >
                    <ReactEcharts option={this.getOptions1()}></ReactEcharts>
                </Card>
                <Card title="" >
                    <ReactEcharts option={this.getOptions2()}></ReactEcharts>
                </Card>
            </div>
        );
    }
}