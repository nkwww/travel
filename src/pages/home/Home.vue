<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'Vuex'

export default {
  // 组件名字
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  // 用computed属性保存state中的city
  computed: {
    ...mapState({city: 'city'})
  },
  methods: {
    getHomeInfo () {
      // 本地模拟接口地址
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // 只需要data数据
      res = res.data
      // 如果后端正确返回了数据，并且res中的data对象中有data数据
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  // 借助生命周期函数发送Ajax请求
  // 每次路由切换的时候，页面都会被重新渲染，然后执行mouted钩子，然后ajax数据就会被重新获取
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 页面重新被显示的时候,keepAlive新增的生命周期钩子函数
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>
