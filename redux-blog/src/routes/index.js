import {Route,Router,hashHistory}  from "react-router";
import Home from "../components/Home";
import Detail from "../components/detail";

const routes=(
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/detail/:id" component={Detail}/>
    </Router>
)
export default routes;