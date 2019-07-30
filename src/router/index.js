import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/base/Login'
import Home from '@/views/base/Home'
import ParkingBoy from "@/views/employee/ParkingBoy";
import Manager from "@/views/employee/Manager";
import ParkingLot from "@/views/parkinglot/ParkingLot";
import Order from "../views/order/Order";
import ParkingLotDispatch from "../views/dispatch/ParkingLotDispatch";
import store from '../store'
import socketApi from '../api/websocket'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'employee/parkingBoy',
          name: 'ParkingBoy',
          component: ParkingBoy
        },
        {
          path: 'employee/manager',
          name: 'Manager',
          component: Manager
        },
        {
          path: 'parkingLot',
          name: 'ParkingLot',
          component: ParkingLot
        },
        {
          path: 'order',
          name: 'Order',
          component: Order
        },
        {
          path: 'parkingLotDispatch',
          name: 'ParkingLotDispatch',
          component: ParkingLotDispatch
        },
      ]
    }
  ]
})


router.beforeEach((to, from, next) => {
  let isLogin = localStorage.getItem('token') !== null
  let role = localStorage.getItem('role')
  const whiteList = ['Login']
  if (whiteList.indexOf(to.name) === -1) {
    if (!isLogin) {
      return next({path: '/login'})
    }
    if (localStorage.getItem('role') === 'ADMIN' && !store.getters.websocket.url) {
      store.commit('setWebSocket', socketApi())
    }
  }
  if (to.name === 'Login') {
    if (isLogin) {
      return next({path: '/'})
    }else {
      return next({path: '/login'})
    }
  }
  next()
})

export default router
