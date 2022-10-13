import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import { routes } from "@/app/routes";

Vue.config.productionTip = false;
const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");
