import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import {Index} from "./pages";
import {List} from "./pages/List"
export default class AppRouter extends React.Component{
    render() {
        return (
            <div>
                <Router>
                    <div>
                        {/*<Link to="/"><Index/></Link>*/}
                        {/*<Link to="/list"><List/></Link>*/}
                    </div>
                    <Route exact path="/" component={Index}></Route>
                    <Route exact path="/list/:id" component={List}></Route>
                </Router>
            </div>

        );
    }
}