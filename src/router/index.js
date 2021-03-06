import Vue from 'vue'
import Router from 'vue-router'
import { analytics } from 'h5sdk'
import store from '../store'
import routers from './routers'

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: routers,
})

router.beforeEach(function (to, from, next) {
  store.dispatch('loading')
  next()
})

router.afterEach((to, from) => {
  store.dispatch('loaded')
  analytics.pv(to.fullPath)
})

export default router
