export default {
    data: function() { 
        return {
            itemToAdd : ''
        };
    },
    props: ['type'],
    computed: {
        items: function() {
            if (this.type == 'epicerie') {
            
                return this.$store.state.epicerieItems;
            }
            else if (this.type == 'bricolage') {

                return this.$store.state.bricolageItems;
            }
        }
    },
    methods: {
        addItem: function() {
            
            this.$store.commit('addItem', { itemToAdd: this.itemToAdd, type: this.type });

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
    }
}