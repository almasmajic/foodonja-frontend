import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

Vue.use(Croppa);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
