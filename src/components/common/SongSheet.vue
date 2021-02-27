<template>
  <div>
    <ul class="song">
      <li v-for="item in songlist" :key="item.id">
        <router-link :to="'/songdetails/'+item.id">
        <img :src="item.picUrl" alt="">
        <span><i class="el-icon-video-play"></i>{{getPlayCount(item.playCount)}}</span>
        <p>{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songlist: Array
  },
  data () {
    return {
    }
  },
  mounted: function () {
  },
  methods: {
    getPlayCount: function (count) {
      return Math.trunc(count / 1000) + '万'
    }
  }
}
</script>

<style lang="less" scoped>
.song{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li{
    position: relative;
    width: 150px;
    margin-bottom: 5px;
    img{
      width: 100%;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
    span{
      position: absolute;
      top: 0;
      right: 3px;
      font-size: 12px;
      color: #fff;
    }
    p{
      text-align: left;
      font-size: 13px;
    }
  }
}
</style>
