import { api } from 'h5sdk'

export const types = {
  FETCH_ACTIVITY_REQUEST: 'FETCH_ACTIVITY_REQUEST',
  FETCH_ACTIVITY_SUCCESS: 'FETCH_ACTIVITY_SUCCESS',
  FETCH_ACTIVITY_FAILURE: 'FETCH_ACTIVITY_FAILURE',

  FETCH_PRIZES_REQUEST: 'FETCH_PRIZES_REQUEST',
  FETCH_PRIZES_SUCCESS: 'FETCH_PRIZES_SUCCESS',
  FETCH_PRIZES_FAILURE: 'FETCH_PRIZES_FAILURE',

  FETCH_PLAYER_REQUEST: 'FETCH_PLAYER_REQUEST',
  FETCH_PLAYER_SUCCESS: 'FETCH_PLAYER_SUCCESS',
  FETCH_PLAYER_FAILURE: 'FETCH_PLAYER_FAILURE',

  FETCH_GIFTS_REQUEST: 'FETCH_GIFTS_REQUEST',
  FETCH_GIFTS_SUCCESS: 'FETCH_GIFTS_SUCCESS',
  FETCH_GIFTS_FAILURE: 'FETCH_GIFTS_FAILURE',

  FETCH_PERSONAL_REQUEST: 'FETCH_PERSONAL_REQUEST',
  FETCH_PERSONAL_SUCCESS: 'FETCH_PERSONAL_SUCCESS',
  FETCH_PERSONAL_FAILURE: 'FETCH_PERSONAL_FAILURE',

}

export default {
  namespaced: true,
  state: {
    activity: {
      info: null,
      loading: false,
      error: null,
      activityId: null,
    },
    prizes: {
      info: null,
      loading: false,
      error: null,
    },
    player: {
      info: null,
      loading: false,
      error: null,
    },
    gifts: {
      info: null,
      loading: false,
      error: null,
    },
    personal: {
      info: null,
      loading: false,
      error: null,
    },
  },
  getters: {},
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

    // 礼物
    [types.FETCH_PRIZES_REQUEST] (state, payload) {
      state.prizes.loading = true
    },
    [types.FETCH_PRIZES_SUCCESS] (state, payload) {
      state.prizes.loading = false
      state.prizes.info = payload.prizes
      state.prizes.activityId = payload.activityId
    },
    [types.FETCH_PRIZES_FAILURE] (state, error) {
      state.prizes.loading = false
      state.prizes.error = error
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

    // 个人中心
    [types.FETCH_PERSONAL_REQUEST] (state) {
      state.personal.loading = true
    },
    [types.FETCH_PERSONAL_SUCCESS] (state, personal) {
      state.personal.loading = false
      state.personal.info = personal
    },
    [types.FETCH_PERSONAL_FAILURE] (state, error) {
      state.personal.loading = false
      state.personal.error = error
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
    async fetchActivityPrizes ({commit, state}, id) {
      if (Number(state.prizes.activityId) === Number(id)) {
        return
      }

      commit(types.FETCH_PRIZES_REQUEST)

      const {data} = await api.get('activity_prizes', {activity_id: id})

      if (data.error) {
        commit(types.FETCH_PRIZES_FAILURE, data.message)
      } else {
        commit(types.FETCH_PRIZES_SUCCESS, {
          prizes: data.data,
          activityId: id,
        })
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
    async fetchPersonal ({commit, state}, activityId) {
      commit(types.FETCH_PERSONAL_REQUEST)

      const {data} = await api.get('activity_personal', {
        'activity_id': activityId,
      })

      if (data.error) {
        commit(types.FETCH_PERSONAL_FAILURE, data.message)
      } else {
        commit(types.FETCH_PERSONAL_SUCCESS, data.data)
      }
    },
  },
}
