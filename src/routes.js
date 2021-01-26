import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/Home.vue'
import about from './pages/About.vue'
import EducationPlan from './pages/EducationPlan.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/education',
            name: 'education-plan',
            component: EducationPlan
        }
    ]
});

export default router