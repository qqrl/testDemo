// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Vue from 'vue'
// 引入插件
import router from '@/plugins/router'
import inject from '@/plugins/inject'
import store from '@/plugins/store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

// 引入公用style
import '@/assets/css/reset.css'
import '@/assets/css/public.css'
// 引入根组件
import App from '@/App'

Vue.use(inject)
Vue.use(ViewUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})