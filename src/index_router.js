import Vue from 'vue';
import VueRouter from 'vue-router';
import counter from './counter';
import shopping from './shopping';

Vue.use(VueRouter);

let routes = [
    { path: '/counter', component: counter },
    { path: '/shopping/:title', component: shopping, props: true }
];

let router = new VueRouter({
    routes : routes
});

let vueInstance = new Vue({
    el: '#app',
    router: router    
});