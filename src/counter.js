export default {
    data: function() {
        return {
            count_value: 0
        }
    },
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
            this.count_value = this.count_value + this.increment;
        }
    },
    template: '<button v-on:click="incrementCount">You clicked me {{ count_value }} times.</button>',
    created: function() {
        console.log('Counter instance created');

        this.count_value = this.count;
    },
    mounted: function() {
        console.log('Counter instance mounted');
    },
}

