import React from "react";

export class List extends React.Component{
    componentDidMount() {
        //包含如下属性
        // history: {length: 9, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
        // location: {pathname: "/list/123", search: "", hash: "", state: undefined}
        // match:
        // path: "/list/:id"
        // url: "/list/123"
        // isExact: true
        // params:
        // id: "123"
       // console.log(this.props);

    }

    render() {
        return <div>{this.props.match.params.id}</div>;
    }
}