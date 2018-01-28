import { api } from 'h5sdk'

export const types = {
  FETCH_ACTIVITY_REQUEST: 'FETCH_ACTIVITY_REQUEST',
  FETCH_ACTIVITY_SUCCESS: 'FETCH_ACTIVITY_SUCCESS',
  FETCH_ACTIVITY_FAILURE: 'FETCH_ACTIVITY_FAILURE',
}

export default {
  namespaced: true,
  state: {
    activity: {
      info: null,
      laoding: false,
      error: null,
    },
  },
  getters: {
  },
  mutations: {
    [types.FETCH_ACTIVITY_REQUEST] (state, payload) {
      state.activity.loading = true
    },
    [types.FETCH_ACTIVITY_SUCCESS] (state, activity) {
      state.activity.loading = false
      state.activity.info = activity
    },
    [types.FETCH_ACTIVITY_FAILURE] (state, error) {
      state.activity.loading = false
      state.activity.error = error
    },
  },
  actions: {
    async fetchActivity ({commit, state}, id) {
      commit(types.FETCH_ACTIVITY_REQUEST)

      const {data} = await api.get('activity', {id})

      if (data.error) {
        commit(types.FETCH_ACTIVITY_FAILURE, data.message)
      } else {
        commit(types.FETCH_ACTIVITY_SUCCESS, data.data)
      }
    },
  },
}
