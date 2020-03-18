export let type={
    SWITCH_MENU:"SWITCH_MENU"
}

export  default (menuName)=>{
    //console.log("action",menuName);
    return {
        type:type.SWITCH_MENU,
        menuName
    }
}