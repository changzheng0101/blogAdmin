<template>
  <div id="app">
    <!--    显示我们的内容-->
    <el-container>
      <el-header id="admin-header-box">
        <header-view></header-view>
      </el-header>
      <el-container>
        <el-aside id="left-menu-list-box" width="200px">
          <left-menu></left-menu>
        </el-aside>
        <el-main>
          <div class="content">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  mounted() {
    //动态设置侧栏的高度
    let leftMenuBox = document.getElementById("left-menu-list-box");
    let adminHeaderBox = document.getElementById("admin-header-box");
    if (leftMenuBox && adminHeaderBox) {
      leftMenuBox.style.height = (window.innerHeight - adminHeaderBox.offsetHeight) + 'px';
    }
  }
}

</script>
<style>
.el-header {
  background-color: dodgerblue;
  line-height: 46px;
  height: 46px !important;
}
.el-menu-item.is-active{
  color: #303133;
}
.el-aside {
  line-height: 200px;
  border-right: solid 1px #e6e6e6;
  color: #333;
}

.el-main{
  padding: 0px;
}


</style>
