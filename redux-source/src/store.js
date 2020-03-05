export default function createStore(reducer,fun){
    let state={num:0};
    let observers=[];
    if((typeof fun)=="function"){
       return fun(createStore)(reducer);
    }
    let getState=()=>{
        return state;
    }
    let dispatch=(action)=>{
        state=reducer(state,action);
       //状态变化通知观察者
       observers.map(fun=>fun(state));
    }
    let subscribe=(observer)=>{
        observers.push(observer);
    }
    return {getState,dispatch,subscribe};
}