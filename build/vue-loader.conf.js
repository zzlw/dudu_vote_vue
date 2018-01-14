'use strict'
const utils = require('./utils')
const config = require('../config')
var px2rem = require('postcss-px2rem-exclude');
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    }),
    transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    },
    postcss: function () {
        return [px2rem({
                remUnit: 64,
                exclude: /node_modules/
        })];
    }
}
