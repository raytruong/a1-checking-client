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
                <ItemCart :items="cart" />
            </v-col>
        </v-row>
        <v-dialog
            max-width="45vw"
            max-height="30vh"
            :value="itemDialog"
            @update:return-value="closeItemDialog"
        >
            <ItemDialog
                :item="activeItem"
                :addon-options="addons"
                width="400"
            />
        </v-dialog>
        <v-dialog
            max-width="25vw"
            max-height="30vh"
            :value="confirmDialog"
            @update:return-value="closeConfirmDialog"
        >
            <ConfirmDialog :items="cart" width="400" />
        </v-dialog>
    </v-container>
</template>

<script>
import ItemSelector from "./ItemSelector";
import ItemCart from "./ItemCart";
import ItemDialog from "./ItemDialog";
import ConfirmDialog from "./ConfirmDialog";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
    name: "CheckoutPage",

    components: {
        ItemSelector,
        ItemCart,
        ItemDialog,
        ConfirmDialog,
    },

    data: function() {
        return {};
    },

    computed: {
        ...mapGetters("checkout", ["items", "addons", "cart"]),
        ...mapState("checkout", ["activeItem", "itemDialog", "confirmDialog"]),
    },

    methods: {
        ...mapMutations("checkout", ["closeItemDialog", "closeConfirmDialog"]),
    },
};
</script>

<style scoped>
.grey-background {
    border-radius: 6px;
    background-color: #eeeeee;
}
</style>
