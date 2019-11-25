import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GestionEmployes from '../views/GestionEmployes.vue'
import ZoneEmploye from '../views/ZoneEmploye.vue'
import store from '../router/index.js'
import Login from '../components/auth/Login.vue'
// import Register from './components/auth/Register.vue'
import Resource from '../components/resources/Resources.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/resources',
    name: 'resources',
    component: Resource,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/gestionEmployes',
    name: 'gestionEmployes',
    component: GestionEmployes
  },
  {
    path: '/zoneEmploye',
    name: 'zoneEmploye',
    component: ZoneEmploye
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
