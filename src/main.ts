import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Index';
import { key, store } from './store';


import {Tabbar, TabbarItem ,Icon, Col, Row ,Search, CellGroup, NavBar,Swipe,SwipeItem,Grid,GridItem,Cell,Image as VanImage} from 'vant';
import 'amfe-flexible';
import '/@/assets/styles/reset.less';
import '/@/assets/styles/exhibition/exhibition.less';

import 'vant/lib/index.css'; 

  
const app=createApp(App);
app.use(router);
app.use(store, key);
app.use(Tabbar);
app.use(TabbarItem);
app.use(VanImage);


//我的
app.use(NavBar);
app.use(Icon);
app.use(Col);
app.use(Row);
app.use(Grid);
app.use(GridItem);
app.use(Cell);
app.use(CellGroup);
app.use(Icon);
app.use(Swipe);
app.use(SwipeItem);
app.use(Search);

app.mount('#app');