const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {

    mode: isProduction ? 'production' : 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vueDismiss.js',
        library: 'vueDismiss',
        libraryExport: 'default',
        libraryTarget: 'umd',
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [
                    path.join(__dirname, 'src'),
                    path.join(__dirname, 'spec')
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.join(__dirname, 'src')
                ]
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.vue', '.json']
    },

    plugins: [
        new VueLoaderPlugin()
    ]
};
