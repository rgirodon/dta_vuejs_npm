import Vue from 'vue';
import _ from 'lodash';

let vueInstance = new Vue({
    el: '#app',
    data: {
        message: 'Hello from TSE !',
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
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        increment: function() {
            this.counter++;
        },
        displayContent: function() {

            this.randomNumber = _.random(1, 10);

            console.log(this.randomNumber);

            return (this.randomNumber % 2 == 0);
        },
        addItem: function() {

            this.maxItemId++;

            console.log(this.maxItemId);
            
            this.items.push({id : this.maxItemId, label : this.itemToAdd});

            this.itemToAdd = '';
        }
    }
});