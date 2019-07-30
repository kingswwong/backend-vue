const mutations = {
  getToken (state) {
    return state.token
  },
  getRole (state) {
    return state.role
  },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  setToken (state, token) {
    state.token = token
  },
  setRole (state, role) {
    state.role = role
  },
  setWebSocket (state, websocket) {
    state.websocket = websocket
  }
}

export default mutations
