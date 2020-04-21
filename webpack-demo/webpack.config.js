//webpack.config.js
let path=require("path");
//打包命令：npx webpack -config webpack.config.js或者npm run build
//import path from "path";Cannot use import statement outside a module
module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"./dist")
    },
    mode:"development"
    
}
