import Vue from 'vue'// vue实例
import Router from 'vue-router' //vue router


import Home from '../components/pages/Home/Home' //首页
import Leaderboard from '../components/pages/Leaderboard/Leaderboard' //榜单
import Login from '../components/pages/Mine/Login' //登录
import Reg from '../components/pages/Mine/Reg' //注册
import Singer from '../components/pages/Singer/Singer' //歌手
import Search from '../components/pages/Search/Search' //搜索
import searchResult from '../components/pages/Search/searchResult'
import ResultSingle from '../components/pages/Search/ResultSingle'
import ResultSinger from '../components/pages/Search/ResultSinger'
import ResultSheet from '../components/pages/Search/ResultSheet'
import ResultMv from '../components/pages/Search/ResultMv'

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
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      component: searchResult,
      children:[
      	{
      		path: '/resultSingle',//匹配的hash地址
		      name: 'ResultSingle',//路由的名字
		      component: ResultSingle// 该路由所引用的组件
      	},
      	{
      		path: '/resultSinger',//匹配的hash地址
		      name: 'ResultSinger',//路由的名字
		      component: ResultSinger// 该路由所引用的组件
      	},
      	{
      		path: '/resultSheet',//匹配的hash地址
		      name: 'ResultSheet',//路由的名字
		      component: ResultSheet// 该路由所引用的组件
      	},
      	{
      		path: '/resultMv',//匹配的hash地址
		      name: 'ResultMv',//路由的名字
		      component: ResultMv// 该路由所引用的组件
      	}
      ]
    }
  ]
})


