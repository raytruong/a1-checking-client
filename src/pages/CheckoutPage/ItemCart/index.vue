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
                    height="65vh"
                >
                    <CartItem
                        v-for="(item, index) in this.items"
                        :key="`${item.tag}-${index}`"
                        class="mr-1 mb-2"
                        :item="item"
                        @removeCartItem="removeCartItem(index)"
                        @editCartItem="editCartItem(index)"
                    />
                </v-card>
                <v-card v-else color="transparent" tile flat height="65vh">
                    <v-container fill-height fluid>
                        <v-row class="title" align="center" justify="center">
                            <div class="black--text">
                                No items in cart
                            </div>
                        </v-row>
                    </v-container>
                </v-card>
                <v-divider class="mb-2 mt-2" />
                <v-row>
                    <v-col class="d-flex title black--text">
                        Total:
                    </v-col>
                    <v-col class="d-flex title black--text justify-end">
                        ${{ cartTotal }}
                    </v-col>
                </v-row>
                <v-chip-group
                    mandatory
                    center-active
                    v-model="paymentType"
                    active-class="blue--text text--accent-4"
                >
                    <v-chip value="visa" class="payment-chip" label large>
                        <font-awesome-icon
                            class="mr-1 blue--text"
                            color="white"
                            icon="credit-card"
                        />
                        <span>Card</span>
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
                    class="mt-2"
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
import { mapGetters, mapMutations } from "vuex";
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
        ...mapGetters("checkout", ["cartTotal"]),
    },

    methods: {
        ...mapMutations("checkout", [
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
.v-chip--active {
    border: 1px solid dodgerblue;
    background-color: white;
}
</style>
