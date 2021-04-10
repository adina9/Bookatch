import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/global.scss'
Vue.config.productionTip = false

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
