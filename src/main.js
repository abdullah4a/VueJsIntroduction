import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.filter("Upper", function(val) {
    return val.toUpperCase();
})
new Vue({
    render: h => h(App),
}).$mount('#app')