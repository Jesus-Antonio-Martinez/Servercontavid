import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue";
import Menu from "@/views/Menu.vue";
import HelloWorld from "@/components/HelloWorld";

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

const router = createRouter([
    history: createWebHistory(),
    routes,
]);

export default router;