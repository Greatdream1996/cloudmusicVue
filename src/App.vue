<template>
  <el-container class="root">
    <el-header>
      <el-row>
        <el-col :span="12">
          <Header />
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="header">
      <el-aside width="200px">
        <Aside/>
      </el-aside>
      <el-container class="body">
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <el-container class="footer">
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
import Header from '@/components/Header'
import Aside from '@/components/Aside'
export default {
  components: {
    Header,
    Aside
  }
}
</script>
<style lang="less">
@themered: #f54058;
@fontColor: #fff;
.root {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1022px;
  height: 670px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
  color: @fontColor;
}
.body {
  height: 535px;
}

.el-container {
  margin: 0 !important;
}
.el-header {
  height: 60px;
  line-height: 60px;
  background-color: @themered;
}
.el-footer {
  background-color: @themered;
  color: #333;
  text-align: center;
  line-height: 75px;
  height: 75px !important;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
