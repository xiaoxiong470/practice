import _ from "lodash";
import printMe from "./print";
function component() {
    let element = document.createElement('div');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['逢人问道归何处 笑指船儿此是家', 'vue'], ' ');

    let btn=document.createElement("button");
    btn.innerHTML="click";
    btn.onclick=printMe;
    element.append(btn);
    return element;
  }
  
  document.body.appendChild(component());