import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('../components/Home.vue')
    },
    {
      path: '/Takings',
      name: 'Takings',
      component: require('../components/Takings.vue')
    },
    {
      path: '*',
      redirect: '/'
    } // 404
  ]
})
