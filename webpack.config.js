module.exports = {
    entry: [
        __dirname + "/app/Validations.js",
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
               presets: ['es2015', 'react']
            }
         

        }]
    }
}