import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from '../layout/BaseLayout.vue';
import Dashboard from '../views/Dashboard.vue'
import Overview from '../views/Overview.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            component: BaseLayout,
            children:[
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: Dashboard
                },
                {
                    path: '/overview',
                    name: 'overview',
                    component: Overview
                },
            ]
        }
    ]
})
export default router