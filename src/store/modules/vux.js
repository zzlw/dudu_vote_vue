export default {
  state: {
    isLoading: false,
    begin: null,
    timeoutNo: 0,
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
      state.begin = payload.begin
      state.timeoutNo = 0
    },
    timeout (state, timeoutNo) {
      state.timeoutNo = timeoutNo
    },
  },
  actions: {
    loading ({state, commit}) {
      try {
        clearTimeout(state.timeoutNo)
      } catch (e) {}
      commit('updateLoadingStatus', {
        isLoading: true,
        begin: (new Date()).getTime(),
      })
    },
    loaded ({state, commit}, delay = 500) {
      let payload = {
        isLoading: false,
        begin: null,
      }
      let time = (new Date()).getTime()
      if (state.begin + delay <= time) {
        commit('updateLoadingStatus', payload)
      } else {
        let timeoutNo = setTimeout(() => commit('updateLoadingStatus', payload), state.begin + delay - time)
        commit('timeout', timeoutNo)
      }
    },
  },
}
