export default {
    props: { 
        count : {
            type : Number,
            default: 0
        }, 
        increment : {
            type : Number,
            default: 1
        }
    },
    methods: {
        incrementCount: function() {
            this.count = this.count + this.increment;
        }
    },
    template: '<button v-on:click="incrementCount">You clicked me {{ count }} times.</button>',
    created: function() {
        console.log('Counter instance created');
    },
    mounted: function() {
        console.log('Counter instance mounted');
    },
}