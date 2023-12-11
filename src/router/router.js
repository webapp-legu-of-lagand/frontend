// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Catalogue from "@/components/Catalogue.vue";
import PhoneView from "../views/PhoneView.vue";
import PhoneDetail from "../views/PhoneDetailView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/browse",
    name: "Catalogue",
    component: Catalogue,
  },
  {
    path: "/phones",
    name: "phones",
    component: PhoneView,
  },
  {
    path: "/phone/:name",
    name: "phone-details",
    props: true,
    component: PhoneDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
