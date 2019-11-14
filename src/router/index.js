import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '首页'
      }
    }
  ]
})

export default router
