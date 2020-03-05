import React from "react";
import {Card,Button,Tabs,message,Icon} from "antd";
import "./ui.less";
export default class Tab extends React.Component{
    state={};
    newTabIndex=0;
    componentWillMount() {
        let panes=[
            {
                key:"lzh",
                title:"lzh",
                content:"lizhuhe"
            },
            {
                key:"kris",
                title:"kris",
                content:"wuyifan"
            }
        ];
        this.setState({
            panes,
            activeKey:panes[0].key
        })
    }

    handleChange=(key)=>{
        message.info(key);
    }

    handleChange01=(key)=>{
        this.setState({activeKey:key})
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: activeKey, key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };

    render(){
        return (
            <div >
                <Card title="基础">
                    <Tabs defaultActiveKey="1" onChange={this.handleChange}>
                        <Tabs.TabPane  key="1" tab="kris">
                            wuyifan
                        </Tabs.TabPane>
                        <Tabs.TabPane key="2" tab="lzh">
                            lizhuhe
                        </Tabs.TabPane>
                        <Tabs.TabPane key="3" tab="lzs">
                            lizhongshuo
                        </Tabs.TabPane>
                    </Tabs>
                </Card>

                <Card title="添加icon">
                    <Tabs defaultActiveKey="1" onChange={this.handleChange}>
                        <Tabs.TabPane  key="1" tab={<span><Icon type="apple" />kris</span>}>
                            wuyifan
                        </Tabs.TabPane>
                        <Tabs.TabPane key="2" tab={<span><Icon type="android" />kris</span>}>
                            lizhuhe
                        </Tabs.TabPane>
                        <Tabs.TabPane key="3" tab={<span><Icon type="apple" />kris</span>}>
                            lizhongshuo
                        </Tabs.TabPane>
                    </Tabs>
                </Card>

                <Card title="可编辑">
                    <Tabs activeKey={this.state.activeKey} onChange={this.handleChange01} onEdit={this.onEdit} type="editable-card">
                        {
                            this.state.panes.map((item)=>{
                                return (
                                    <Tabs.TabPane  key={item.key} tab={item.title}>
                                        {item.content}
                                    </Tabs.TabPane>
                                );
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}