let path=require("path");
module.exports={
    entry:path.join(__dirname,"src/app.js"),
    output:{
        path:path.join(__dirname,"build"),
        filename:"app.bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:path.join(__dirname,"src"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"]
                    }
                }
            }
        ]
    }
}