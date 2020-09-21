import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import {add,grid,cube,document,cart} from '@ionic/vue/node_modules/ionicons/icons';

import {addIcons} from '@ionic/vue/node_modules/ionicons';
Vue.use(Ionic);

addIcons({
  'ios-add': add.ios,
  'md-add': add.md,
  'ios-grid':grid.ios,
  'md-grid':grid.md,
  'md-cube':cube.md,
  'ios-cube':cube.iso,
  'ios-cart':cart.iso,
  'md-cart':cart.md.ios,
  'ios-document':document.ios,
  'md-document':document.md


});

Vue.config.productionTip = false

new Vue({
  router,
 
  render: h => h(App)
}).$mount('#app')
