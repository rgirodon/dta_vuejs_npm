export default {
    data: function() {
        return {
            items: [
            ],
            itemToAdd: '',
            maxItemId: 0
        }
    },
    methods: {
        addItem: function() {

            this.maxItemId++;

            this.items.push({id : this.maxItemId, label : this.itemToAdd});

            this.itemToAdd = '';
        }
    },
    template:  `<div>
                    <input v-model="itemToAdd" placeholder="Add item" @keyup.enter="addItem">
                    <span>
                        <button @click="addItem">Add item</button>
                    </span>
                    <ul>
                        <li v-for="item in items" v-bind:key="item.id">{{ item.label }}</li>
                    </ul>
                </div>`
}