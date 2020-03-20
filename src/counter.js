export default {
    data: function() {
        return {
            count: 1000
        }
    },
    methods: {
        increment: function() {
            this.count = this.count + 10;
        }
    },
    template: '<button v-on:click="increment">You clicked me {{ count }} times.</button>'
}