const path = require('path');

module.exports = {
    entry: { 'main-server': './clientApp/boot-server.ts' },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/, loader: 'ts-loader'
            }
        ]
    },
    target: 'node',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, './clientApp/dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs'
    }
};