import React from "react";
import Nav from "./Nav";
import {withRouter} from "react-router-dom";

class Frame extends React.Component{
    render() {
        return (
           <div className="frame">
               <section className="header">
                   <Nav />
               </section>
               <section className="container">
                   {this.props.children}
               </section>
           </div>
        )
    }
}
export default withRouter(Frame);