<template>
  <div class="UserLayout">
    <div class="usermsg">
      <img :src="user.img" alt="">
      <div>{{user.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.getUserMsg()
  },
  data () {
    return {
      user: {
        img: '',
        name: ''
      }
    }
  },
  methods: {
    async getUserMsg () {
      const uid = window.sessionStorage.getItem('token')
      const { profile } = await this.$get('/user/detail', { uid })
      this.user.name = profile.nickname
      this.user.img = profile.avatarUrl
    }
  }
}
</script>

<style lang="less">
.UserLayout{
  flex: 1;
  margin-left: 30px;
  display: flex;
  align-items: center;
  .usermsg{
    height: 30px;
    line-height: 30px;
    display: flex;
    img{
      height: 100%;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
