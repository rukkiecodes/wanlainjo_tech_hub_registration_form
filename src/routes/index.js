import {
    createRouter,
    createWebHistory
  } from 'vue-router'
  
  const routes = [{
    path: '',
    name: 'home',
    component: () => import('../views/Form.vue')
  }, {
    path: '/next',
    name: 'techRegistration',
    component: () => import('../views/TechRegistration.vue')
  }, {
    path: '/registrationForms',
    name: 'registrationForms',
    component: () => import('../views/RegistrationForms.vue'),
    children: [{
      path: "",
      name: "studentsForm",
      component: () => import("../views/StudentsForm.vue"),
    }, {
      path: ":form",
      name: "viewStudent",
      component: () => import("../views/ViewStudent.vue"),
    }]
  }, {
    path: "/techForms",
    name: "techForms",
    component: () => import("../views/TechForms.vue"),
  }]
  
  
  const router = createRouter({
    routes,
    history: createWebHistory()
  })
  
  export default router
  