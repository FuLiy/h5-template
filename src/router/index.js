import Vue from 'vue'
import VueRouter from 'vue-router'
import one from '../views/one'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'one',
    component: one
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
