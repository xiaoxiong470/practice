import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

function TShirt(){
    return <div>TShirt</div>;
}

function Skirt(){
    return <div>Skirt</div>;
}
function Pants(){
    return <div>Pants</div>;
}

export default function Clothes(){
    return (
           <div className="topNav">
            <ul>
                <Link to="/clothes/tshirt"><li>t恤</li></Link>
                <Link to="/clothes/skirt"><li>裙子</li></Link>
                <Link to="/clothes/pants"><li>休闲裤</li></Link>
            </ul>
            <Route path="/clothes/tshirt" exact component={TShirt}/>
            <Route path="/clothes/skirt" component={Skirt}/>
            <Route path="/clothes/pants" component={Pants}/>
           </div>
    )
}