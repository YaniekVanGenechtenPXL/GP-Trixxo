import { createRouter, createWebHistory } from 'vue-router'
import HomescreenView from '../views/homescreenView.vue'
import InleverenView from '../views/InleverenView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomescreenView},
    { path: '/home', redirect: '/'},
    { path: '/:notFound(.*)', redirect: '/'},
    { path: '/inleveren', component: InleverenView},
  ]
})

export default router