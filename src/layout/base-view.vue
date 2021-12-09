<template>
  <div id="app">
    <!--    显示我们的内容-->
    <el-container>
      <el-header id="admin-header-box">顶部内容</el-header>
      <el-container>
        <el-aside id="left-menu-list-box" width="200px">
          <left-menu></left-menu>
        </el-aside>
        <el-container>
          <el-main>
            <div class="content">
              <router-view></router-view>
            </div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
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
.el-header, .el-footer {
  background-color: dodgerblue;
  color: #333;
  text-align: center;
  line-height: 46px;
  height: 46px !important;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
