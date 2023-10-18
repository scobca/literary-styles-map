import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/realism',
    name: 'realism',
    component: () => import('@/views/RealismView.vue')
  },
  {
    path: '/symbolism',
    name: 'symbolism',
    component: () => import('@/views/SymbolismView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
