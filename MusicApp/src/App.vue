<template>
  <div id="app">
    
   <Header v-if="header_show"></Header>
    <Nav v-if="nav_show"></Nav>
    <router-view  v-on:public_header="public_header" v-on:public_nav="public_nav"></router-view>
  
  
  </div>
</template>

<script>
import Nav from './components/commons/Nav'//引入组件 
import Header from './components/commons/Header'//引入组件 
export default {
  name: 'App',
   components: {Nav,Header},
   data () {
    return {
			header_show:true,
			nav_show:true,
			footer_show:true,
    }
  },
   methods:{
      //是否显示头部
      public_header:function (bool) {
        this.header_show = bool;
      },
      //是否显示nav
       public_nav:function (bool) {
        this.nav_show = bool;
      }
  }
}
</script>

<style>

</style>
