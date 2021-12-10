import Vue from "vue";
import VueRouter from "vue-router";
import Userfront from "@userfront/vue";
import store from "../store/index.js";

import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", redirect: "/dashboard" },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name === "Login" || to.name === "Logout") {
        return next();
    }
    if (!Userfront.accessToken()) {
        return next({ path: "/login" });
    }

    store.commit("setAuth", Userfront.accessToken());
    if (!store.getters.getAuth) {
        Userfront.logout();
        return;
    }

    next();
});

export default router;
