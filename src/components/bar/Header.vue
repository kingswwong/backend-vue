<template>
  <div id="header">
    <span style="color: orange;" @click="logout">退出</span>
  </div>
</template>

<script>
  export default {
    name: "Header",
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
