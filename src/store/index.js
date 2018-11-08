import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import action from '@/store/actions'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {type: ''},
  strict: true,
  getters: getters,
  mutations: mutations,
  actions: action
})
export default store
