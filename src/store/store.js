import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
  state:{
    username:localStorage.getItem('username')
  },
  mutations:{
      changename(state,username) {
          state.username = username
          localStorage.setItem('username',username)
      }
  },
  getters:{}
})
export default store 