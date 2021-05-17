import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search";
import Upload from "../views/Upload";

Vue.use(VueRouter);

const routes = [
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
  },
];

const router = new VueRouter({
  mode: "history", // hešteg rješen
  base: process.env.BASE_URL,
  routes,
});

export default router;
