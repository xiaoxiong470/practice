import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import {Index} from "./pages/Index";
import {List} from "./pages/List";

export default function AppRouter(){
    return (
        <Router>
            <ul>
                <Link to="/"><li>首页</li></Link>
                <Link to="/list"><li>列表</li></Link>
            </ul>
            <Route path="/" exact component={Index}/>
            <Route path="/list" component={List}/>
        </Router>
    )
}