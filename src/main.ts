import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Index';
import { key, store } from './store';
import { Tabbar, TabbarItem ,NavBar,Icon, Col, Row , Grid, GridItem,Cell, CellGroup} from 'vant';


import 'amfe-flexible';
import '/@/assets/styles/reset.less';
import '/@/assets/styles/exhibition/exhibition.less';

import 'vant/lib/index.css';
import '/@/assets/styles/mine/mine.less';

  
const app=createApp(App);
app.use(router);
app.use(store, key);
app.use(Tabbar);
app.use(TabbarItem);

//我的
app.use(NavBar);
app.use(Icon);
app.use(Col);
app.use(Row);
app.use(Grid);
app.use( GridItem);
app.use(Cell);
app.use(CellGroup);

app.mount('#app');
