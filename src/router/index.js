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
    meta: { guest: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: "Login", guest: true },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    meta: { title: "Sign Up", guest: true },
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: { title: "Search", requiresAuth: true },
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
    meta: { title: "Upload a new recipe", requiresAuth: true },
  },
  {
    path: "/myprofile",
    name: "MyProfile",
    component: MyProfile,
    meta: { title: "My Profile", requiresAuth: true },
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: Favourites,
    meta: { title: "Favourites", requiresAuth: true },
  },
  {
    path: "/recipe-detail/:_id",
    name: "RecipeDetail",
    component: RecipeDetail,
    meta: { title: "", requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history", // hešteg rješen
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("user")) {
      next();
      return;
    }
    next("/splashscreen");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem("user")) {
      next("/search");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
