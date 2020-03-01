export default {
    data: function() {
        return {
            count: 0
        }
    },
    methods: {
        increment: function() {
            this.count++;
        }
    },
    template: '<button v-on:click="increment">You clicked me {{ count }} times.</button>'
}