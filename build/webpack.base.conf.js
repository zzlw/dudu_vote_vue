'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const vuxLoader = require('vux-loader')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

const webpackConfig = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: [
            '.js',
            '.vue',
            '.json',
            '.css',
            '.scss'
        ],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            '@': resolve('src'),
            'assets': resolve('src/assets'),
            'components': resolve('src/components'),
            'utils': resolve('src/utils'),
            'plugins': resolve('src/plugins'),
            'api': resolve('src/api'),
            'pages': resolve('src/pages'),
            'store': resolve('src/store'),
            'router': resolve('src/router')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
              include: [resolve('src'), resolve('test'), resolve('node_modules/_vue-echarts-v3@1.0.19@vue-echarts-v3/src'), resolve('node_modules/_h5sdk@1.0.0@h5sdk/sdk')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[ext]')
                }
            }
        ]
    }
}

module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui', 'progress-bar', 'duplicate-style']
})
