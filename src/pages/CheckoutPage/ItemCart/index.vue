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
                        v-for="(item, index) in items"
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
                        <v-icon color="green" class="mr-1">mdi-cash-usd</v-icon>
                        Total:
                    </v-col>
                    <v-col class="d-flex title black--text justify-end">
                        <span>${{ cartTotal }}</span>
                    </v-col>
                </v-row>
                <v-chip-group
                    v-model="paymentType"
                    mandatory
                    center-active
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
                    large
                    block
                    depressed
                    :disabled="items.length === 0"
                    color="green"
                    class="mt-2"
                    @click="openConfirmDialog"
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
        items: {
            type: Array,
            default: () => {},
        },
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

    mounted() {
        this.$nextTick(function() {
            this.scrollHeight =
                parseInt(document.getElementById("cart-col").clientHeight, 0) -
                100;
        });
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
