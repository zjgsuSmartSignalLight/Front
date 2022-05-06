import App from './App'

// #ifndef VUE3
import Vue from 'vue'

//导入页面组件
import home from './pages/home/home.vue'
Vue.component('home',home)

import monitor from './pages/monitor/home.vue'
Vue.component('monitor',monitor)

import heatmap from "./pages/monitor/heatmap.vue"
Vue.component('heatmap',heatmap)

import pointMonitor from "./pages/monitor/pointMonitor.vue"
Vue.component('pointMonitor',pointMonitor)

import violation from "./pages/monitor/violation.vue"
Vue.component('violation',violation)

import viodetail from "./pages/monitor/violationDetail.vue"
Vue.component('viodetail',viodetail)



Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif