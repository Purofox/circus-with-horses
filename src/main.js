import Vue from 'vue';
import router from './routes';
import App from './App.vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';

Vue.use(VueLodash, { name: 'custom' , lodash: lodash });

Vue.config.productionTip = false;


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
