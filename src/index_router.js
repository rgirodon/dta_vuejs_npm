import Vue from 'vue';
import VueRouter from 'vue-router'
import counter from './counter';
import shopping from './shopping';

Vue.component('counter', counter);
Vue.component('shopping', shopping);

Vue.use(VueRouter)

let routes = [
    { path: '/counter', component: counter },
    { path: '/shopping', component: shopping }
];

let router = new VueRouter({
    routes : routes
});

let vueInstance = new Vue({
    el: '#app',
    router: router    
});