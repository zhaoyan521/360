import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'
import Home from '@/views/home'
import Record from '@/views/record'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: Home,
    component: Home
  },
  {
    path:'/record',
    name: Record,
    component:Record
  }
]

const router = new VueRouter({
  routes
})

export default router
