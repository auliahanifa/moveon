import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
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
      component: () => import("@/components/BarangLelang.vue")
    },
    {
      path: "/donasi",
      name: "Donasi",
      component: () => import("@/components/GalangDana.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/components/formLogin.vue")
    },
    {
      path: "/daftarlah",
      name: "Daftar",
      component: () => import("@/components/formRegistrasi.vue")
    },
    {
      path: "/formgalangdanaa",
      name: "Mulai_Galangdana",
      component: () => import("@/components/formMulaigalangdana.vue")
    },
    {
      path: "/donasi_barang",
      name: "Donasi_barang",
      component: () =>
        import("@/components/FormDonasibarang.vue")
    },
    {
      path: "/detailbarang",
      name: "DetailLelang",
      component: () =>
        import("@/components/DetailBaranglelang.vue")
    },
    {
      path: "/dashboarduser",
      name: "Dashboard",
      component: () =>
        import("@/components/Dashboarduser.vue")
    },
    {
      path: "/detgalangdana",
      name: "GalangdanaDetail",
      component: () =>
        import("@/components/Galangdanadet.vue")
    },
    {
      path: "/Uploadbuktibayar",
      name: "UploadBuktibayar",
      component: () =>
        import("@/components/SelesaikanBayar.vue")
    }
  ]
});