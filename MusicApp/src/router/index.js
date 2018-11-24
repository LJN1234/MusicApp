import Vue from 'vue'// vue实例
import Router from 'vue-router' //vue router


import Home from '../components/pages/Home/Home' //首页
import Login from '../components/pages/Login/Login' //登录
import Reg from '../components/pages/Reg/Reg' //注册
import Singer from '../components/pages/Singer/Singer' //歌手
import Search from '../components/pages/Search/Search' //搜索
import searchResult from '../components/pages/Search/searchResult'
import ResultSingle from '../components/pages/Search/ResultSingle'
import ResultSinger from '../components/pages/Search/ResultSinger'
import ResultSheet from '../components/pages/Search/ResultSheet'
import ResultMv from '../components/pages/Search/ResultMv'
import MusicList from '../components/commons/MusicList'
import ListContent from '../components/pages/Leaderboard/ListContent'  //榜单列表
import LeaderList from '../components/pages/Leaderboard/LeaderList'  //具体榜单内容

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
      path: '/listContent/:id',
      name: 'ListContent',
      component: ListContent
    },
    {
      path: '/musicList',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/leaderList',
      name: 'LeaderList',
      component: LeaderList
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
		   path: '/login',
		   name: 'Login',
		   component: Login
	 },
		{
		  path: '/reg',
		   name: 'Reg',
		  component: Reg
		},
    {
      path: '/searchResult',
      name: 'searchResult',
      component: searchResult,
      children:[
      	{
      		path: 'searchResult/resultSingle',//匹配的hash地址
		      name: 'ResultSingle',//路由的名字
		      component: ResultSingle// 该路由所引用的组件
      	},
      	{
      		path: 'searchResult/resultSinger',//匹配的hash地址
		      name: 'ResultSinger',//路由的名字
		      component: ResultSinger// 该路由所引用的组件
      	},
      	{
      		path: 'searchResult/resultSheet',//匹配的hash地址
		      name: 'ResultSheet',//路由的名字
		      component: ResultSheet// 该路由所引用的组件
      	},
      	{
      		path: 'searchResult/resultMv',//匹配的hash地址
		      name: 'ResultMv',//路由的名字
		      component: ResultMv// 该路由所引用的组件
      	}
      	
      ]
    }
  ]
})


