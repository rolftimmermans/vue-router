import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from './components/Hello'

Vue.use(VueRouter)

let router = new VueRouter({
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

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <router-link to="/index">home</router-link>
      <router-link to="/hello">hello</router-link>
      <router-view/>
    </div>
  `
}).$mount('#app')
