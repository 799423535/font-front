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
            component: () => import('./../view/index/Mine.vue'),
            meta: {requireAuth:true}
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
    //标准件
    path:"/mine/standard",
    component: () =>import('./../view/mine/standard.vue')
  },
  {
    path:"/mine/threego",
    component: () =>import('./../view/mine/threego.vue')
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
// //登录页 需要判断是否需要登录是否去,根据路由元信息验证权限
// router.beforeEach((to,from,next) => {
//   console.log(111);
//   //路径元信息是否有授权
//    console.log(to.meta.requireAuth);
//    if(to.meta.requireAuth) {//是否需要登录权限
//     console.log(222)
//      //判断是否有token，token是在本地存储的存储的
//      if(!localStorage.getItem("token")) {
//         next("/login/login");
//      }else{
//        next();
//      }
//    } else {
//      next();
//    };
//   });
export default router;