import _ from "lodash";
import printMe from "./print";
import "./style.css";
function component() {
    let element = document.createElement('div');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['逢人问道归何处 笑指船儿此是家', 'vue'], ' ');

    let btn=document.createElement("button");
    btn.innerHTML="click";
    btn.onclick=printMe;//hotonly:执行的是更新后的代码,hot:执行的是更新前的代码，刷新后是更新后的代码
    element.append(btn);
    return element;
  }
  let element=component();
  document.body.appendChild(element);

  if (module.hot) {
       module.hot.accept('./print.js', function() {
         console.log('Accepting the updated printMeconsole.log(); module!');
         printMe();//hotonly，hot:执行的是更新后的代码
         //hotonly：不需要执行1-3步骤，hot需要1-3，在此基础上执行了刷新
        //  document.body.removeChild(element);//1
        //  element=component();//2
        //  更新元素
        //  document.body.appendChild(element);//3
       })
     }