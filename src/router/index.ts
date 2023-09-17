import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/app/store'

// Common components
import Login from '../views/Auth/Login.vue'
import Dashboard from '../views/Dashboard.vue'

// Customer components
import CustomersIndex from '../views/Customers/CustomersIndex.vue'
import CustomersForm from '../views/Customers/CustomersForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Auth routes
    {
      path: '/login',
      name: 'AuthLogin',
      component: Login
    },

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
      path: '/customers/edit/:id',
      name: 'CustomerEdit',
      component: CustomersForm,
      props: true
    }
  ]
})

// GOOD
router.beforeEach((to, from, next) => {
  const store = useAuthStore();
  if (to.name !== 'AuthLogin' && !store.isAuthenticated) next({ name: 'AuthLogin' })
  else next()
})

export default router
