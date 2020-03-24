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
    { path: '/shopping/:type', component: shopping, props: true }
];

let router = new VueRouter({
    routes : routes
});

let store = new Vuex.Store({
    state: {
        count: 0,
        epicerieItems: [],
        bricolageItems: []
    },
    mutations: {
        increment: function(state) {

            state.count++;
        },
        addItem: function(state, payload) {
            
            if (payload.type == 'epicerie') {
            
                state.epicerieItems.push({label : payload.itemToAdd});
            }
            else if (payload.type == 'bricolage') {
            
                state.bricolageItems.push({label : payload.itemToAdd});
            }
        }
    }
});

let vueInstance = new Vue({
    el: '#app',
    router: router,
    store: store,    
});