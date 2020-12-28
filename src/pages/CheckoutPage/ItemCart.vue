<template>
    <v-container>
        <v-row>
            <v-col>
                <ItemCard
                    v-for="item in items"
                    :key="item.name"
                    :name="item.name"
                    :price="item.price"
                    :quantity="item.quantity"
                >
                </ItemCard>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ItemCard from "./ItemCard";
export default {
    name: "ItemCart",

    components: {
        ItemCard,
    },

    props: {
        // items: Array,
    },

    data: function() {
        return {
            items: [
                {
                    name: "Item Name 1",
                    price: 23.95,
                    quantity: 4,
                },
                {
                    name: "Item Name 2",
                    price: 15.0,
                    quantity: 1,
                },
                {
                    name: "Item Name 3",
                    price: 15.0,
                    quantity: 1,
                },
                {
                    name: "Item Name 4",
                    price: 15.0,
                    quantity: 1,
                },
            ],
        };
    },

    computed: {},

    methods: {},
};
</script>
