import React from "react";
import MenuConfig from '../../config/menuConfig';
import { Menu, Icon } from 'antd';
import {HashRouter,NavLink,Link} from "react-router-dom";
import './index.less';
import {connect} from "react-redux";
import switchMenu from "../../redux/actions";
const { SubMenu } = Menu;

class NavLeft extends React.Component{
    state={
        selectedKeys:["/home"]
    }
    handleClick=({key,item,keyPath})=> {
        //console.log('item', item);
        const {dispatch} =this.props;
        //console.log('dispatch', dispatch);
        this.setState({
            selectedKeys:keyPath
        })
        dispatch(switchMenu(item.props.title));
    }
    componentWillMount(){
        let menuTreeNode=this.renderMenu(MenuConfig);
        console.log(menuTreeNode);
        this.setState({
            menuTreeNode
        });
    }
    renderMenu=(data)=>(
       data.map(item=>{
           if(item.children){
              return (<SubMenu  key={item.key} title={<span><span>{item.title}</span></span>}>
                  {this.renderMenu(item.children)}
                  </SubMenu>);
           }
           //</Link>
        return  <Menu.Item key={item.key} title={item.title}><Link to={item.key}>{item.title}</Link></Menu.Item>
       })
    )
    render(){
        return (
           <div>
               <div className="logo">
                 <img src="/assets/mouse.png"/>
                  <h1>Imooc MS</h1>
               </div>
               <Menu theme="dark" selectedKeys={this.state.selectedKeys} onClick={this.handleClick} style={{ width: 256 }} mode="vertical">
                    {this.state.menuTreeNode}
                </Menu>
           </div>
        )
    }
}

export default  connect()(NavLeft);