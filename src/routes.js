import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import EducationPlan from '@/pages/EducationPlan.vue';
import PomodoroPage from '@/pages/Pomodoro.vue';
import WeatherTips from '@/pages/WeatherTips.vue';
import Obligation from '@/pages/Obligation.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/education',
            name: 'education-plan',
            component: EducationPlan
        },
        {
            path: '/pomodoro',
            name: 'pomodoro',
            component: PomodoroPage
        },
        {
            path: '/weather-tips',
            name: 'weatherTips',
            component: WeatherTips
        },
        {
            path: '/obligation',
            name: 'obligation',
            component: Obligation
        }
    ]
});

export default router;