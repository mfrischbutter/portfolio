import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import Css from './css/main.scss'

import Xing from 'vue-material-design-icons/Xing.vue';
import LinkedIn from 'vue-material-design-icons/Linkedin.vue';
import Overflow from 'vue-material-design-icons/StackOverflow.vue';
import Github from 'vue-material-design-icons/Github.vue';
import VueGtag from "vue-gtag";


Vue.config.productionTip = false

Vue.component('xing-icon', Xing);
Vue.component('linkedin-icon', LinkedIn);
Vue.component('stack-overflow-icon', Overflow);
Vue.component('github-icon', Github);

Vue.use(VueGtag, {
  config: { id: "UA-171844638-1" }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(Buefy);
Vue.use(Css);