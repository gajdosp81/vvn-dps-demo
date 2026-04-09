import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/views/VvnDashboard.vue') },
    { path: '/vvn/:id', component: () => import('@/views/VvnDetail.vue') },
    { path: '/create', component: () => import('@/views/CreateVvn.vue') }
  ]
})