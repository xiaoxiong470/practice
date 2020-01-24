import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
function Index() {
    return <div>index</div>
}
//useEffect异步，生命周期同步
/*我们只想在组件mount时请求数据。我们可以传递一个空数组作为useEffect的第二个参数，这样就能避免在组件更新执行useEffect，只会在组件mount时执行。*/
//useEffect的第二个参数可用于定义其依赖的所有变量。如果其中一个变量发生变化，则useEffect会再次运行。如果包含变量的数组为空，则在更新组件时useEffect不会再执行，因为它不会监听任何变量的变更。
function List() {
    //useEffect第二个参数，传递的属性变化时进行销毁[count]，不传值则不销毁[]
    useEffect(()=>{
        console.log("come");
        return ()=>{
            console.log("go")
        }
    },[])
    return <div>List</div>
}
//useEffect
export default function Counter(){
    //不能添加条件，因为顺序不能变
    let [count,setCount]=useState(0);

    return (
        <div>

            <span>{count}</span>
            <br/>
            <button onClick={()=>{setCount(++count)}}>+</button>
            <Router>
                <ul>
                    <Link to="/"><li>首页</li></Link>
                    <Link to="/list"><li>列表</li></Link>
                </ul>
                <Route exact path="/" component={Index}/>
                <Route path="/list" component={List}/>
            </Router>
        </div>
    );
}