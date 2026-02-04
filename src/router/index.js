import { createRouter, createWebHistory } from 'vue-router'
import front_routes from '../zems/Front/routes/front_routes'
import auth_routes from '../zems/Auth/Routes/auth_routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...front_routes, ...auth_routes],
})

export default router
