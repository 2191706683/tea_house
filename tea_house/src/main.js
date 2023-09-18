import Vue from 'vue'
import App from './App.vue'
//导入路由模块
import VueRouter from 'vue-router'
import routes from './router/index.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible/flexible';
import VueLazyload from 'vue-lazyload'

Vue.use(Vant);
Vue.use(VueRouter);
Vue.use(VueLazyload);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'hash',
  routes: routes
})

router.beforeEach((to, from, next) => {
  // if (from.name === 'circle') {
  //   location.reload();
  //   console.log('/////')
  // }
  // console.log(from)
  next()
})
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
