<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        // 开启页码
        pagination: '.swiper-pagination',
        // 开启循环轮播
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1805/85/e6b50bc669369e02.jpg_890x330_863ddd2a.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20208/91d516ade2556cb2f64aae392e6b35ce.jpg_890x330_ba143e24.jpg'
      }, {
        id: '0003',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/fef4fef657f11d49ce6578a961e605e3.png_890x330_8899daa6.png'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
// ‘>>>’ 穿透，使之不受scoped限制
>>>.swiper-pagination-bullet-active
// 设置点的颜色为白色
    background: #fff !important
  .swiper-img
    width: 100%
</style>
