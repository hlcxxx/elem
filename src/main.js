import Vue from 'vue';
import App from './App';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

var router = new VueRouter();

router.map({
  '/goods':{
    component: goods
  },
  '/ratings':{
    component: ratings
  },
  '/seller':{
    component: seller
  }
});

router.start(app,'#app');
