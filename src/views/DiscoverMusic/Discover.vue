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
        <h3 class="listTitle">推荐歌单</h3>
        <SongSheet :songlist="this.songlist" />
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
    <router-view></router-view>
  </div>
</template>

<script>
import Swiper from '@/components/common/Swiper'
import SongSheet from '@/components/common/SongSheet'
export default {
  mounted: function () {
    this.getBanner()
    this.getRecommendList()
  },
  data () {
    return {
      activeName: 'first',
      banner: [],
      songlist: []
    }
  },
  methods: {
    // tap点击处理函数
    handleClick (tab, event) {
    },
    // 获取轮播图数据
    async getBanner () {
      const { banners } = await this.$get('/banner', 0)
      const newbanners = banners.map((item) => { return item.imageUrl })
      this.banner = newbanners
    },
    async getRecommendList () {
      const { result } = await this.$get('/personalized', { limit: 10 })
      this.songlist = result
    }
  },
  components: {
    Swiper,
    SongSheet
  }
}
</script>

<style lang="less">
.listTitle{
  text-align: left;
  padding-bottom: 15px;
}
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
