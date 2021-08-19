import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search";
import Upload from "../views/Upload";
import MyProfile from "../views/MyProfile";

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
  {
    path: "/myprofile",
    name: "MyProfile",
    component: MyProfile,
  },
];

const router = new VueRouter({
  mode: "history", // hešteg rješen
  base: process.env.BASE_URL,
  routes,
});

export default router;
