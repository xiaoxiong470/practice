import React from 'react';
import './App.css';


function logProps(WrappedComponent) {
    //高阶组件不会透传ref
     let LogProps= React.forwardRef((props,ref)=>{
         return <WrappedComponent ref={ref} {...props} />;
     })
    return LogProps;
}

export default logProps;
