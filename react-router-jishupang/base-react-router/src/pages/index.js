import React from "react";
import {Link} from "react-router-dom";
export class Index extends React.Component{
    constructor(){
        super();
        this.state={
            idols:["kris","lzs","lzh"]
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
    }
    componentDidMount() {
        //console.log(this.props);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.idols.map((item,index)=>{
                        return <Link to={"/list/"+index} key={index}><li >{item}</li></Link>
                    })}
                </ul>
            </div>
        )
    }
}