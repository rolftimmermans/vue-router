import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from './components/Hello'

Vue.use(VueRouter)

/* eslint-disable no-new */
new VueRouter({
  mode: 'history',
  base: '/foo',
  routes: [
    { path: '/index',
      component: Hello,
      beforeEnter: (to, from, next) => {
        next(false)
      }
    },
    { path: '/hello', component: Hello }
  ]
})
