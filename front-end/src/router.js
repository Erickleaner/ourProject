import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import store from "@/store/index";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/Index'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/module/home/views/UHome')
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('@/module/login/views/ULogin')
            }
        ]
    },
    {
        name:'403',
        path: '/403',
        component: () => import('@/views/403/403'),
    },
    {
        name:'main',
        path: '/main',
        component: () => import('@/module/main/views/UMain'),
    }
];
//props向组件添加props

const router = createRouter({
    history: createWebHashHistory(),  // hash路由模式
    // history: createWebHistory(),  // history路由模式
    routes
});
export default router;
