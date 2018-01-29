import { api } from 'h5sdk'

export const types = {
  FETCH_ACTIVITY_REQUEST: 'FETCH_ACTIVITY_REQUEST',
  FETCH_ACTIVITY_SUCCESS: 'FETCH_ACTIVITY_SUCCESS',
  FETCH_ACTIVITY_FAILURE: 'FETCH_ACTIVITY_FAILURE',

  FETCH_PLAYER_REQUEST: 'FETCH_PLAYER_REQUEST',
  FETCH_PLAYER_SUCCESS: 'FETCH_PLAYER_SUCCESS',
  FETCH_PLAYER_FAILURE: 'FETCH_PLAYER_FAILURE',

  FETCH_GIFTS_REQUEST: 'FETCH_GIFTS_REQUEST',
  FETCH_GIFTS_SUCCESS: 'FETCH_GIFTS_SUCCESS',
  FETCH_GIFTS_FAILURE: 'FETCH_GIFTS_FAILURE',

}

export default {
  namespaced: true,
  state: {
    activity: {
      info: null,
      laoding: false,
      error: null,
    },
    player: {
      info: null,
      laoding: false,
      error: null,
    },
    gifts: {
      info: null,
      laoding: false,
      error: null,
    },
  },
  getters: {
  },
  mutations: {
    // 活动
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

    // 选手
    [types.FETCH_PLAYER_REQUEST] (state, payload) {
      state.player.loading = true
    },
    [types.FETCH_PLAYER_SUCCESS] (state, activity) {
      state.player.loading = false
      state.player.info = activity
    },
    [types.FETCH_PLAYER_FAILURE] (state, error) {
      state.player.loading = false
      state.player.error = error
    },

    // 礼物
    [types.FETCH_GIFTS_REQUEST] (state) {
      state.gifts.loading = true
    },
    [types.FETCH_GIFTS_SUCCESS] (state, gifts) {
      state.gifts.loading = false
      state.gifts.info = gifts
    },
    [types.FETCH_GIFTS_FAILURE] (state, error) {
      state.gifts.loading = false
      state.gifts.error = error
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
    async fetchPlayer ({commit, state}, id) {
      commit(types.FETCH_PLAYER_REQUEST)

      let requestData = {
        player_id: id,
        activity_id: state.activity.info.id,
      }
      const {data} = await api.get('activity_player', requestData)

      if (data.error) {
        commit(types.FETCH_PLAYER_FAILURE, data.message)
      } else {
        commit(types.FETCH_PLAYER_SUCCESS, data.data)
      }
    },
    async fetchGifts ({commit, state}) {
      if (state.gifts.info) {
        return
      }

      commit(types.FETCH_GIFTS_REQUEST)

      const {data} = await api.get('activity_gifts')

      if (data.error) {
        commit(types.FETCH_GIFTS_FAILURE, data.message)
      } else {
        commit(types.FETCH_GIFTS_SUCCESS, data.data)
      }
    },
  },
}
