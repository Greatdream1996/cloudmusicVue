<template>
  <div>
    <div class="SongList">
      <div class="topHeader"><img
          :src="playlist.coverImgUrl"
          alt=""
        ></div>
      <div class="topHeaderMsg">
        <h3><span class="tags">歌单</span>{{playlist.name}}</h3>
        <div class="creator">
          <img :src="creator.avatarUrl" alt="">
          <span>{{creator.nickname}}</span>
          <span>{{handleTime}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.getSongDetails()
  },
  data () {
    return {
      playlist: {},
      tracks: [],
      creator: {
        avatarUrl: '',
        nickname: ''
      },
      tags: []
    }
  },
  methods: {
    async getSongDetails () {
      const { playlist } = await this.$get('/playlist/detail', {
        id: this.$route.params.id
      })
      console.log(playlist)
      this.tracks = playlist.tracks
      this.creator.avatarUrl = playlist.creator.avatarUrl
      this.creator.nickname = playlist.creator.nickname
      this.tags = playlist.tags
      this.handleData(playlist)
    },
    handleData (obj) {
      const newobj = {}
      for (const key in obj) {
        if (typeof obj[key] !== 'object') {
          newobj[key] = obj[key]
        }
      }
      this.playlist = newobj
    }
  },
  computed: {
    handleTime: function () {
      const createTime = new Date(this.playlist.createTime)
      const Year = createTime.getFullYear()
      const Month = createTime.getMonth()
      const Day = createTime.getDate()
      return Year + '年' + Month + '月' + Day + '日' + '创建'
    }
  }
}
</script>

<style lang="less" scoped>
.SongList{
  margin-top: 15px;
  margin-left: 20px;
  display: flex;
}
.topHeader {
  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 0,0,5px rgba(0, 0, 0, 0.5);
  }
}
.topHeaderMsg{
  margin-left:10px;
  .tags{
    font-size: 12px;
    border: 1px solid #f54058;
    color: #f54058;
    padding: 2px;
    margin-right: 10px;
  }
  .creator{
    margin-top: 10px;
    img{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      vertical-align: bottom;
    }
    span{
      margin-left:10px ;
      font-size: 15px;
    }
  }
}
</style>
