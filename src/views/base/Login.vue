<template>
  <div id="login">
    <h1>White Give 停车后台管理系统</h1>
    <div id="userForm">
      <el-input
        placeholder="请输入用户名"
        v-model="userForm.username"
        clearable style="padding-bottom: 10px" >
      </el-input>
      <el-input placeholder="请输入密码" v-model="userForm.password" show-password ></el-input>
      <el-button type="primary " @click="login" id="loginButton">登录</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data () {
      return {
        userForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        this.$store.dispatch('userLogin', this.userForm).then(() => {
          this.$router.push({path: '/'})
        })
      }
    }
  }
</script>

<style scoped>

  #userForm {
    width: 80%;
    margin-left: 10%;
  }

  #login {
    margin-top: 10%;
  }

  #loginButton {
    width: 80%;
  }
  .el-input{
    padding-bottom: 10px;
    width: 80%;
  }
</style>
