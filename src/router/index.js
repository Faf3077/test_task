
import { createRouter, createWebHistory } from 'vue-router'
import WriteOff from '../components/WriteOff.vue'
import General from '../components/General.vue'
import AdditionalCosts from '../components/AdditionalCosts.vue'

const routes = [
  {
    path: '/',
    component: WriteOff
  },
  {
    path: '/General',
    component: General
  },
  {
    path: '/AdditionalCosts',
    component: AdditionalCosts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
