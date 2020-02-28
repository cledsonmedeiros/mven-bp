import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';

Vue.use(VueToast, {
  position: 'bottom',
  duration: 2000
})

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
});

window.onload = function () {
  vm.$mount('#app');
}
