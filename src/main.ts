import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Index';
import { key, store } from './store';
import {
    Tabbar,
    TabbarItem,
    NavBar,
    Icon,
    Popup,
    Col,
    Row,
    Grid,
    GridItem,
    Cell,
    CellGroup,
    Tab, Tabs,
    Field,
    Button,
    Skeleton,
    Image,
    Swipe,
    SwipeItem,
    Toast
} from 'vant';


import 'amfe-flexible';
import '/@/assets/styles/reset.less';
import '/@/assets/styles/exhibition/exhibition.less';

import 'vant/lib/index.css';
import '/@/assets/styles/mine/mine.less';
import '/@/assets/styles/login/login.less';
import '/@/assets/styles/login/register.less';
import '/@/assets/styles/note/note.less';
import '/@/assets/styles/set/set.less';


const app = createApp(App);
app.use(router);
app.use(store, key);
app.use(Tabbar);
app.use(TabbarItem);
//home
app.use(Tab);
app.use(Tabs);
app.use(Popup);
app.use(Swipe);
app.use(SwipeItem);
//我的
app.use(NavBar);
app.use(Icon);
app.use(Col);
app.use(Row);
app.use(Grid);
app.use(GridItem);
app.use(Cell);
app.use(CellGroup);
app.use(Tab);
app.use(Tabs);
app.use(Field);
app.use(Button);
app.use(Skeleton);
app.use(Image);
app.use(Toast);
app.mount('#app');
