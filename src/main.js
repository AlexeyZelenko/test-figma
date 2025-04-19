import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store/auth';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import './styles/main.scss';

// Import PrimeVue components
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Rating from 'primevue/rating';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

// Import views
import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import RegisterView from './views/RegisterView.vue';
import AdminView from './views/AdminView.vue';

const router = createRouter({
  history: createWebHistory('/'),
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
app.use(PrimeVue, {
  theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.my-app-dark',
      }
  }
});

app.use(ToastService);

// Register PrimeVue components
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Rating', Rating);
app.component('Toast', Toast);

app.mount('#app');