import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

import Orders from "@/components/Orders.vue";
import OrderList from "@/components/OrderList.vue";

import WaitersMenu from "@/components/WaitersMenu.vue";
import Test from "@/views/Test.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/order",
    name: "Order",
    component: Orders,
  },
  {
    path: "/list",
    name: "CosktailList",
    component: OrderList,
  },
  {
    path: "/waiter",
    name: "Waiter",
    component: WaitersMenu,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
