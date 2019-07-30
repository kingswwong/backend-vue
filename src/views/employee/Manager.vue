<template>
  <div id="manager">
    经理
    <el-row>
      <el-col :span="12" :offset="12" style="height: 100px"><el-button type="primary">添加</el-button></el-col>
    </el-row>
    <el-table
      :data="managerList"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话号码">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small" @click="freze(scope.row.id)">冻结</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
  </div>
</template>

<script>
  import {findAllUserByStatus, lockUser} from "@/api/sysadmin/user";

  export default {
    name: "ParkingBoy",
    data(){
      return{
        managerList: []
      }
    },
    mounted:{

    },
    methods: {
      findAllManager(){
        // findAllUserByStatus().then((res) => {
        //   this.parkingBoyList = res
        // })
      },
      edit(id) {

      },
      freze(id) {
        // lockUser(id).then((res) => {
        //   this.$message({
        //     message: `删除${res.username}成功`,
        //     type: 'success'
        //   });
        // })
      }
    }

  }
</script>

<style scoped>
</style>
