import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./router";
import { LoadingBar } from "quasar";

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes
});

Router.beforeEach((to, from, next) => {
  LoadingBar.start();
  if (to.path === "/") {
    next({ name: "home_index" });
  } else {
    next();
  }
});

Router.afterEach((to, from, next) => {
  LoadingBar.stop();
});

export default Router;
