import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
  path: '',
  name: 'home',
  component: () => import('../views/Form.vue')
},{
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
}]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router