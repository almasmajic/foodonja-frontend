import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search";

Vue.use(VueRouter);

const routes = [
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = new VueRouter({
  mode: "history", // hešteg rješen
  base: process.env.BASE_URL,
  routes,
});

export default router;
