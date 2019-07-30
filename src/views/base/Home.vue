<template>
    <div id="home">
      <el-container style="height: 100%">
        <el-aside width="200px">
          <SideBar/>
        </el-aside>
        <el-container>
          <el-header>
            <Header/>
          </el-header>
          <el-main><router-view/></el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
    import Header from "@/components/bar/Header";
    import SideBar from "@/components/bar/SideBar";
    export default {
        name: "Home",
      components: {SideBar, Header}
    }
</script>

<style scoped>
  #home{
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #333;
    color: #000000;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #000000;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

</style>
