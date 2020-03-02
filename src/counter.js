import lifeCycleMixin from './lifeCycleMixin';

export default {
    mixins: [lifeCycleMixin],
    data: function() { 
        return {
            name: 'counter'
        };
    },
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
    template: '<button v-on:click="increment" v-blueify>You clicked me {{ count }} times.</button>',    
}