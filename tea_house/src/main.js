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

// 路由守卫，登录判断，以及主子页面之间的切换
router.beforeEach((to, from, next) => {
  const { requiredLogin } = to.meta;
  const token = localStorage.getItem("token");
  // 判断是否已经登录并是否页面需要登录权限，如果是，跳转到登录页面，若否，则放行
  if (!token && requiredLogin) {
    router.push('/login')
  } else {
    next();
  }
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
