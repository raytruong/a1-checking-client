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

let selected = [];
for (let i = 1; i < 8; i += 1) {
    selected.push({ name: `Item #${i}`, price: 230.95, quantity: 2 });
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
            selected: selected,
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
