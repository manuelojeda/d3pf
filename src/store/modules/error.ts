export default {
  namespaced: true,
  state: {
    error: null
  },
  mutations: {
    SET_ERROR (state, payload) {
      console.log(payload)
      state.error = payload
    }
  }
}
