import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Index';
import { key, store } from './store';
import { Tabbar, TabbarItem ,NavBar,Icon, Col, Row , Grid, GridItem,Cell, CellGroup} from 'vant';


import 'amfe-flexible';
import '/@/assets/styles/reset.less';
import '/@/assets/styles/exhibition/exhibition.less';

import 'vant/lib/index.css';
<<<<<<< HEAD
import { NavBar,Swipe,SwipeItem,Grid,GridItem } from 'vant';
=======
import '/@/assets/styles/mine/mine.less';
>>>>>>> origin/oringin/zhenglulu

  
const app=createApp(App);
app.use(router);
app.use(store, key);
app.use(Tabbar);
app.use(TabbarItem);
<<<<<<< HEAD
app.use(Swipe);
app.use(SwipeItem);
app.use(NavBar);
app.use(Grid);
app.use(GridItem);
=======

//我的
app.use(NavBar);
app.use(Icon);
app.use(Col);
app.use(Row);
app.use(Grid);
app.use( GridItem);
app.use(Cell);
app.use(CellGroup);

>>>>>>> origin/oringin/zhenglulu
app.mount('#app');
