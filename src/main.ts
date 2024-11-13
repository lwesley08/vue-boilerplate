import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Vuetify
// Testing
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

// Toast
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import '@/assets/styles/main.scss';
import '@/assets/styles/baseVariables.css';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(Toast);

app.mount('#app');
