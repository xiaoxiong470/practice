import React from 'react';
import {Button} from "antd";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Login from "./login";
import Admin from "./admin";

function Main() {
  return (
    <div >
      <Router>
          <Route path="/login" exact >
            <Login/>
          </Route>
          {/* 共有四种路由方式，不能混着用,官方推荐如下 */}
          <Route path="/admin"  >
            <Admin/>
          </Route>
          
      </Router>
    </div>
  );
}

export default Main;