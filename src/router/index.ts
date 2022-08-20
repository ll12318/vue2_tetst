import {
    createRouter,
    createWebHashHistory,
    RouterView,
    RouteRecordRaw,
} from "vue-router";

export const routes: Array<RouteRecordRaw> = [
    {path: "/", name: "test", component: () => import("../views/Test.vue")},
    {
        path: "/plugin",
        name: "Plugin",
        component: () => import("../views/Plugin.vue"),
    },
    {
        path: "/home1",
        name: "home2",
        component: () => import("../views/Test.vue"),
    },
    {
        path: "/pinia",
        name: "pinia",
        component: () => import("../views/pinia.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});
export default router;
