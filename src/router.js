import Vue from "vue";
import Router from "vue-router";

import App from "./App.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        { path: "/", name: "App", component: App },
    ]
});

export default router;