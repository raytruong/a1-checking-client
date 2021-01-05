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
            <ItemDialog
                :item="dialogItem"
                :addonOptions="items.filter(item => item.category === 'Addons')"
                width="400"
            />
        </v-dialog>
        <v-dialog
            max-width="25vw"
            max-height="30vh"
            v-model="showConfirmDialog"
        >
            <ConfirmDialog :items="selected" width="400" />
        </v-dialog>
    </v-container>
</template>

<script>
import ItemSelector from "./ItemSelector";
import ItemCart from "./ItemCart";
import ItemDialog from "./ItemDialog";
import ConfirmDialog from "./ConfirmDialog";
import Bus from "./checkoutEventBus";
import Items from "@/items.json";

export default {
    name: "CheckoutPage",

    components: {
        ItemSelector,
        ItemCart,
        ItemDialog,
        ConfirmDialog,
    },

    data: function() {
        return {
            showItemDialog: false,
            showConfirmDialog: false,
            dialogItem: {},
            empty: [],
            selected: [],
            items: Object.values(Items),
        };
    },

    mounted() {
        // Register eventbus listeners
        Bus.$on("addToCart", this.addToCart);
        Bus.$on("selectItem", this.selectItem);
        Bus.$on("editCartItem", this.editCartItem);
        Bus.$on("removeFromCart", this.removeFromCart);
        Bus.$on("increaseQuantity", this.increaseQuantity);
        Bus.$on("decreaseQuantity", this.decreaseQuantity);
        Bus.$on("confirmCheckout", this.showConfirmation);
    },

    methods: {
        selectItem(tag) {
            // Replace with class constructor
            const newItem = JSON.parse(JSON.stringify(Items[tag]));
            newItem.quantity = 1;
            newItem.addons = [];
            // Open dialog
            this.dialogItem = newItem;
            this.showItemDialog = true;
        },
        addToCart(item) {
            this.showItemDialog = false;
            this.dialogItem = {};
            this.selected.push(item);
        },
        editCartItem(index) {
            this.showItemDialog = true;
            this.dialogItem = this.selected[index];
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
        showConfirmation() {
            this.showConfirmDialog = true;
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
