<template>
  <el-carousel
    :interval="4000"
    type="card"
    height="200px"
  >
    <el-carousel-item
      v-for="item in banner"
      :key="item"
    >
     <img class="bannerImg" :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    banner: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.bannerImg{
  height: 100%;
}
</style>
