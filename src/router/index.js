import Vue from "vue";
import VueRouter from "vue-router";
import Splashscreen from "../views/Splashscreen";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import Search from "../views/Search";
import Upload from "../views/Upload";
import RecipeDetail from "../views/RecipeDetail";
import MyProfile from "../views/MyProfile";
import Favourites from "../views/Favourites";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/splashscreen",
  },
  {
    path: "/splashscreen",
    name: "Splashscreen",
    component: Splashscreen,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: { title: "Search" },
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
    meta: { title: "Upload a new recipe" },
  },
  {
    path: "/myprofile",
    name: "MyProfile",
    component: MyProfile,
    meta: { title: "My Profile" },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: "Login" },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    meta: { title: "Sign Up" },
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: Favourites,
    meta: { title: "Favourites" },
  },
  {
    path: "/recipe-detail",
    name: "RecipeDetail",
    component: RecipeDetail,
    meta: { title: "" },
  },
];

const router = new VueRouter({
  mode: "history", // hešteg rješen
  base: process.env.BASE_URL,
  routes,
});

export default router;
