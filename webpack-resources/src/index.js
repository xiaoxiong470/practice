import _ from "lodash";
//查看页面的 head 标签。样式包含再 style 块元素内
import "./style.css";
import lzs from "./lzs.jpg";
import Data from "./data.xml";
function component() {
    let element = document.createElement('div');
    
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['逢人问道归何处 笑指船儿此是家', 'vue'], ' ');
    element.classList.add("hello");
    //引入的xml文件
    // note:
    //    to: ["Mary"]
    //    from: ["John"]
    //    heading: ["Reminder"]
    //    body: ["Call Cindy on Tuesday"]
    //console.log(Data);

    //引入的图片文件
    //96beeb4a752358f92691c7d018c0e5f9.jpg
    //console.log(lzs);
    // let img=new Image();
    // console.log(lzs);
    // img.src=lzs;
    // element.appendChild(img);
    return element;
  }
  
  document.body.appendChild(component());