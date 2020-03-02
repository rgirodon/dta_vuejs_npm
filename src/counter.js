export default {
    computed: {
        count: function() {
            return this.$store.state.count;
        }
    },
    methods: {
        increment: function() {
            this.$store.commit('increment');
        }
    },
    template: '<button v-on:click="increment">You clicked me {{ count }} times.</button>',
    created: function() {
        console.log('Counter instance created');
    },
    mounted: function() {
        console.log('Counter instance mounted');
    },
}