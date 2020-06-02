import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'container',
      component: () => import('@/page/container'),
      children: [{
        path: '/request',
        name: 'request',
        component: () => import('@/page/children/request')
      }]
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@/page/layout')
    }
  ]
})
