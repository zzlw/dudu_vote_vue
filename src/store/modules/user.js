// import modules from './modules'
// import actions from './action'
// import getters from './getters'
// import plugins from './plugins'

const GET_USER = 'GET_USER'

export default {
    // 继承父模块的命名空间
    state: {},
    getters: {
        profile () { } // -> getters['account/profile']
    },
    actions: {
        async getMusic ({ commit, state }) {
            commit(GET_USER)
        }
    },
    [GET_USER] (state) {
        state.isMusic = {
            show: false,
            play: false
        }
    }

}
