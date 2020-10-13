<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li v-for="item of recommendList" :key="item.id" class="item border-bottom">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/74/a665dfecf12ae.jpg_r_640x214_5d22909a.jpg',
        title: '南昌必游TOP10',
        desc: '看山看水，看看历史对南昌的浸润'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1509/6e/49ebb42da82957.jpg_r_640x214_29dfe99b.jpg',
        title: '南昌秋天美',
        desc: '深秋的南昌，秋风徐徐，落叶极美'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/df/9bcc134d126bc4.jpg_r_640x214_58a1f389.jpg',
        title: '陶醉青山绿水',
        desc: '一年四季景色秀丽，层峦叠嶂，岩石高高耸立，白雾弥漫，犹如人间仙境'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    color: #212121
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
  .item-img
    width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      color: #212121
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #616161
      ellipsis()
</style>
