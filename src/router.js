import { createWebHistory, createRouter } from 'vue-router';

//import delle pagine che sono incluse nel nostro router
import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';
import BlogPage from './pages/BlogPage.vue';
import PostPage from './pages/PostPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //specifichiamo le rotte
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogPage
        },
        {
            path: '/blog/:slug',
            name: 'post',
            component: PostPage
        }
    ]
});

export { router };