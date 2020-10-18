<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1809/e2/e2e7b7aa3a6db5bea3.img.jpg_600x330_98fa184d.jpg" />
      <div class="banner-info">
        <div class="banner-title">“遨天一号”太空科技体验馆</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe64b; 27</span></div>
      </div>
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1809/e2/e2e7b7aa3a6db5bea3.img.jpg_r_800x800_ec36f992.jpg',
        'http://img1.qunarzz.com/sight/p0/1809/9c/9cba899d5df8910aa3.img.jpg_r_800x800_8890796d.jpg',
        'http://img1.qunarzz.com/sight/p0/1809/de/def6c6384bd21e5ba3.img.jpg_r_800x800_3020f29f.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  // 解决因点击返回按钮而导致触发点击事件，导致showGallary的值变为ture，引发下次点击时直接显示Gallary组件
  activated () {
    this.showGallary = false
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-info
      color: #fff
      position: absolute
      display: flex
      left: .2rem
      right: .2rem
      bottom: 0
      line-height: .6rem
      background-image: linear-gradient(top, rgba(0, 0, 0, 0,), rgba(0, 0, 0, 0.8))
      .banner-title
        font-size: .36rem
        flex: 1
      .banner-number
        // margin-top: .24rem
        padding: 0 .4rem
        line-height: .32rem
        margin-top: .14rem
        height: .32rem
        font-size: .24rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
      .banner-icon
        font-size: .24rem
    .header-back
      position: absolute
      top: 0
      left: 0
      height: .86rem
      line-height: .72rem
      color: #fff
      width: .64em
      font-size: .4rem
      margin-left: .3rem
      margin-top: .1rem
</style>
