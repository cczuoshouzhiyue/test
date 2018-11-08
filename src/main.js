// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Routers from '@/router/index'
import store from '@/store/index'
import '@/directive/directive'
import './util/http'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
let plugins = [ElementUI, VueRouter]
plugins.map(plg => Vue.use(plg))

const router = new VueRouter({
  mode: 'hash',
  routes: Routers
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
