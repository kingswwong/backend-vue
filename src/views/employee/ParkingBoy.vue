<template>
  <div id="parkingboy">
    <el-row>
      <el-col :span="12" :offset="12" style="height: 100px"><el-button type="primary" @click="add">添加</el-button></el-col>
    </el-row>
    <el-table
      :data="parkingBoyList"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="300"
      >
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="300">
      </el-table-column>
      <el-table-column
        prop="phone"
        width="300"
        label="电话号码">
      </el-table-column>
      <el-table-column
        width="300"
        label="账号状态">
        <template slot-scope="scope">
          <el-switch
            v-model="!scope.row.locked"
            active-text="解锁"
            inactive-text="冻结"
            @change="changeLock(scope.row)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small" @click="deleteItem(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="totalElements"  @current-change="handleCurrentChange" :current-page="currentPage">
    </el-pagination>
    <ParkingBoyDialog ref="pbDialog" @refresh="refresh"/>
  </div>

</template>

<script>

  import {findAllUserByStatus, deleteUser,updateUser} from "../../api/sysadmin/user";
  import ParkingBoyDialog from "../../components/dialog/ParkingBoyDialog";

  export default {
    name: "ParkingBoy",
    components: {ParkingBoyDialog},
    data(){
      return{
        parkingBoyList: [],
        totalElements: 0,
        currentPage: 1
      }
    },
    mounted(){
      this.findAllUserByStatus(1)
    },
    methods: {
      handleCurrentChange(val){
        findAllUserByStatus("PARKING_BOY",val).then((res) => {
          this.currentPage = val
          this.totalElements = res.totalElements
          this.parkingBoyList = res.content
        })
      },
      changeLock(user){
        user.locked = !user.locked
        user.roles = "PARKING_BOY"
        updateUser(user, user.id).then(() => {
          this.$message({
            type: 'success',
            message: '更新停车员账号状态成功'
          });
        })
      },
      add(){
        this.$refs.pbDialog.showDialog("")
      },
      findAllUserByStatus(page){
        findAllUserByStatus("PARKING_BOY",page).then((res) => {
          this.totalElements = res.totalElements
          this.parkingBoyList = res.content
        })
      },
      edit(id) {
        this.$refs.pbDialog.showDialog(id)
      },
      deleteItem(id) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteUser(id).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            // this.currentPage = (this.totalElements - 1) >= (this.currentPage - 1) * 10 + 1 ? this.currentPage : this.currentPage - 1
            this.findAllUserByStatus(1)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      refresh(){
        // this.currentPage = (this.totalElements + 1) >= (this.currentPage - 1) * 10 + 1 ? this.currentPage + 1 : this.currentPage
        this.findAllUserByStatus(1)
      }
    }

  }
</script>

<style scoped>
</style>
