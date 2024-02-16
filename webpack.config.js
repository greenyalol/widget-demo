const path = require('path');

module.exports = {
    entry: './js/widget.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'module',
        filename: 'widget.js'
    },
    experiments: {
        outputModule: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};