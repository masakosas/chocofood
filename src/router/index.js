import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import RestsPage from '../pages/RestsPage.vue' 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    }, 
    {
      path: '/home/:id',
      name: 'rests',
      component: RestsPage,
      props: true
    } 
  ]
})

export default router
