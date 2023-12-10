// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Catalogue from "@/components/Catalogue.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/browse',
        name: 'Catalogue',
        component: Catalogue,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
