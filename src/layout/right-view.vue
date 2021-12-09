<template>
  <div id="app">
    <!--    显示我们的内容-->
    <div class="content-title-box">右边标题</div>
    <div class="content-box">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

</script>
<style>
.content-title-box{
  padding: 10px;
  border-bottom: solid 1px #e6e6e6;
}
.content-box{
  padding: 10px;
}
</style>
