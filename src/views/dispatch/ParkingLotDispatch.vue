<template>
  <div id="parkingLotDispatch">
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
        prop="parkingLot.parkingLotName"
        label="所属停车场">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="dispatchParkingLot(scope.row.id)" type="text" size="small">分配停车场</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--<el-pagination-->
      <!--layout="prev, pager, next"-->
      <!--:total="totalElements"  @current-change="handleCurrentChange" :current-page="currentPage">-->
    <!--</el-pagination>-->
    <ParkingBoyDialog ref="pDialog" @refresh="refresh"/>

  </div>

</template>

<script>

  import {findAllParkingBoy} from "../../api/admin/user";
  // import ParkingBoyDialog from "../../components/dialog/ParkingBoyDialog";

  export default {
    name: "ParkingLotDispatch",
    // components: {ParkingBoyDialog},
    data(){
      return{
        parkingBoyList: [],
        totalElements: 0,
        currentPage: 1
      }
    },
    mounted(){
      this.findAllParkingBoy()
    },
    methods: {
      // handleCurrentChange(val){
      //   findAllParkingBoy("PARKING_BOY",val).then((res) => {
      //     this.currentPage = val
      //     this.totalElements = res.totalElements
      //     this.parkingBoyList = res.content
      //   })
      // },
      dispatchParkingLot(id){

      },
      findAllParkingBoy(){
        findAllParkingBoy().then((res) => {
          // this.totalElements = res.totalElements
          this.parkingBoyList = res
        })
      },
      edit(id) {
        // this.$refs.pbDialog.showDialog(id)
      },
      refresh(){
        // this.currentPage = (this.totalElements + 1) >= (this.currentPage - 1) * 10 + 1 ? this.currentPage + 1 : this.currentPage
        this.findAllParkingBoy()
      }
    }

  }
</script>

<style scoped>
</style>
