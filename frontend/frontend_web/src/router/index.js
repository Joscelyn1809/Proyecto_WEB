// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Login',

        component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue'),
      },
      {
        path: 'home',
        name: 'Home',

        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'propiedades',
        name: 'Propiedades',

        component: () => import(/* webpackChunkName: "home" */ '@/views/Propiedades.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'propietarios',
        name: 'Propietarios',

        component: () => import(/* webpackChunkName: "home" */ '@/views/Propietarios.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'arrendatarios',
        name: 'Arrendatarios',

        component: () => import(/* webpackChunkName: "home" */ '@/views/Arrendatarios.vue'),
        meta: {
          requiresAuth: true
        }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("usuario")

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    token != null ? next() : next("/")
  } else {
    token != null ? next("/home") : next()
  }
})

export default router
