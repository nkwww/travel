<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <!-- 跳转路由 -->
    <router-link to='/city'>
      <div class="header-right">
        {{ this.city }}
      <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  // 组件名字
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

// 2rem = 100px
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      line-height: .64rem
      height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      color: #ccc
      border-radius: .1rem
    .header-right
      width: 1.24rem
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .24rem
        margin-left: -0.04rem
</style>
