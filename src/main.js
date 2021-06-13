import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import PrimeVue from 'primevue/config';

import 'primevue/resources/primevue.min.css'       //core css
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primeicons/primeicons.css'       //icons
import 'primeflex/primeflex.css'; // flex and grid capabilties
import ToastService from 'primevue/toastservice';
import store from './store';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.mount('#app');

