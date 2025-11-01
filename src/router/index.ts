import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailedDayView from '@/views/DetailedDayView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/forecast/:index',
      name: 'forecast',
      component: () => import("@/views/DetailedDayView.vue"),
      props: true
    }
  ],
})

export default router
