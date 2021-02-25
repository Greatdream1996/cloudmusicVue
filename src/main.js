import Vue from 'vue'
import Login from '@/components/common/Login'
import router from './router'
// import store from './store'
import ElementUI from 'element-ui'
import './assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css'
import './elementUI'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  // store,
  render: h => h(Login)
}).$mount('#app')
