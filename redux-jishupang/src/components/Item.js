import React from "react";

export default  class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(a,b){
        console.log(a);
        console.log(b);
        console.log("shouldComponentUpdate");

    }
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    
    render(){
        console.log("render");
        return (
            <div onClick={()=>this.props.removeItem(this.props.key)}>
                {this.props.value}
            </div>
        )
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
}