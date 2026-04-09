import { createRouter, createWebHistory } from 'vue-router'
import VvnDashboard from '@/views/VvnDashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: VvnDashboard,
    },
  ],
})

export default router