<template>
  <div>
    <router-link to="/" tag="div" class="header-abs iconfont">&#xe624;</router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/" tag="div" class="header-fixed-back iconfont">&#xe624;</router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        const opacity = top / 140
        this.opacityStyle.opacity = opacity < 1 ? opacity : 1
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    document.documentElement.scrollTop = 0
    // 对window全局对象进行了绑定
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面即将被替换时，解绑事件
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
    document.documentElement.scrollTop = 0
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    background: rgba(0, 0, 0, .8)
    text-align: center
    line-height: .8rem
    color: #fff
  .header-fixed
    position fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    z-index: 2
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
