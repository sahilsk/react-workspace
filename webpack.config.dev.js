var path = require('path');
var webpack = require('webpack');


var port = 4000;

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:'+ port,
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path:  path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:' + port +'/static'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: [path.join(__dirname, 'src'), path.join(__dirname, 'components')]
        }]
    }
}

