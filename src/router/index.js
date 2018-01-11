import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import config from 'utils/config'

Vue.use(Router)

// const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

const VueRouter = new Router({
    routes: [
        {
            path: '/',
            component: App, // 顶层路由，对应index.html
            children: [// 二级路由。对应App.vue
                {
                    path: '',
                    redirect: '/home'
                }, {
                    path: '/home',
                    component: r => require.ensure([], () => r(require('page/home').default), 'home')
                }
            ]
        }
    ],
    mode: config.mode,
    strict: process.env.NODE_ENV !== 'production',  //在非生产环境下，使用严格模式
    scrollBehavior (to, from, savedPosition) {
    // to 和 from 都是 路由信息对象

    }
})


//全局守卫
VueRouter.beforeEach((to, from, next) => {
    next()
})

export default VueRouter
