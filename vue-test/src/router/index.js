import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect:'/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/classify',
        name: 'Classify',
        component: () => import(/* webpackChunkName: "about" */ '../views/Classify.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
    },
    {
        path: '/my',
        name: 'My',
        component: () => import(/* webpackChunkName: "about" */ '../views/My.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
