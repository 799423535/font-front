import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Index';
import { key, store } from './store';
import { Tabbar, TabbarItem } from 'vant';


import 'amfe-flexible';
import '/@/assets/styles/reset.less';
import 'vant/lib/index.css';

const app=createApp(App);
app.use(router);
app.use(store, key);
app.use(Tabbar);
app.use(TabbarItem);
app.mount('#app');
