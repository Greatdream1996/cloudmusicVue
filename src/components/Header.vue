<template>
  <div class="HeaderLayout">
   <TitleTabBar />
   <User />
  </div>
</template>
<script>
import TitleTabBar from '@/components/TabBar/TitleTabBar'
import User from '@/components/common/User'
export default {
  components: {
    TitleTabBar,
    User
  }
}
</script>
<style lang="less">
.HeaderLayout{
  display: flex;
  height: 60px;
  .TitleTabBar{
    flex: 1;
  }
}
</style>
