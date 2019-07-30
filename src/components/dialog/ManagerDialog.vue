<template>
  <div id="managerDialog">
    <el-dialog title="添加管理员" :visible.sync="dialogFormVisible"  :modal-append-to-body='false'>
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitAdmin">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {getUserById,createUser} from "../../api/sysadmin/user";

  export default {
    name: "ManagerDialog",
    data(){
      return{
        dialogFormVisible: false,
        form: {
          username: '',
          phone: '',
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
        if(id !== ""){
          getUserById(id).then(res => {
            this.form = res
          })
        }else{
          this.form = {
            username: '',
            phone: ''
          }
        }
        this.dialogFormVisible = true
      },
      submitAdmin(){
        let info = !this.form.id ? '创建' : '修改'
        this.form.roles = "ADMIN"
        this.form.password = "123456"
        this.form.nickname = this.form.username
        createUser(this.form).then((res) => {
          this.$message.success(`${info}管理员成功`)
          this.dialogFormVisible = false
          this.$emit('refresh')
        })
      }
    }
  }
</script>

<style scoped>

</style>
