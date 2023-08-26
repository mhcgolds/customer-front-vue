import { createRouter, createWebHistory } from 'vue-router'

// Common components
import Dashboard from '../views/Dashboard.vue'

// Customer components
import CustomersIndex from '../views/Customers/CustomersIndex.vue'
import CustomersForm from '../views/Customers/CustomersForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Common routes
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },

    // Customer routes
    {
      path: '/customers',
      name: 'CustomerIndex',
      component: CustomersIndex
    },
    {
      path: '/customers/create',
      name: 'CustomerCreate',
      component: CustomersForm
    },
    {
      path: '/customers/update/:id',
      name: 'CustomerUpdate',
      component: CustomersForm,
      props: true
    }
  ]
})

export default router
