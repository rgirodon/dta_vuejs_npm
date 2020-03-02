import lifeCycleMixin from './lifeCycleMixin';

export default {
    mixins: [lifeCycleMixin],
    data: function() { 
        return {
            name: 'shopping',
            itemToAdd : ''
        };
    },
    computed: {
        items: function() {
            return this.$store.state.items;
        }
    },
    methods: {
        addItem: function() {
            
            this.$store.commit('addItem', { itemToAdd: this.itemToAdd });

            this.itemToAdd = '';
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) 
                return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    },
    template: `<div>
                    <h2 v-blueify>Shopping List</h2>
                    <input v-model="itemToAdd" placeholder="Add item"><span><button v-on:click="addItem">Add item</button></span>
                    
                    <ul>
                        <li v-for="item in items">{{ item.label | capitalize }}</li>
                    </ul>
                </div>`    
}