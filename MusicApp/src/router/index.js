import Vue from 'vue'// vue实例
import Router from 'vue-router' //vue router


import Home from '../components/pages/Home/Home' //首页
import Leaderboard from '../components/pages/Leaderboard/Leaderboard' //榜单
import Login from '../components/pages/Mine/Login' //登录
import Reg from '../components/pages/Mine/Reg' //注册
import Singer from '../components/pages/Singer/Singer' //歌手
import Search from '../components/pages/Search/Search' //搜索

Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',//匹配的hash地址
	    redirect:'/home'//重定向
  	},
    {
      path: '/home',//匹配的hash地址
      name: 'Home',//路由的名字
      component: Home// 该路由所引用的组件
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    },
    {
      path: '/singer',//匹配的hash地址
      name: 'Singer',//路由的名字
      component: Singer// 该路由所引用的组件
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})


