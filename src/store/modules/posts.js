import Vue from 'vue'
import Vuex from 'vuex'
// import modules from './modules'
// import actions from './action'
// import getters from './getters'
// import plugins from './plugins'

const GET_USER = 'GET_USER'

export default {
    namespaced: true,
    state: {},
    getters: {
        popular() { } // -> getters['account/posts/popular']
    },
    actions: {
        async getMusic({ commit, state }) {
            commit(GET_USER)
        }
    },
    [GET_USER](state) {
        state.isMusic = {
            show: false,
            play: false
        }
    }

}
