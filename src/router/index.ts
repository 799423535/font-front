import { createRouter, createWebHashHistory } from 'vue-router';
const routes: any = [
  {
    path: '/',
    component: () => import('./../App.vue'),
    redirect: '/index',
    children: [
      {
        path: "/index",
        component: () => import('./../view/Index.vue'),
        redirect: '/index/home',
        children: [
          {
            path: '/index/home',
            component: () => import('./../view/index/Home.vue'),

          },
          {
            path: '/index/exhibition',
            component: () => import('./../view/index/Exhibition.vue')
          },
          {
            path: '/index/course',
            component: () => import('./../view/index/Course.vue')
          },
          {
            path: '/index/mine',
            redirect: '/login/login',
          },
          {
            path: '/index/mine/:id',
            component: () => import('./../view/index/Mine.vue'),
            props: true
          }

        ]
      }
    ]
  },
  { //附近展览
    path: "/nearbyshow",
    component: () => import('../view/exhibition/NearbyShow.vue')
  },
  { //热门展览
    path: "/hotshow",
    component: () => import('../view/exhibition/HotShow.vue')
  },
  { //日历行程
    path: "/calendar",
    component: () => import('../view/exhibition/Calendar.vue')
  },
  {  //分类看展alendar
    path: "/classifyshow",
    component: () => import('../view/exhibition/Classifyshow.vue')
  },
  { //搜索页
    path: "/search",
    component: () => import('../view/exhibition/Search.vue')
  },
  { //城市页面
    path: "/city",
    component: () => import('../view/exhibition/City.vue')
  },
  {
    //笔记
    path: '/mine/note/:id',
    component: () => import('./../view/mine/note.vue'),
    props: true
  },
  {
    //我的笔记
    path: '/mine/mynote/:id',
    component: () => import('./../view/mine/mynote.vue'),
    props: true
  },
  {
    //登录
    path: '/login/login',
    component: () => import('./../view/login/login.vue'),
  },
  {
    //注册
    path: '/login/register',
    component: () => import('./../view/login/register.vue'),
  },
  {
    //设置
    path: '/set/set/:id',
    component: () => import('./../view/set/set.vue'),
    props: true
  },
  //演出介绍页
  {
    path: "/tick",
    component: () => import('./../view/tick/Tick.vue'),
  },
  //商城页面
  {
    path: "/shop",
    redirect:"/shop/store",
    component: () => import('./../view/shop/Shop.vue'),
    children: [
      {
        path: "/shop/store",
        component: () => import("./../view/shop/Store.vue")
      },
      {
        path: "/shop/task",
        component: () => import("./../view/shop/Tesk.vue")
      }
    ]
  },
  {
    //详情页
    path: "/tickDetils/:id",
    component: () => import('./../view/details/Details.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('./../view/404.vue'),
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;