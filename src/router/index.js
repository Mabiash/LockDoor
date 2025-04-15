import { createRouter, createWebHistory } from 'vue-router';
const Dashboard = () => import("../views/Dashboard.vue");

const routes = [
    { path: '/', redirect:'/Dashboard'},
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
