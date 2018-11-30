import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		isShowAside:false,
		login:window.localStorage.getItem('login')?window.localStorage.getItem('login'):false,
		nowPlay:false,
		nowSong:window.localStorage.getItem('nowSong')?window.localStorage.getItem('nowSong'):'',
		playList:window.localStorage.getItem('songInfo')?window.localStorage.getItem('songInfo'):'',

	},
	mutations:{
		chageShowAside(state,isShowAside){
			state.isShowAside=isShowAside
		},
		chageLogin(state,login){
			state.login=login
		},
		changeNowPlay(state,nowPlay){
			state.nowPlay=nowPlay
		},
		changeNowSong(state,nowSong){
			state.nowSong=nowSong
		},
		changePlayList(state,playList){
			state.playList=playList
		}
	}
})
