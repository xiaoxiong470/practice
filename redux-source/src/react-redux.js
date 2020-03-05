import React from "react";
const StoreContext=React.createContext({});
export  class Provider extends React.Component{
    constructor(props){
        super(props);
        //this.context=React.createContext(props.store);
    }
    
  render(){
      console.log("Provider",this.props.store);
      return (
          <StoreContext.Provider value={this.props.store}>
            {this.props.children}
          </StoreContext.Provider>
      );
  }
}


export function connect(mapStateToProps,mapDispatchToProps){
    return (WrappedComponent)=>{
        class x extends React.Component{
            static contextType=StoreContext;
            constructor(props){
               super(props);
            }

            handleChange=(state)=>{
                this.setState(state);
            }
            componentDidMount(){
                this.context.subscribe(this.handleChange);
            }
           render(){
               return (
                   <WrappedComponent {...this.props} {...mapStateToProps(this.context.getState(),this.props)} {...mapDispatchToProps(this.context.dispatch,this.props)} ></WrappedComponent>
               )
           }
        }
        return x;
    }
}