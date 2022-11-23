import Vue from 'vue'
import VueRouter from 'vue-router'
import AddResume from '../views/AddResume.vue'
import HomeView from '../views/HomeView.vue'
import EditResume from '../views/EditResume.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    
    path: '/resume',
    name: 'Resume',
    component: AddResume
  },
  {
    path:'/edit/:id',
    name: 'EditResume',
    component:EditResume
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
