<template>
  <div id="plDDialog">
    <el-dialog title="添加停车场" :visible.sync="dialogFormVisible"  :modal-append-to-body='false'>
      <el-form :model="form">
        <el-form-item label="停车场名称" :label-width="formLabelWidth">
          <el-input v-model="form.parkingLotName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="停车场容量" :label-width="formLabelWidth">
          <el-input v-model="form.capacity" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitParkingLot">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: "ParkingLotDispatchDialog",
    data(){
      return{
        dialogFormVisible: false,
        form: {
          parkingLotName: '',
          capacity: '',
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      showDialog(id){
        
        this.dialogFormVisible = true
      }
    }
  }
</script>

<style scoped>

</style>
