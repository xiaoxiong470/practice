import React from 'react';
import FancyButton from "./FancyButton";


class App extends React.Component{
    constructor(){
        super();
        this.ref=React.createRef();
    }
    componentDidMount() {
        console.log("ref",this.ref.current);
    }
    render() {
        return (<FancyButton ref={this.ref}></FancyButton>);
    }
}
export default App;
