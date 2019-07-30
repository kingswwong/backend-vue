const getters = {
  token (state) {
    return state.token
  },
  role (state) {
    return state.role
  },
  userInfo (state) {
    return state.userInfo
  },
  orderList (state) {
    return state.orderList
  },
  websocket (state) {
  return state.websocket
}
}
export default getters
