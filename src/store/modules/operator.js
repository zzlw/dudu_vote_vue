export const SAVE_OPERATOR = 'SAVE_OPERATOR'
/**
 * 运营商模块
 */
export default {
  namespaced: true,
  // 继承父模块的命名空间
  state: {
    operator: null
  },
  getters: {
    operator (state) {
      return state
    }
  },
  mutations: {
    [SAVE_OPERATOR]: (state, payload) => {
      state.operator = payload.operator
    }
  },
  actions: {}
}
