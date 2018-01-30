import { api } from 'h5sdk'

export const types = {
  FETCH_OPERATOR_REQUEST: 'FETCH_OPERATOR_REQUEST',
  FETCH_OPERATOR_SUCCESS: 'FETCH_OPERATOR_SUCCESS',
  FETCH_OPERATOR_FAILURE: 'FETCH_OPERATOR_FAILURE',

  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',

}

export default {
  namespaced: true,
  state: {
    operator: {
      info: null,
      laoding: false,
      error: null,
      errorCode: 0,
    },
  },
  getters: {},
  mutations: {
    // 活动
    [types.FETCH_OPERATOR_REQUEST] (state, payload) {
      state.operator.loading = true
    },
    [types.FETCH_OPERATOR_SUCCESS] (state, operator) {
      state.operator.loading = false
      state.operator.info = operator
    },
    [types.FETCH_OPERATOR_FAILURE] (state, payload) {
      state.operator.loading = false

      state.operator.error = payload.error
      state.operator.errorCode = payload.errorCode
    },

    [types.LOGOUT_SUCCESS] (state) {
      state.operator.loading = false
      state.operator.info = null
      state.operator.error = null
      state.operator.errorCode = 0
    },
  },
  actions: {
    async fetchOperator ({commit, state}) {
      commit(types.FETCH_OPERATOR_REQUEST)

      const {data} = await api.get('operator')

      if (data.error) {
        commit(types.FETCH_OPERATOR_FAILURE, {
          error: data.message,
          errorCode: data.error_code,
        })
      } else {
        commit(types.FETCH_OPERATOR_SUCCESS, data.data)
      }
    },
    async logout ({commit, state}) {
      await api.post('operator_logout')
      commit(types.LOGOUT_SUCCESS)
    },
  },
}
