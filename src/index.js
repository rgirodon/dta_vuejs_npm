import Vue from 'vue';

let vueInstance = new Vue({
    el: '#app',
    data: {
        message: 'Hello from DTA !',
        rawHtmlMessage: '<small>(Stay tuned)</small>',
        textMessage: '2 < 3, isn\'t it ?',
        imageSrc: 'img/logo.jpg'
    }
});