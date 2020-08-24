const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'what-time-is-meow.js',
        library: 'whatTimeIsMeow',
        libraryTarget: 'umd',
    }, 
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                 use: [
                'file-loader',
                ],
            },
        ]
    }
}