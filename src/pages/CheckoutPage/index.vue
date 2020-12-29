<template>
    <v-container fill-height>
        <v-row fill-height>
            <v-col fill-height>
                <v-card height="100%" color="grey lighten-3" outlined>
                    Items go here
                </v-card>
            </v-col>
            <v-col fill-height cols="3">
                <v-card height="100%" color="grey lighten-3" outlined>
                    <ItemCart :items="empty" />
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
