import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue')
const Demo1 = () => import('../views/Demo1.vue')
const Demo2 = () => import('../views/Demo2.vue')
const Demo3 = () => import('../views/Demo3.vue')
const Demo4 = () => import('../views/Demo4.vue')
const Demo5 = () => import('../views/Demo5.vue')
const Demo6 = () => import('../views/Demo6.vue')
const Demo7 = () => import('../views/Demo7.vue')
const Demo8 = () => import('../views/Demo8.vue')
const Demo9 = () => import('../views/Demo9.vue')
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/demo1', component: Demo1},
    {path: '/demo2', component: Demo2},
    {path: '/demo3', component: Demo3},
    {path: '/demo4', component: Demo4},
    {path: '/demo5', component: Demo5},
    {path: '/demo6', component: Demo6},
    {path: '/demo7', component: Demo7},
    {path: '/demo8', component: Demo8},
    {path: '/demo9', component: Demo9},
]

const router = new VueRouter({
    routes,
})

export default router