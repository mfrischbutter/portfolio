import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import Css from './css/main.scss'

import Xing from 'vue-material-design-icons/Xing.vue';
import LinkedIn from 'vue-material-design-icons/Linkedin.vue';
import Overflow from 'vue-material-design-icons/StackOverflow.vue';
import Github from 'vue-material-design-icons/Github.vue';

Vue.config.productionTip = false

Vue.component('xing-icon', Xing);
Vue.component('linkedin-icon', LinkedIn);
Vue.component('stack-overflow-icon', Overflow);
Vue.component('github-icon', Github);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(Css);
Vue.use(Buefy);