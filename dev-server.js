var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

var port = 4000;
new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        hot: true
}).listen(port, 'localhost', function(err, result){
    if(err){
        return console.log(err);
    }
    console.log('Listening on port ', port);
});
