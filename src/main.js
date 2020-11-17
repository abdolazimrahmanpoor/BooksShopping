import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'nprogress/nprogress.css'
import '@/assets/css/bulma-rtl.css';








new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
