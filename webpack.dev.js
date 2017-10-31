const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(
    common,
    {
        devtool: 'inline-source-map',
        devServer: {
            contentBase: __dirname + "/dist",
            historyApiFallback: true,
            compress: true,
            inline: true,
            port: 9000
        }
    }
)
