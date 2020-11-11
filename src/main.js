import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import $ from 'jquery'
Vue.config.productionTip = false

// Vue.use(jQuery)

new Vue({
  render: h => h(App),
  router,
  $,
}).$mount('#app')
