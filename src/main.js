import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../src/routes/routes.js';
import 'quasar/dist/quasar.css'; // Importa los estilos de Quasar
import { Quasar } from 'quasar';

createApp(App)
  .use(router)
  .use(Quasar)
  .mount('#app');