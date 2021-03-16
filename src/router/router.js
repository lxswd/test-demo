import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue')
const Demo1 = () => import('../views/Demo1.vue')
const Demo2 = () => import('../views/Demo2.vue')
const Demo3 = () => import('../views/Demo3.vue')
const Demo4 = () => import('../views/Demo4.vue')
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/demo1', component: Demo1},
    {path: '/demo2', component: Demo2},
    {path: '/demo3', component: Demo3},
    {path: '/demo4', component: Demo4}
]

const router = new VueRouter({
    routes,
})

export default router