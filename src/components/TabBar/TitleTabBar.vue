<template>
  <div class="Bar">
    <Logo />
    <div class="BarRight">
      <GoBack />
      <Search />
    </div>

  </div>

</template>

<script>
import Logo from '@/components/TabBar/Logo'
import GoBack from '@/components/common/GoBack'
import Search from '@/components/common/Search'
export default {
  components: {
    Logo,
    GoBack,
    Search
  }
}
</script>

<style lang="less">
.Bar {
  display: flex;
  justify-content: space-between;
}
.BarRight{
  display: flex;
}
</style>
