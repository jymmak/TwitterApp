module.exports = {
    entry: [
        __dirname + "/app/Changes.js",
    ],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
        publicPath: "/public"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query:{
               presets: ['es2015', 'react'],
               plugins:["jsx-control-statements"]
            }
         

        }]
    }
}