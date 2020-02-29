import Vue from 'vue';
import _ from 'lodash';

let vueInstance = new Vue({
    el: '#app',
    data: {
        message: 'Bonne journée la DTA !',
        rawHtmlMessage: '<small>(Restez connectés)</small>',
        textMessage: '2 < 3, isn\'t it ?',
        imageSrc: 'img/logo.jpg',
        counter: 0
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
        }
    },
    methods: {
        increment: function() {
            this.counter++;
        }
    }
});