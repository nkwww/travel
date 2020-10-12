<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li v-for="item of recommendList" :key="item.id" class="item border-bottom">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1809/94/94765697f2e7377ca3.img.jpg_200x200_5626fcf4.jpg',
        title: '遨天一号”太空科技体验馆',
        desc: '综合性太空科技体验馆'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
        title: '东部华侨城',
        desc: '唯美、动感的生态主题乐园'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201307/24/bba9e719d5ce1620c8d65eac.jpg_200x200_76792dbf.jpg',
        title: '大鹏古城',
        desc: '建筑规模宏伟，保存完好'
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
    background: #ccc
    text-indent: .2rem
  .item
    overflow hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      // 多的文字省略为...
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
</style>
