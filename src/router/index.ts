import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        component: () => import('./../App.vue'),
        redirect: '/index/home',
        children: [
            {
                path: "/index",
                component: () => import('./../view/Index.vue'),
                redirect: '/index/home',
                children: [
                    {
                        path: '/index/home',
                        component: () => import('./../view/index/Home.vue')
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
    {
        path:'/mine/note',
        component: () => import('./../view/mine/note.vue'),
    }, 
    {
        path:'/login/login',
        component: () => import('./../view/login/login.vue'),
    }, 
    {
        path:'/login/register',
        component:()=> import('./../view/login/register.vue'),
    },
    {
        path:'/set/set',
        component:()=> import('./../view/set/set.vue'),
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