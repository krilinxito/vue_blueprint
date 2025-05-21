// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import AutorList from '@/components/AutorList.vue'
import CiudadList from '@/components/CiudadList.vue'

const routes = [
  {
    path: '/',
    name: 'Paises',
    component: AutorList
  },
  {
    path: '/ciudades',
    name: 'Ciudades',
    component: CiudadList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
