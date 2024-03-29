import {login} from '../api/users'
import router from '../router'
import {getByOrderId} from "../api/admin/order";

const actions = {
  userLogin (context, userForm) {
    return new Promise((resolve, reject) => {
      login(userForm).then((res) => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.userInfo.roles[0])
        localStorage.setItem('userInfo', JSON.stringify(res.userInfo))
        context.commit('setToken', res.token)
        context.commit('setRole', res.userInfo.roles[0])
        context.commit('setUserInfo', res.userInfo)
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  },
  logout (context) {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      localStorage.removeItem('userInfo')
      resolve()
    })
  },
  pushOrderById (context, id) {
    getByOrderId(id).then((res) => context.commit('pushOrder', res))
  }
}

export default actions
