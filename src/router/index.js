import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/base/Login'
import Home from '@/views/base/Home'
import ParkingBoy from "@/views/employee/ParkingBoy";
import Manager from "@/views/employee/Manager";
import ParkingLot from "@/views/parkinglot/ParkingLot";
import Order from "../views/order/Order";

Vue.use(Router)

export default new Router({
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
      ]
    }
  ]
})
