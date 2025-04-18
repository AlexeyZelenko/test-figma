import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import MainPage from '../components/MainPage/MainPage.vue';
import ReviewsPage from '../components/Reviews/ReviewsPage.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: MainPage
      },
      {
        path: 'reviews',
        name: 'Reviews',
        component: ReviewsPage
      },
      {
        path: 'admin',
        name: 'Admin',
        component: AdminPage
      },
      {
        path: 'register',
        name: 'Register',
        component: RegisterPage
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 