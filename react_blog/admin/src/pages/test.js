import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";

//优先级chidren>component>render
export default function Father(){
  return (
    <Router>
    <Route path="/cool"><Ex1/></Route>
    <Route path="/cool2" component={Ex2}></Route>
    <Route path="/cool3" render={(props)=>{
        //console.log("render",props);
        ///["history", "location", "match", "staticContext"]
        return <Ex3/>;
    }}></Route>
    <Route path="/cool4" children={(props)=>{
        console.log("children function",props);
        ///["history", "location", "match", "staticContext"]
        return <Ex3/>;
    }}></Route>
    </Router>
  )
}

function Ex1(props){
  console.log("wrap",props);//{}
  return (
    <div>Ex1</div>
  )
}
//component:每次要销毁重新构建组件
function Ex2(props){
  console.log("component",Object.keys(props));//["history", "location", "match", "staticContext"]
  return (
    <div>Ex2</div>
  )
}

function Ex3(props){
  console.log("render",props);//{}
  return (
    <div>Ex3</div>
  )
}





