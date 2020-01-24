import React from "react";
import "./index.css";
import {CSSTransition} from "react-transition-group";
export class Boss extends React.Component{
    constructor(){
        super();
        this.state={
            isShow:true
        }
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleToggle(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render() {
        return (
            <div>
                <CSSTransition
                   in={this.state.isShow}
                   timeout={2000}
                   classNames="boss-text"
                >
                  {/*  {{className={this.state.isShow==true?"showItem":"hideItem"}}*/}
                  <div >hello,world</div>
                </CSSTransition>
                <button onClick={this.handleToggle} >toggle</button>
            </div>
        )
    }
}