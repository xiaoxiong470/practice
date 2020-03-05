import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Clothes from "./Clothes";
import "./index.css";

/*export default function AppRouter(){
    return (
        <Router>
            <div className="leftNav">
                <ul>
                    <Link to="/clothes"><li>衣服</li></Link>
                    <Link to="/shoes"><li>鞋子</li></Link>
                    <Link to="/jewelry"><li>饰品</li></Link>
                </ul>
                <Route path="/" />
                <Route path="/clothes"  component={Clothes}/>
                <Route path="/shoes" component={Clothes}/>
                <Route path="/jewelry" component={Clothes}/>
            </div>
        </Router>

    )
}*/
//加上后台权限的话大概是这样
export default class AppRouter extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            navs:[
                {path:"/clothes",title:"衣服",component:Clothes},
                {path:"/shoes",title:"鞋子",component:Clothes},
                {path:"/jewelry",title:"饰品",component:Clothes}
            ]
        }
    }
    render() {
        return (
            <Router>
                <div className="leftNav">
                    <ul>
                        {this.state.navs.map((item)=>(<Link to={item.path}><li>{item.title}</li></Link>))}
                    </ul>
                    <Route path="/" />
                    {this.state.navs.map((item)=>(<Route path={item.path}  component={item.component}/>))}
                </div>
            </Router>

        )
    }
}