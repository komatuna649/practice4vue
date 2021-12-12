 import Vue from 'vue'
 import VueRouter from 'vue-router'
 import Home from '../views/Home.vue'
 Vue.use(VueRouter)
 const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page3',
    name: 'page3',
    component: () => import(/* webpackChunkName: "about" */ '../views/page3.vue')
  },
  {
    path: '/page4',
    name: 'page4',
    component: () => import(/* webpackChunkName: "about" */ '../views/page4.vue')
  },
]
 const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})  
 export default router
