import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import counter from './counter';
import shopping from './shopping';

Vue.component('counter', counter);
Vue.component('shopping', shopping);

Vue.use(VueRouter);
Vue.use(Vuex);

let routes = [
    { path: '/counter', component: counter },
    { path: '/shopping', component: shopping }
];

let router = new VueRouter({
    routes : routes
});

let store = new Vuex.Store({
    state: {
        count: 0,
        items: []
    },
    mutations: {
        increment: function(state) {

            state.count++;
        },
        addItem: function(state, payload) {
            
            state.items.push({label : payload.itemToAdd});
        }
    }
});

let vueInstance = new Vue({
    el: '#app',
    router: router,
    store: store,    
});