<template>
    <v-container fill-height>
        <v-row fill-height>
            <v-col class="mr-1 grey-background" fill-height>
                <ItemSelector :items="items" />
            </v-col>
            <v-col
                id="cart-col"
                class="ml-1 grey-background"
                fill-height
                color="grey"
                cols="3"
            >
                <ItemCart :items="selected" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ItemSelector from "./ItemSelector";
import ItemCart from "./ItemCart";

let items = [];
for (let i = 0; i < 100; i += 1) {
    items.push({ name: `Item #${i}` });
}

export default {
    name: "CheckoutPage",

    components: {
        ItemSelector,
        ItemCart,
    },

    data: function() {
        return {
            empty: [],
            items: items,
            selected: [
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
                {
                    name: "Item Name 5",
                    price: 15.0,
                    quantity: 1,
                },
                {
                    name: "Item Name 6",
                    price: 15.0,
                    quantity: 1,
                },
                {
                    name: "Item Name 7",
                    price: 15.0,
                    quantity: 1,
                },
                {
                    name: "Item Name 8",
                    price: 15.0,
                    quantity: 1,
                },
            ],
        };
    },

    methods: {},
};
</script>

<style scoped>
.grey-background {
    border-radius: 6px;
    background-color: #eeeeee;
}
</style>
