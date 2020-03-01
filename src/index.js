import Vue from 'vue';
import _ from 'lodash';

let vueInstance = new Vue({
    el: '#app',
    data: {
        message: 'Bonne journée la DTA !',
        rawHtmlMessage: '<small>(Restez connectés)</small>',
        textMessage: '2 < 3, isn\'t it ?',
        imageSrc: 'img/logo.jpg',
        counter: 0,
        randomNumber: 1,
        items: [
            {id: 1, label: 'Sols intérieur'},
            {id: 2, label: 'Peinture'},
            {id: 3, label: 'Plomberie'},
            {id: 4, label: 'Sols extérieur'},
        ],
        itemToAdd: '',
        maxItemId: 4
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
        },
        addItem: function() {

            this.maxItemId++;

            console.log(this.maxItemId);
            
            this.items.push({id : this.maxItemId, label : this.itemToAdd});

            this.itemToAdd = '';
        }
    }
});