import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/home.vue';
import buscar from '../components/buscar.vue';
import jugar from '../components/jugar.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buscar',
    name: 'buscar',
    component: buscar
  },
  {
    path: '/jugar',
    name: 'jugar',
    component: jugar
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;