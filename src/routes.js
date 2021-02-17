import Vue from 'vue';
import Router from 'vue-router';
import home from './pages/Home.vue';
import stressLevel from './pages/StressLevel.vue';
import EducationPlan from './pages/EducationPlan.vue';
import PomodoroPage from './pages/Pomodoro.vue';
import WeatherTips from './pages/WeatherTips.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/stress',
            name: 'stressLevel',
            component: stressLevel
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
        }
    ]
});

export default router;