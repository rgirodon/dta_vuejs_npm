import Vue from 'vue';

Vue.directive('blueify', {
    
    bind: function (el) {
        
        el.style.color = "#3b5998";
    }
});

export default {};