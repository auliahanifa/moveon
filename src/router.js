import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Beasiswaa from '@/components/Beasiswaa.vue'
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
      name: 'beasiswa',
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
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ '@/components/formLogin.vue')
    },
    {
      path: '/daftarlah',
      name: 'Daftar',
      component: () => import(/* webpackChunkName: "about" */ '@/components/formRegistrasi.vue')
    },
    {
      path: '/formgalangdanaa',
      name: 'Mulai_Galangdana',
      component: () => import(/* webpackChunkName: "about" */ '@/components/formMulaigalangdana.vue')
    },
    {
      path: '/donasi_barang',
      name: 'Donasi_barang',
      component: () => import(/* webpackChunkName: "about" */ '@/components/FormDonasibarang.vue')
    }


  ]
})
