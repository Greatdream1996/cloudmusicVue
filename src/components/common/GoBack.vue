<template>
  <div class="goback">
    <el-button
      @click="black"
      icon="el-icon-back"
      circle
    ></el-button>
    <el-button
      @click="force"
      icon="el-icon-right"
      circle
    ></el-button>
  </div>
</template>
<script>
export default {
  methods: {
    black () {
      this.$router.back()
    },
    force () {
      this.$router.go(1)
    }
  }
}
</script>

<style lang="less">
.goback {
  .el-button {
    padding: 0;
    width: 26px;
    height: 26px;
    background-color: crimson;
    border: 0;
    color: #fff;
  }
}
</style>>
