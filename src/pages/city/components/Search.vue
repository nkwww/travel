<template>
  <div>
    <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音" v-model="keyword">
  </div>
  <div class="search-content" v-show="keyword" ref="searchResult">
    <ul>
      <li class="search-item border-bottom" v-for="item in queryList" :key="item.id">{{ item.name }}</li>
      <li v-show="showQuery" class="search-item border-bottom">未找到查询结果</li>
    </ul>
  </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      queryList: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    showQuery () {
      return !this.queryList.length
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.searchResult)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.queryList = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      padding: 0 .1rem
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      width: 100%
      color: #666
  .search-content
    position: absolute
    top: 1.58rem
    bottom: 0
    left: 0
    right: 0
    // 为了使用Betterscorll
    overflow: hidden
    background: #eee
    z-index: 1
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #fff
</style>
