<template>
  <div id="app">
    
   <Header v-if="header_show"></Header>
    <Nav v-if="nav_show"></Nav>
    <router-view  v-on:public_header="public_header" v-on:public_nav="public_nav" 
    	v-on:public_footer="public_footer"  v-on:public_radio="public_radio" ></router-view>
    <Footer v-if="footer_show"></Footer>
    <!--<audio src="" v-if="audio_show"></audio>-->
    <Radio v-if="radio_show"></Radio>
  
  
  </div>
</template>

<script>
import Nav from './components/commons/Nav'//引入组件 
import Header from './components/commons/Header'//引入组件 
import Footer from './components/commons/Footer'//引入组件 
import Radio from './components/pages/Home/Radio'
export default {
  name: 'App',
   components: {
    Nav,Header,Footer,Radio
  },
   data () {
    return {
				 header_show:true,
			 nav_show:true,
			  footer_show:true,
			 radio_show:true,
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
      },
      //是否显示底部
      public_footer:function (bool) {
          this.footer_show = bool;
      },
      public_radio:function (bool) {
          this.radio_show = bool;
      }
  }
}
</script>

<style>

</style>
