const HtmlWebPackPlugon = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/js/lesson.js",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js",
    },
    mode: "development",
    devtool: "source-map",
    devServer: {
        static: `${__dirname}/dist`,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugon({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};