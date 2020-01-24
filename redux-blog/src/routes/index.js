import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from "../components/Home";
import Detail from "../components/detail";
import React from "react";
const routes=()=>{
    return(<HashRouter >
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/detail/:id" component={Detail}/>
                </Switch>
            </HashRouter>);
}
export default routes;