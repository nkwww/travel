<template>
  <div class="list" ref="wrapper">
    <!-- 为了满足better-scroll的dom结构 -->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wraper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(value, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list" v-for="item of value" :key="item.id">
          <div class="item border-bottom">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  watch: {
    letter () {
      // 获取的是一个数组而不是dom元素
      const elements = this.$refs[this.letter]
      const element = elements[0]
      if (this.letter) {
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  // 控制所有一像素边框的颜色
  .border-topbottom
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
  // 利用了绝对布局相对于页面，从而设置高度
  // 利用高度设置overflow: hidden，消除滚动条
  // 利用betterscroll插件实现类型APP的滚动
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eeeeee
      padding-left: .2rem
      color: #666
    .button-list
    // 触发bfc消除高度坍塌
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wraper
        width: 33.33%
        float: left
        .button
          padding: .1rem
          text-align: center
          margin: .1rem
          border: .02rem solid #ccc
          border-radius: .06rem;
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
