// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'
import FastClick from 'fastclick'
import Vue from 'vue'
import router from 'router'
import store from 'store'
import plugins from 'plugins/component'

Vue.use(plugins)

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body)
    }, false)
}

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    store
}).$mount('#app')
