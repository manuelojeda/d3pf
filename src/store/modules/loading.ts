export default {
  namespaced: true,
  state: {
    isLoading: false as boolean
  },
  mutations: {
    SET_LOADING (state: any, payload: boolean) {
      state.isLoading = payload
    }
  }
}
