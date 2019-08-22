import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./router";

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default Router;
