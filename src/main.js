import Vue from 'vue';
import Vuex from 'vuex';
import router from './routes';
import App from './App.vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import VueI18n from 'vue-i18n';
import VueCookies from 'vue-cookies';

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueLodash, { name: 'custom' , lodash: lodash });
Vue.use(VueCookies);

Vue.config.productionTip = false;

const messages = {
  en: {
    message: {
      educationLink: 'Education plan',
      pomodoroLink: 'Pomodoro Tracker',
      stressLink: 'Stress level',
      probation: 'Until the end of the probationary period',
    }
  },
  ru: {
    message: {
      educationLink: 'План развития',
      pomodoroLink: 'Помидорка',
      stressLink: 'Уровень стресса',
      probation: 'До конца испытательного срока',
    }
  },
  fr: {
    message: {
      educationLink: 'Plan de développement',
      pomodoroLink: 'Suivi de Pomodoro',
      stressLink: 'Niveau de stress',
      probation: 'Jusquà la fin de la période probatoire',
    }
  }
};

const i18n = new VueI18n({
  locale: 'en',
  messages
});

new Vue({
  i18n,
  router: router,
  render: h => h(App),
}).$mount('#app');

i18n.locale = 'ru';