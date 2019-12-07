import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../components/All.vue'
import Todo from '../components/Todo.vue'
import Finished from '../components/Finished.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/all'
  },
  {
    path: '/all',
    name: 'all',
    component: All
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  },
  {
    path: '/finished',
    name: 'finished',
    component: Finished
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'activelinkzhenjie'
})

export default router
