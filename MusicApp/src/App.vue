<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
    <Footer></Footer>
    <audio src=""></audio>
  
  </div>
</template>

<script>
import Nav from './components/commons/Nav'//引入组件 
import Header from './components/commons/Header'//引入组件 
import Footer from './components/commons/Footer'//引入组件 

export default {
  name: 'App',
  components: {
    Nav,Header,Footer
  },
   data () {
    return {
		
    }
  }
}
</script>

<style>

</style>
