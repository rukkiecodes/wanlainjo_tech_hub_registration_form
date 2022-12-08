import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
  path: '',
  name: 'home',
  component: () => import('../views/Form.vue')
},{
    path: '/techRegistration',
    name: 'TechRegistration',
    component: () => import('../views/TechRegistration.vue')
}]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router