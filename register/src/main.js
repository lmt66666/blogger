
import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
// import axios from 'axios';
// import VueAxios from 'Vue-axios';
import Router from 'vue-router';
import login from './components/login.vue'
import register from './components/register'
// Vue.use(VueAxios,axios);
Vue.use(Antd);
Vue.use(Router);

// axios.defaults.baseURL="http://zlxserver.cn.utools.club/signup/login";

const router = new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/login',
      component: login
    },

    {
      path: '/register',
      component: register
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el:"#app",
  router:router,
  render: h => h(App)
   
})

