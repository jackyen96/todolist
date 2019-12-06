import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import './plugins/iview.js'

Vue.config.productionTip = false
Vue.use(ViewUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
