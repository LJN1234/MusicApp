import Vue from 'vue'// vue实例
import Router from 'vue-router' //vue router


import Home from '../components/pages/Home/Home' //某一个组件
import Leaderboard from '../components/pages/Leaderboard/Leaderboard' //某一个组件
import Mine from '../components/pages/Mine/Mine' //某一个组件
import Mine1 from '../components/pages/Mine/Mine1' //某一个组件
import Mine2 from '../components/pages/Mine/Mine2' //某一个组件
import Login from '../components/pages/Mine/Login' //某一个组件
import Reg from '../components/pages/Mine/Reg' //某一个组件
import Singer from '../components/pages/Singer/Singer' //某一个组件
import Type from '../components/pages/Type/Type' //某一个组件

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
      path: '/Leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    },
    {
      path: '/Singer',//匹配的hash地址
      name: 'Singer',//路由的名字
      component: Singer// 该路由所引用的组件
    },
    {
      path: '/Type',
      name: 'Type',
      component: Type
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
      children:[
        {path:'Login',name:'Login',component:Login},
        {path:'Reg',name:'Reg',component:Reg},
        {path:'Mine1',name:'Mine1',component:Mine1},
        {path:'Mine2',name:'Mine2',component:Mine2}

      ]
    }
  ]
})


