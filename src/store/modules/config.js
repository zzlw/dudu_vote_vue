
// import modules from './modules'
// import actions from './action'
// import getters from './getters'
// import plugins from './plugins'

const GET_USER = 'GET_USER'

export default {
  namespaced: true,
  state: {
    navs: [
      {
        link: '/home',
        icon: 'icon-zhuye',
        title: '主页'
      },
      {
        link: '/home123',
        icon: 'icon-paihangbang',
        title: '排行榜'
      },
      {
        link: '/ho324me',
        icon: 'icon-huodong',
        title: '活动奖品'
      },
      {
        link: '/home234234',
        icon: 'icon-geren2-copy',
        title: '个人中心'
      }
    ]
  },
  getters: {
    popular () { } // -> getters['account/posts/popular']
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
