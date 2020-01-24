import React from "react";

//标签重定向
/*
export function Index(){
    return <div>index</div>;
}*/

//js代码重定向
export class Index extends React.Component{
    constructor(){
        super();
        //console.log(this.props);//undefined
    }
    componentDidMount() {
        console.log(this.props.location.state);
        //{id: 12}
        //{id: 69}
    }
    componentWillMount() {
        console.log("componentWillMount",this.props);
    }

    render(){
        console.log("render",this.props);
        return (
            <div>
                <div>Index</div>
            </div>

        );
    }
}