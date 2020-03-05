export default function reducer(state,action){
    switch(action.type){
        case "add":
            state={
                ...state,
                num:state.num+1
            }
           break;
        case "minus":
            state={
                ...state,
                num:state.num-1
            }
            break;
        default:
            break;
   }
   return state;
}