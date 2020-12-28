<template>
    <v-container>
        <v-row>
            <v-col cols="8">
                <v-card height="100%" outlined>
                    Items go here
                </v-card>
            </v-col>
            <v-col>
                <v-card height="100%" outlined max-width="300">
                    <ItemCart :items="items" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ItemCart from "./ItemCart";

export default {
    name: "CheckoutPage",

    components: {
        ItemCart,
    },

    data: function() {
        return {
            empty: [],
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

    methods: {},
};
</script>
