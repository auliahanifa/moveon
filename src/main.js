import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/fontawesome";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import "./assets/css/style.css";
import "./registerServiceWorker";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCurrencyFilter from "vue-currency-filter";
import VueNumeric from "vue-numeric";

Vue.config.productionTip = false;

Vue.use(BootstrapVue, VueAxios, axios, VueNumeric);
Vue.use(VueCurrencyFilter, {
  symbol: "Rp ",
  thousandsSeparator: ".",
  fractionCount: 0,
  fractionSeparator: ",",
  symbolPosition: "front",
  symbolSpacing: true
});

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount("#app");
