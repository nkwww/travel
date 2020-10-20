<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions" v-if="imgs.length">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="swiper-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        // 开启页码
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // swiper插件检测到父级元素发生dom结构变化，便自我刷新，解决宽度计算错误的问题
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    position: fixed
    z-index: 90
    left: 0
    right: 0
    top: 0
    left: 0
    bottom: 0
    background: #000
    display: flex
    flex-direction: column
    justify-content: center
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
    .swiper-img
      width: 100%
    .swiper-pagination
      color: #fff
      font-size: .24rem
      position: absolute
      bottom: -4rem
</style>
