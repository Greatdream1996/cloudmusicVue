import Vue from 'vue'
import router from './router'
// import store from './store'
import ElementUI from 'element-ui'
import './assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css'
import './elementUI'
import './request/Request'
import App from '@/App'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
