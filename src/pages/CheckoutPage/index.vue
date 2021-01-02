<template>
    <v-container fill-height>
        <v-row fill-height>
            <v-col id="item-col" class="mr-1 grey-background" fill-height>
                <ItemSelector :items="items" />
            </v-col>
            <v-col
                id="cart-col"
                class="ml-1 grey-background"
                fill-height
                color="grey"
                cols="3"
            >
                <ItemCart :items="empty" />
            </v-col>
        </v-row>
        <v-dialog max-width="45vw" max-height="30vh" v-model="showItemDialog">
            <ItemDialog />
        </v-dialog>
    </v-container>
</template>

<script>
import ItemSelector from "./ItemSelector";
import ItemCart from "./ItemCart";
import ItemDialog from "./ItemDialog";
import Items from "@/items.json";

let selected = [];
for (let i = 1; i < 8; i += 1) {
    selected.push({ name: `Item #${i}`, price: 230.95, quantity: 2 });
}

export default {
    name: "CheckoutPage",

    components: {
        ItemSelector,
        ItemCart,
        ItemDialog,
    },

    data: function() {
        return {
            showItemDialog: true,
            empty: [],
            items: Object.values(Items),
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
