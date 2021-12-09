<template>
  <div>
    <el-menu default-active="0"
             :unique-opened="true"
             class="el-menu-vertical"
    >
      <!--      todo index的数据类型问题未解决-->
      <!--      遍历菜单的内容-->
      <!--      有两种情况 第一种：没有子菜单 第二种：还有子菜单-->
      <template v-for="(item,index) in menuList">
        <router-link :to="item.path" :index="index" :key="index.toString()" v-if="!item.children&&!item.hidden">
          <el-menu-item>
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </router-link>
        <!--        如果没有child-->

        <!--        拥有child 遍历child-->
        <el-submenu v-if="item.children&&!item.hidden" :key="String(index)" :index="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <router-link :to="item.path+'/'+subItem.path" :index="index+'-'+subIndex"
                       v-for="(subItem,subIndex) in item.children"
                       :key="subIndex">
            <el-menu-item v-if="!subItem.hidden">
              <i :class="subItem.icon"></i>
              <span v-text="subItem.name"></span>
            </el-menu-item>
          </router-link>
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
.el-menu-vertical{
  border: none;
}

.el-menu-vertical a {
  text-decoration: none;

}
</style>