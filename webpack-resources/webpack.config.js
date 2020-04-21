//webpack.config.js
let path=require("path");
//打包命令：npx webpack -config webpack.config.js或者npm run build
//import path from "path";Cannot use import statement outside a module
module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"./dist")
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader","css-loader"
                ]
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                use:[
                    "file-loader"
                ]
            },
            {
                test:/\.(ttf|woff)$/,
                use:[
                    "file-loader"
                ]
            },
            {
                test:/\.xml$/,
                use:[
                    "xml-loader"
                ]
            }
        ]
    }
    
}
