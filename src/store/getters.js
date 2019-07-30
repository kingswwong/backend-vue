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
  orderList: (state) => (status) => {
    return state.orderList.filter((item) => item.orderStatus === status)
  },
  websocket (state) {
  return state.websocket
}
}
export default getters
