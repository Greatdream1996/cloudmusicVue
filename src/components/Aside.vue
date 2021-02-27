<template>
  <div class="aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
    >
    <router-link :to="item.url" v-for="item in title" :key="item.name">
      <el-menu-item  >
        <span>{{item.name}}</span>
      </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: [
        { name: '发现音乐', url: '/discover' },
        { name: '视频', url: '/video' },
        { name: '朋友', url: '/firend' },
        { name: '直播', url: '/live' },
        { name: '私人FM', url: '/privateFm' }
      ]
    }
  }
}
</script>

<style lang="less">
.aside {
  padding: 15px;
  background-color: #fff;
  border-right: 1px solid rgb(156, 156, 156);
  .title {
    height: 35px;
    line-height: 35px;
    text-align: left;
  }
  .el-menu {
    border: 0;
  }
  .el-menu-item {
    text-align: left;
    height: 40px;
    line-height: 40px;
    padding: 0 !important;
  }
}
</style>
