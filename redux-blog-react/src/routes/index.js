import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from "../views/Home";
import Detail from "../views/Detail";
import Frame from "../layouts/Frame";
import React from "react";
const routes=()=>{
    return (
        <HashRouter >

            <Switch>
                <Route path="/" render={()=>
                    <Frame>
                        <Route exact  path="/" component={Home}/>
                        <Route exact path="/detail" component={Detail}/>
                    </Frame>
                }>
                </Route>

            </Switch>
        </HashRouter>
    );

}
export default routes;