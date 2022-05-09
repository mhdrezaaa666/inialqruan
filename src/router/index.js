import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "page.home",
    component: () => import("../views/page/Home.vue"),
  },

  {
    path: "/about",
    name: "page.about",
    component: () => import("../views/page/About.vue"),
  },

  {
    path: "/contact",
    name: "page.contact",
    component: () => import("../views/page/Contact.vue"),
  },

  {
    path: "/terimakasih",
    name: "page.thank",
    component: () => import("../views/page/Thank.vue"),
  },

  // {
  //   path: "/daftarsurah",
  //   name: "page.info",
  //   component: () => import("../views/page/InfoSurah.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;