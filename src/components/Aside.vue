<template>
  <div class="aside">
    <h3 class="title">发现音乐</h3>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item
        v-for="item in title"
        :key="item"
      >
        <span>{{item}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ['视频', '朋友', '直播', '私人FM']
    }
  }
}
</script>

<style lang="less">
.aside {
  padding: 15px;
  background-color: #fff;
  .title {
    height: 35px;
    line-height: 35px;
    text-align: left;
  }
  .el-menu {
    border: 0;
  }
  .el-menu-item{
    text-align: left;
    height: 40px;
    line-height: 40px;
    padding: 0 !important;
  }
}
</style>
