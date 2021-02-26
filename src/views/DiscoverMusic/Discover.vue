<template>
  <div>
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="个性推荐"
        name="first"
      >
        <Swiper :banner="this.banner"/>
        <SongSheet/>
      </el-tab-pane>
      <el-tab-pane
        label="歌单"
        name="second"
      >配置管理</el-tab-pane>
      <el-tab-pane
        label="主播电台"
        name="third"
      >角色管理</el-tab-pane>
      <el-tab-pane
        label="排行版"
        name="fourth"
      >定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Swiper from '@/components/common/Swiper'
export default {
  mounted: function () {
    this.getBanner()
  },
  data () {
    return {
      activeName: 'first',
      banner: []
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    async getBanner () {
      const { banners } = await this.$get('/banner', 0)
      const newbanners = banners.map((item) => { return item.imageUrl })
      this.banner = newbanners
    }
  },
  components: {
    Swiper
  }
}
</script>

<style lang="less">
.el-tabs__active-bar {
  background-color: #f54058;
}
.el-tabs__item.is-active {
  color: #f54058;
  font-size: 18px;
}
.el-tabs__nav-wrap::after {
  width: 0;
}
.el-tabs__item:hover {
  color: #f54058;
}
.el-tabs__item {
  padding: 0 10px;
}
</style>
