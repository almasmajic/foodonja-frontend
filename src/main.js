import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = "http://localhost:3000/";

// axios.interceptors.request.use(function(config) {
//   const token = localStorage.getItem("user");
//   if (token) {
//     config.headers["Authorization"] = 'Bearer ' + token;
//   }
//   return config;
// },
// function(error) {
//   return Promise.reject(error);
// });

import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
