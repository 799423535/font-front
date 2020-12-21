import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { key, store } from './store';
import { NavBar } from 'vant';


import 'amfe-flexible';
import '/@/assets/styles/reset.less';
import 'vant/lib/index.css';

const app=createApp(App);
app.use(router);
app.use(store, key);
app.use(NavBar);
app.mount('#app');
