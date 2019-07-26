import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Beranda.vue")
    },
    {
      path: "/daftar_beasiswa",
      name: "form_beasiswa",
      component: () => import("@/components/FormBeasiswa.vue")
    },
    {
      path: "/beasiswa",
      name: "beasiswa",
      component: () => import("@/components/Beasiswaa.vue")
    },
    {
      path: "/detail_gbeasiswa",
      name: "detai_gbeasiswa",
      component: () => import("@/components/DetailGbeasiswa.vue")
    },
    {
      path: "/lelang",
      name: "Lelang",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/components/BarangLelang.vue")
    },
    {
      path: "/donasi",
      name: "Donasi",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/components/GalangDana.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/components/formLogin.vue")
    },
    {
      path: "/daftarlah",
      name: "Daftar",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/components/formRegistrasi.vue"
        )
    },
    {
      path: "/formgalangdanaa",
      name: "Mulai_Galangdana",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/components/formMulaigalangdana.vue"
        )
    },
    {
      path: "/donasi_barang",
      name: "Donasi_barang",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/components/FormDonasibarang.vue"
        )
    },
    {
      path: "/detailbarang",
      name: "DetailLelang",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/components/DetailBaranglelang.vue"
        )
    },
    {
      path: "/dashboarduser",
      name: "Dashboard",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/components/Dashboarduser.vue")
    },
    {
      path: "/detailgalangdana",
      name: "GalangdanaDetail",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/components/Detailgalangdana.vue"
        )
    },
    {
      path: "/Uploadbuktibayar",
      name: "UploadBuktibayar",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/components/SelesaikanBayar.vue"
        )
    }
  ]
});
