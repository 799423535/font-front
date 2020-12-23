import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: () => import('./../App.vue'),
    redirect: '/index/home/recommend',
    children: [
      {
        path: "/index",
        component: () => import('./../view/Index.vue'),
        redirect: '/index/home/recommend',
        children: [
          {
            path: "/index",
            component: () => import('./../view/Index.vue'),
            redirect: '/index/home',
            children: [
              {
                path: '/index/home',
                component: () => import('./../view/index/Home.vue'),
                children: [
                  {
                    path: '/index/home/recommend',
                    name: 'Recommend',
                    component: () => import('./../view/home/Recommend.vue'),
                  },
                  {
                    path: '/index/home/attention',
                    name: 'Attention',
                    component: () => import('./../view/home/Attention.vue'),
                  },
                ]
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
                component: () => import('./../view/index/Mine.vue')

              }
            ]
          }
        ]
      },
    ]
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
    path: '/mine/note',
    component: () => import('./../view/mine/note.vue'),
  },
  {
    path: '/login/login',
    component: () => import('./../view/login/login.vue'),
  },
  {
    path: '/login/register',
    component: () => import('./../view/login/register.vue'),
  },
  {
    path: '/set/set',
    component: () => import('./../view/set/set.vue'),
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