import {TODO_LIST,CHANGE_VALUE,ADD_ITEM,REMOVE_ITEM,TODO_LIST_SAGA} from "./constants";
const initState={
    idols:["kris","lzh","lzs"],
    inputValue:""
 }
export default function (state=initState,action){
   //console.log("action",action);
    switch(action.type){
        case CHANGE_VALUE:
            
            return {
                ...state,
                inputValue:action.inputValue
            }
        case ADD_ITEM:
            console.log("action.value",action.value);
            return {
                idols:[...state.idols,action.value],
                inputValue:""
            }
        case REMOVE_ITEM:
            let idols=JSON.parse(JSON.stringify(state.idols));
            idols.splice(action.index,1);
            //console.log("newIdols",newIdols);
            return {
                idols:idols
            }
        default:
            return state;
    }

}