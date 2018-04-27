/* tslint:disable*/
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { observable, isObservable, toJS } from 'mobx';
import VueMobx from 'vue-mobx';
import Bfui from 'bfui';
import 'bfui/lib/theme-default/index.css';

Vue.use(Bfui);

Vue.use(VueMobx, {
    observable,
    isObservable,
    toJS
});
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

