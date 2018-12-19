// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'                               //router
import store from './store'                                 //vuex
// import axios from 'axios'                                //axios
import * as socketApi from './api/socket/config/socket'     //websocket封装
import api from './api/axios/'                              //axios封装
import indexDB from './utils/indexDB/index'                 //indexDB封装
import commonMethod from './utils/method/index';            //公用method
import commonFilter from './utils/filter/index';            //公用filter
import 'mint-ui/lib/style.css'
import { Toast, Indicator, Button } from 'mint-ui';

Vue.prototype.Toast = Toast;
Vue.prototype.Indicator = Indicator;
Vue.component(Button.name, Button);
Vue.prototype.socketApi = socketApi     //WebSocket封装方法
Vue.prototype.$api = api
// Vue.prototype.$axios = axios;

Vue.use(indexDB)
Vue.use(commonMethod)
Vue.use(commonFilter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
