import Vue from 'vue';
import _ from 'lodash';
import counter from './counter';
import shoppingList from './shoppingList';

Vue.component('counter-cpt', counter);

Vue.component('shopping-list', shoppingList);

let vueInstance = new Vue({
    el: '#app',
    data: {
        message: 'Bonne journée la DTA !',
        rawHtmlMessage: '<small>(Restez connectés)</small>',
        textMessage: '2 < 3, isn\'t it ?',
        imageSrc: 'img/logo.jpg',
        counter: 0,
        randomNumber: 1,
        
    },
    created: function() {
        console.log('Vue instance created');
    },
    mounted: function() {
        console.log('Vue instance mounted');
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        },
        deburredMessage: function() {
            return _.deburr(this.message);
        },
        noContentMessage: function() {
            return 'No content displayed, because random number genetared was : ' + this.randomNumber;
        }
    },
    methods: {
        increment: function() {
            
            this.counter++;
        },
        displayContent: function() {

            this.randomNumber = _.random(1, 10);

            console.log(this.randomNumber);

            return this.randomNumber % 2;
        }        
    }
});