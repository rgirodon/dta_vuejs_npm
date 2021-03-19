export default {
    data: function() { 
        return {
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
    template: `<div>
                    <h2>Shopping List</h2>
                    <input v-model="itemToAdd" placeholder="Add item"><span><button v-on:click="addItem">Add item</button></span>
                    
                    <ul>
                        <li v-for="item in items">{{ item.label }}</li>
                    </ul>
                </div>`,
    created: function() {
        console.log('Shopping instance created');
    },
    mounted: function() {
        console.log('Shopping instance mounted');
    },
}