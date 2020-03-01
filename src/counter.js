export default {
    props: { 
        count : Number, 
        increment : Number
    },
    methods: {
        incrementCount: function() {
            this.count = this.count + this.increment;
        }
    },
    template: '<button v-on:click="incrementCount">You clicked me {{ count }} times.</button>'
}