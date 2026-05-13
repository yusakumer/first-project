module.exports = {
    entry: "./src/js/lesson.js",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js",
    },
    mode: "development",
    devtool: "source-map",
};