<template>
  <div id="order">
    <el-table
      :data="orderList"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="300"
      >
      </el-table-column>
      <el-table-column
        prop="orderStatus"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="开始时间">
      </el-table-column>
      <el-table-column
        prop="endTime"
        label="结束时间">
      </el-table-column>
      <el-table-column
        prop="user.username"
        label="用户">
      </el-table-column>
      <el-table-column
        prop="carNumber"
        label="车辆">
      </el-table-column>
      <el-table-column
        prop="parkingBoy.username"
        label="停车员">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <!--<el-button @click="edit(scope.row.id)" type="text" size="small">查看</el-button>-->
          <el-button type="text" size="small" @click="">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="totalElements" @current-change="handleCurrentChange" :current-page="currentPage">
    </el-pagination>
  </div>

</template>

<script>


  import {findAllOrder} from "../../api/sysadmin/order";

  export default {
    name: "Order",
    data() {
      return {
        orderList: [],
        totalElements: 0,
        currentPage: 1
      }
    },
    mounted() {
      this.findAllOrder(1)
    },
    methods: {
      handleCurrentChange(val) {
        findAllOrder(val).then((res) => {
          this.currentPage = val
          this.totalElements = res.totalElements
          this.orderList = res.content
        })
      },
      add() {
        this.$refs.plDialog.showDialog("")
      },
      findAllOrder(page) {
        findAllOrder(page).then((res) => {
          this.totalElements = res.totalElements
          this.orderList = res.content
        })
      },
      // edit(id) {
      //   this.$refs.plDialog.showDialog(id)
      // },
      deleteItem(id) {
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
            // this.currentPage = (this.totalElements - 1) >= (this.currentPage - 1) * 10 + 1 ? this.currentPage : this.currentPage - 1
            this.findAllParkingLot(1)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      refresh() {
        // this.currentPage = (this.totalElements + 1) >= (this.currentPage - 1) * 10 + 1 ? this.currentPage + 1 : this.currentPage
        this.findAllOrder(1)
      }
    }

  }
</script>

<style scoped>
</style>
