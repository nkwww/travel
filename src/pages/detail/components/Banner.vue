<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe64b;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
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
</style>
