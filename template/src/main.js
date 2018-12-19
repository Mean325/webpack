{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

{{#vuex}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from  './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}

{{#axios}}
//axios封装
import api from './api/axios/' {{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.prototype.$api = api
{{/axios}}

import * as socketApi from './api/socket/config/socket'     //websocket封装
import indexDB from './utils/indexDB/index'                 //indexDB封装
import commonMethod from './utils/method/index';            //公用method
import commonFilter from './utils/filter/index';            //公用filter
import 'mint-ui/lib/style.css'
import { Toast, Indicator, Button } from 'mint-ui';

Vue.prototype.Toast = Toast;
Vue.prototype.Indicator = Indicator;
Vue.component(Button.name, Button);
Vue.prototype.socketApi = socketApi                         //WebSocket封装方法

Vue.use(indexDB)
Vue.use(commonMethod)
Vue.use(commonFilter)

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
