import {type} from "../actions";

export default (state={menuName:"首页"},action)=>{
    //console.log("action1",action);
    switch (action.type) {
        case type.SWITCH_MENU:
            return{
                ...state,
                menuName:action.menuName
            }
        default:
            return state;
    }
}