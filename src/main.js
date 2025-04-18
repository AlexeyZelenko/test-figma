import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store/auth';
import './assets/styles/reset.scss';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';

// Import views
import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import RegisterView from './views/RegisterView.vue';
import AdminView from './views/AdminView.vue';

const router = createRouter({
  history: createWebHistory('/test-figma/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    }
  ]
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(PrimeVue);
app.mount('#app');