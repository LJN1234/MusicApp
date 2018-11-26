import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		isShowAside:false,
		currentUser: false,
		userName: '',
		taken: '',
		// login:false
		login:window.localStorage.getItem('login')?window.localStorage.getItem('login'):false
	},
	mutations:{
		chageShowAside(state,val1){
			state.isShowAside=val1
		},
		chageLogin(state,val2){
			state.login=val2
		},
		chageUserName(state,val3){
			state.userName=val3
		}
	}
})
