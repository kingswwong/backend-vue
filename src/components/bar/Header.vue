<template>
  <div id="header">
    <span style="color: orange;" @click="logout">退出</span>
    <span style="color: orange;" @click="logout">您好,{{roleName}}</span>
    <span style="color: orange;">紧急订单{{emergentcyOrder}}个</span>
  </div>
</template>

<script>
  export default {
    name: "Header",
    computed:{
      emergentcyOrder(){
        return this.$store.getters.orderList.length
      },
      roleName(){
        return localStorage.getItem('role')
      }
    },
    methods: {
      logout(){
        this.$store.dispatch('logout').then(() => {
          this.$router.push({path: '/login'})
        })
      }
    }
  }
</script>

<style scoped>
  #header {
    background-color: black;
  }
</style>
