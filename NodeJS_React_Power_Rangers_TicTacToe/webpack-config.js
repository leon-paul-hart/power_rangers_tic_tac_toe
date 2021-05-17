module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: "./app.tsx",
    output: {
        filename: "./app-bundle.js"
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "ts-loader"
                }
            },
        ]
    }
}