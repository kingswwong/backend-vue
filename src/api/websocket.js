import store from '../store'
let websock = null
let globalCallback = null

// 初始化weosocket
const sockApi = (userId) => {
  // ws地址 -->这里是你的请求路径
  const ws = 'ws://localhost:8090/websocket/' + userId + '/orders'
  websock = new WebSocket(ws)
  websock.onmessage = function (e) {
    websocketonmessage(e)
  }
  websock.onclose = function (e) {
    websocketclose(e)
  }
  websock.onopen = function () {
    websocketOpen()
  }

  // 连接发生错误的回调方法
  websock.onerror = function () {
    console.log('WebSocket连接发生错误')
  }

  return websock
}

// 数据接收
function websocketonmessage (e) {
  store.dispatch('pushOrderById', e.data)
}

// 关闭
function websocketclose (e) {
  console.log('connection closed (' + e.code + ')')
}

// 创建 websocket 连接
function websocketOpen (e) {
  console.log('连接成功')
}

export default sockApi
