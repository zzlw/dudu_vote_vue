import Vue from 'vue'
import Vuex from 'vuex'
// 状态树集
import user from './modules/user'
import config from './modules/config'
import operator from './modules/operator'
import activity from './modules/activity'
// 插件
import { Plugin } from './plugins'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    user,
    config,
    operator,
    activity,
  },
  plugins: [Plugin('测试')],
})

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false,
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
  },
})

export default store
