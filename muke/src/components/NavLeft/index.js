import React from "react";
import MenuConfig from '../../config/menuConfig';
import { Menu, Icon } from 'antd';
import './index.less';
const { SubMenu } = Menu;
export default class NavLeft extends React.Component{
    handleClick(e) {
        console.log('click', e);
    }
    render(){
        return (
           <div>
               <div className="logo">
                 <img src="../../resource/assets/mouse.png"/>
                  <h1>Imooc MS</h1>
               </div>
               <Menu theme="dark" onClick={this.handleClick} style={{ width: 256 }} mode="vertical">
                    <SubMenu
                    key="sub1"
                    title={
                        <span>
                        <Icon type="mail" />
                        <span>Navigation One</span>
                        </span>
                    }
                    >
                   
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    
                    </SubMenu>
                    </Menu>
           </div>
        )
    }
}