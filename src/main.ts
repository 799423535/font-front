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
import { NavBar,Swipe,SwipeItem,Grid,GridItem,Cell,CellGroup,Icon} from 'vant';
=======
import '/@/assets/styles/mine/mine.less';
>>>>>>> 364bde7496d173590a374ebb4595f33d1645ce97

  
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
<<<<<<< HEAD
app.use(GridItem);
app.use(Cell);
app.use(CellGroup);
app.use(Icon);
=======
app.use( GridItem);
app.use(Cell);
app.use(CellGroup);
>>>>>>> 364bde7496d173590a374ebb4595f33d1645ce97

app.mount('#app');
