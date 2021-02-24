<template>
  <div class="search">
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="value"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less">
.search {
  margin-left: 20px;

  input {
    border-radius: 24px;
    height: 30px;
    background-color: crimson;
    border: 0;
    color: rgb(255, 255, 255);
  }
  .el-input__prefix {
    color: #fff;
  }
}
</style>
