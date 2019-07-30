<template>
  <div id="parkingLot">
    <el-row>
      <el-col :span="12" :offset="12" style="height: 100px"><el-button type="primary" @click="add">添加</el-button></el-col>
    </el-row>
    <el-table
      :data="parkingLotList"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="300"
      >
      </el-table-column>
      <el-table-column
        prop="parkingLotName"
        label="停车场名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="capacity"
        label="容量">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small" @click="delete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="totalElements"  page-sizes="10"  @current-change="handleCurrentChange">
    </el-pagination>
    <ParkingLotDialog ref="plDialog" @refresh="refresh"/>
  </div>

</template>

<script>
  import ParkingBoyDialog from "@/components/dialog/ParkingBoyDialog";
  import ParkingLotDialog from "@/components/dialog/ParkingLotDialog";
  import {findAllParkingLot, updataParkingLot, deleteParkingLotById} from "@/api/sysadmin/parkingLot";

  export default {
    name: "ParkingBoy",
    components: {ParkingLotDialog, ParkingBoyDialog},
    data(){
      return{
        parkingLotList: [],
        totalElements: 0,
        currentPage: 1
      }
    },
    mounted(){
      this.findAllParkingLot(1)
    },
    methods: {
      handleCurrentChange(){
        console.log("aaaaa")
      },
      add(){
        this.$refs.plDialog.showDialog("")
      },
      findAllParkingLot(page){
        findAllParkingLot(page).then((res) => {
          console.log(res)
          this.totalElements = res.totalElements
          this.parkingLotList = res.content
        })
      },
      edit(id) {
        this.$refs.plDialog.showDialog(id)
      },
      delete(id) {
        console.log(id)
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteParkingLotById(id).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.findAllParkingLot(1)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      changePage(e){
        console.log(e)
      },
      refresh(){
        this.findAllParkingLot(1)
      }
    }

  }
</script>

<style scoped>
</style>
