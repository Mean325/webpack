import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import common_state from './commonState';             //公共状态
import event from './event';             //公共状态

export default new vuex.Store({
  modules: {
    state: common_state,
    event: event
  }
})