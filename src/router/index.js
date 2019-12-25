import Vue from 'vue'
import VueRouter from 'vue-router'
import OnSale from '../views/onSale.vue'
import NotFound from '../components/notFound/index.vue'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta:{
      keepAlive:false
    }
  },
  {
    path: '/onSale',
    name: 'OnSale',
    component: OnSale,
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/connect',
    name: 'connect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/connect.vue'),
    meta:{
      keepAlive:true
    }
  },{
    path: "*",
    name: "NotFound",
    component:NotFound,
    meta:{
      keepAlive:false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
