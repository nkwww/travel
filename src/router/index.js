import Vue from 'vue'
import Router from 'vue-router'
// @指的是src目录
// 引用单文件组件
import Home from '@/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 路由名字
      name: 'Home',
      component: Home
    }
  ]
})