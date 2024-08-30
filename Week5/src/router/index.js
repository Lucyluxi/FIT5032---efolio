import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import store from '@/store'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    beforeEnter: (to, from, next) => {
      // Perform logic before entering the About route
      if (store.state.isAuthenticated) {
        next();
      } else {
        next({ name: 'Login' });
      }
    }
  }
  ,
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;