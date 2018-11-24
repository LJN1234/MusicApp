<template>
  <div id="app">
    
    <router-view></router-view>
    <Footer></Footer>
    <audio src=""></audio>
  
  </div>
</template>

<script>
import Footer from './components/commons/Footer'//引入组件 

export default {
  name: 'App',
  components: {Footer},
   data () {
    return {
		
    }
  }
}
</script>

<style>

</style>
