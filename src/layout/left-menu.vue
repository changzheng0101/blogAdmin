<template>
  <div>
    <el-menu default-active="1-0"
             :unique-opened="true"
    >
      <!--      遍历菜单的内容-->
      <!--      有两种情况 第一种：没有子菜单 第二种：还有子菜单-->
      <template v-for="(item,index) in menuList">
        <!--        如果没有child-->
        <el-menu-item :index="String(index)" :key="index" v-if="!item.children">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>

        <!--        拥有child 遍历child-->
        <el-submenu v-else :key="String(index)" :index="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item :index="index+'-'+subIndex" v-for="(subItem,subIndex) in item.children"
                        :key="subIndex">
            <i :class="subItem.icon"></i>
            <span v-text="subItem.name"></span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {routes} from "../main";

export default {
  data() {
    return {
      menuList: []
    }
  },
  mounted() {
    let menuList = routes[1];
    this.menuList = menuList.children;
    console.log(this.menuList)
  }
};
</script>

<style>

</style>