import { createRouter, createWebHistory } from 'vue-router';
import AppAbout from './views/AppAbout.vue'
import AppHome from './views/AppHome.vue';
import Project from './views/Project.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/project/:id',
            name: 'project',
            component: Project,
            props: true
        },
    ]
});
export { router };