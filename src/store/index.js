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
    begin: null,
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
      state.begin = payload.begin
    },
  },
  actions: {
    loading ({state, commit}) {
      commit('updateLoadingStatus', {
        isLoading: true,
        begin: (new Date()).getTime(),
      })
    },
    loaded ({state, commit}) {
      let payload = {
        isLoading: false,
        begin: null,
      }
      let time = (new Date()).getTime()
      if (state.begin + 500 <= time) {
        commit('updateLoadingStatus', payload)
      } else {
        setTimeout(() => commit('updateLoadingStatus', payload), state.begin + 500 - time)
      }
    },
  },
})

export default store
