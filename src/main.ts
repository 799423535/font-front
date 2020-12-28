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
    Toast,
    Search,
    Image as VanImage,
    ActionSheet,
    Stepper,
    ShareSheet,
    DropdownMenu,
    DropdownItem,
    Calendar,
    Lazyload,
    PullRefresh,
    List,
    Overlay
} from 'vant';


import 'amfe-flexible';
import '/@/assets/styles/reset.less';
import '/@/assets/styles/exhibition/exhibition.less';
import '/@/assets/styles/exhibition/search.less';


import 'vant/lib/index.css';
import '/@/assets/styles/mine/mine.less';
import '/@/assets/styles/login/login.less';
import '/@/assets/styles/login/register.less';
import '/@/assets/styles/note/note.less';
import '/@/assets/styles/set/set.less';
import '/@/assets/styles/note/mynote.less';


const app = createApp(App);
app.use(router);
app.use(store, key);
app.use(Tabbar);
app.use(TabbarItem);
app.use(DropdownMenu);
app.use(DropdownItem);
//home
app.use(Tab);
app.use(Tabs);
app.use(Popup);
app.use(Swipe);
app.use(SwipeItem);
app.use(VanImage);
app.use(ActionSheet);
app.use(Stepper);
app.use(ShareSheet);
app.use(Lazyload);
app.use(PullRefresh);
app.use(List);
 
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
app.use(Icon);
app.use(Swipe);
app.use(SwipeItem);
app.use(Search);
app.use(Calendar);
app.use(ShareSheet);
app.mount('#app');

// 下拉刷新
app.use(PullRefresh);
// 遮罩层
app.use(Overlay);