// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/animate.css/animate.css'
import './styles/commons/base.css'
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import Axios from 'axios'
// 引入 vuex 
import  store from './store/index.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//post请求信息
Axios.interceptors.request.use(function (config) {
	console.log(config)
    return config;
 }, function (error) {
    return Promise.reject(error);
});
//请求拦截
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

Vue.prototype.$axios=Axios //挂载axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
