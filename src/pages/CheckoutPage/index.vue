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
                <ItemCart :items="selected" />
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
import Bus from "./checkoutEventBus";
import Items from "@/items.json";

export default {
    name: "CheckoutPage",

    components: {
        ItemSelector,
        ItemCart,
        ItemDialog,
    },

    data: function() {
        return {
            showItemDialog: false,
            empty: [],
            selected: [],
            items: Object.values(Items),
        };
    },

    mounted() {
        // Register eventbus listeners
        Bus.$on("addToCart", this.addToCart);
        Bus.$on("removeFromCart", this.removeFromCart);
        Bus.$on("increaseQuantity", this.increaseQuantity);
        Bus.$on("decreaseQuantity", this.decreaseQuantity);
    },

    methods: {
        addToCart(tag) {
            const item = JSON.parse(JSON.stringify(Items[tag]));
            item.quantity = 1;
            this.selected.push(item);
        },
        removeFromCart(index) {
            this.selected.splice(index, 1);
        },
        increaseQuantity(index) {
            this.selected[index].quantity += 1;
        },
        decreaseQuantity(index) {
            if (this.selected[index].quantity > 1)
                this.selected[index].quantity -= 1;
        },
    },
};
</script>

<style scoped>
.grey-background {
    border-radius: 6px;
    background-color: #eeeeee;
}
</style>
