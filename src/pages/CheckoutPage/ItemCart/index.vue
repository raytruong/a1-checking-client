<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card
                    v-if="items.length > 0"
                    class="scroll-window"
                    color="transparent"
                    tile
                    flat
                    height="70vh"
                >
                    <CartItem
                        v-for="(item, index) in this.items"
                        :key="`${item.tag}-${index}`"
                        class="mr-1 mb-2"
                        :item="item"
                        @removeCartItem="removeCartItem(index)"
                        @increaseQuantity="increaseCartQuantity(index)"
                        @decreaseQuantity="decreaseCartQuantity(index)"
                        @editCartItem="editCartItem(index)"
                    />
                </v-card>
                <v-card v-else color="transparent" tile flat height="70vh">
                    <v-container fill-height fluid>
                        <v-row class="title" align="center" justify="center">
                            <div class="black--text">
                                No items in cart
                            </div>
                        </v-row>
                    </v-container>
                </v-card>
                <v-chip-group
                    mandatory
                    v-model="paymentType"
                    active-class="blue--text text--accent-4"
                >
                    <v-chip value="visa" class="payment-chip" label large>
                        <font-awesome-icon
                            class="mr-1 deep-purple--text"
                            color="white"
                            icon="credit-card"
                        />
                        <span>Visa</span>
                    </v-chip>
                    <v-chip value="cash" class="payment-chip" label large>
                        <font-awesome-icon
                            class="mr-1 green--text"
                            icon="money-bill-alt"
                        />
                        <span>Cash</span>
                    </v-chip>
                </v-chip-group>
                <v-btn
                    @click="openConfirmDialog"
                    large
                    block
                    depressed
                    :disabled="items.length === 0"
                    color="green"
                >
                    <span class="white--text">
                        Finish
                    </span>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CartItem from "./CartItem";
import { mapMutations } from "vuex";
export default {
    name: "ItemCart",

    components: {
        CartItem,
    },

    props: {
        items: Array,
    },

    mounted() {
        this.$nextTick(function() {
            this.scrollHeight =
                parseInt(document.getElementById("cart-col").clientHeight, 0) -
                100;
        });
    },

    data: function() {
        return {
            scrollHeight: 0,
        };
    },

    computed: {
        paymentType: {
            get() {
                return this.$store.state.checkout.paymentType;
            },
            set(type) {
                this.$store.commit("checkout/setPaymentType", type);
            },
        },
    },

    methods: {
        ...mapMutations("checkout", [
            "increaseCartQuantity",
            "decreaseCartQuantity",
            "removeCartItem",
            "editCartItem",
            "openConfirmDialog",
        ]),
    },
};
</script>

<style scoped>
.scroll-window {
    overflow-y: auto;
}
.payment-chip {
    width: 100%;
    justify-content: center;
}
</style>
