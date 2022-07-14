import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueRouter from "vue-router"
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
