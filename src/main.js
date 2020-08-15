import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import Css from './css/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(Css);
Vue.use(Buefy);