import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/metodos',
    name: 'metodos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MetodosView.vue')
  },

  //Ecuaciones No Lineales
  {
    path: '/EcuacionNoLineal/homeEcuacionNoLineal',
    name: 'homeEcuacionNoLineal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionNoLineal/HomeEcuacionNoLinealView.vue')
  },

  {
    path: '/EcuacionNoLineal/busquedaIncremental',
    name: 'busquedaIncremental',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionNoLineal/BusquedaIncrementalView.vue')
  },
  {
    path: '/EcuacionNoLineal/biseccion',
    name: 'biseccion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionNoLineal/BiseccionView.vue')
  },
  {
    path: '/EcuacionNoLineal/reglaFalsa',
    name: 'reglaFalsa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionNoLineal/ReglaFalsaView.vue')
  },
  {
    path: '/EcuacionNoLineal/puntoFijo',
    name: 'puntoFijo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionNoLineal/PuntoFijoView.vue')
  },
  {
    path: '/EcuacionNoLineal/newton',
    name: 'newton',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionNoLineal/NewtonView.vue')
  },
  {
    path: '/EcuacionNoLineal/secante',
    name: 'secante',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionNoLineal/SecanteView.vue')
  },
  {
    path: '/EcuacionNoLineal/raizMultiple',
    name: 'raizMultiple',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionNoLineal/RaizMultipleView.vue')
  },

  //Ecuaciones Lineales
  {
    path: '/EcuacionLineal/homeEcuacionLineal',
    name: 'homeEcuacionLineal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionLineal/HomeEcuacionLinealView.vue')
  },
  {
    path: '/EcuacionLineal/eliminaciongauss',
    name: 'eliminacionGauss',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionLineal/EliminacionGaussView.vue')
  },
  {
    path: '/EcuacionLineal/sustRegresiva',
    name: 'sustRegresiva',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionLineal/SustRegresivaView.vue')
  },
  {
    path: '/EcuacionLineal/sustProgresiva',
    name: 'sustProgresiva',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionLineal/SustProgresivaView.vue')
  },
  {
    path: '/EcuacionLineal/luSimple',
    name: 'luSimple',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionLineal/LUSimpleView.vue')
  },
  {
    path: '/EcuacionLineal/crout',
    name: 'crout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionLineal/CroutView.vue')
  },
  {
    path: '/EcuacionLineal/doolittle',
    name: 'doolittle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionLineal/DoolittleView.vue')
  },
  {
    path: '/EcuacionLineal/cholesky',
    name: 'cholesky',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionLineal/CholeskyView.vue')
  },
  {
    path: '/EcuacionLineal/gaussSeidel',
    name: 'gaussSeidel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionLineal/GaussSeidelView.vue')
  },
  {
    path: '/EcuacionLineal/jacobi',
    name: 'jacobi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//EcuacionLineal/JacobiView.vue')
  },

  {
    path: '*',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
