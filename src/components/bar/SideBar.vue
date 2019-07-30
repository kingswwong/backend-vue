<template>
  <div id="sideBar" style="height: 100%">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="black"
      text-color="#fff"
      :router="true"
      active-text-color="#ffd04b" style="height: 100%">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>员工管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/employee/parkingBoy" >停车员管理</el-menu-item>
          <el-menu-item index="/employee/manager">管理员管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/parkingLot">
        <i class="el-icon-document"></i>
        <span slot="title">停车场管理</span>
      </el-menu-item>
      <el-menu-item index="/order">
        <i class="el-icon-setting"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="/parkingLotDispatch">
        <i class="el-icon-setting"></i>
        <span slot="title">停车场分配</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "SideBar",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
