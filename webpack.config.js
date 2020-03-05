const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
    mode: "production",
    entry: "./src/index.js", // 这是你的组件文件
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: "/node_modules/"
            }
        ]
    },
    externals: [nodeExternals()]
};