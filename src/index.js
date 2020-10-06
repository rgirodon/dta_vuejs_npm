import Vue from 'vue';

let vueInstance = new Vue({
    el: '#app',
    data: {
        message: 'Hello from TSE !',
        counter: 0
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        increment: function() {
            this.counter++;
        }
    }
});