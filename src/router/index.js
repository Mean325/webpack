import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import eventTest from '@/views/eventTest/index'
import indexDB from '@/views/indexDBTest/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/eventTest',
      name: 'eventTest',
      component: eventTest
    },
    {
      path: '/indexDB',
      name: 'indexDB',
      component: indexDB
    }
  ]
})
