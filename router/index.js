import { createWebHistory, createRouter } from "vue-router"
import Home from "@/src/components/HelloWorld";
import Menu from "@/src/components/Menu.vue";

const routes = [
 {
     path: "/",
     name: "Home",
     component: HelloWorld,
 },
 {
     path: "/Menu",
     name: "Menu",
     component: Menu,
 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;