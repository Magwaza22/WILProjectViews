import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/student_views/DashboardPage.vue";
import About from "../views/student_views/AboutPage.vue";
import Register from "../views/student_views/RegistrationPage.vue";
import Login from "../views/student_views/LoginPage.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
