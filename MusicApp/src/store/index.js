import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		isShowAside:false,
		login:false
	},
	mutations:{
		chageShowAside(state,val1){
			state.isShowAside=val1
		},
		chageLogin(state,val2){
			state.isShowAside=val2
		}
	}
})
