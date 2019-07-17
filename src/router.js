import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HelloWorld from '@/components/HelloWorld.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('@/components/Beranda.vue')
    },
    {
      path: '/beasiswa',
      name: 'Beasiswaa',
      component: () => import('@/components/Beasiswaa.vue')
    },
    {
      path: '/lelang',
      name: 'Lelang',
      component: () => import(/* webpackChunkName: "about" */ '@/components/BarangLelang.vue')
    },
    {
      path: '/donasi',
      name: 'Donasi',
      component: () => import(/* webpackChunkName: "about" */ '@/components/GalangDana.vue')
    }


  ]
})
