import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Index';
import { key, store } from './store';
import { Tabbar, TabbarItem } from 'vant';


import 'amfe-flexible';
import '/@/assets/styles/reset.less';
import '/@/assets/styles/exhibition/exhibition.less';

import 'vant/lib/index.css';
import { NavBar,Swipe,SwipeItem,Grid,GridItem } from 'vant';

  
const app=createApp(App);
app.use(router);
app.use(store, key);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Swipe);
app.use(SwipeItem);
app.use(NavBar);
app.use(Grid);
app.use(GridItem);
app.mount('#app');
