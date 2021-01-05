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
                        :key="item.tag"
                        class="mr-1 mb-2"
                        :item="item"
                        @removeFromCart="
                            handleCartItemActions('removeFromCart', index)
                        "
                        @increaseQuantity="
                            handleCartItemActions('increaseQuantity', index)
                        "
                        @decreaseQuantity="
                            handleCartItemActions('decreaseQuantity', index)
                        "
                        @editCartItem="
                            handleCartItemActions('editCartItem', index)
                        "
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
                            size="large"
                        />
                        <span>Visa</span>
                    </v-chip>
                    <v-chip value="cash" class="payment-chip" label large>
                        <font-awesome-icon
                            class="mr-1 green--text"
                            icon="money-bill-alt"
                            size="large"
                        />
                        <span>Cash</span>
                    </v-chip>
                </v-chip-group>
                <v-btn
                    @click="handleFinishButton"
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
import Bus from "../checkoutEventBus";
import CartItem from "./CartItem";
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
            paymentType: "visa",
        };
    },

    computed: {},

    methods: {
        handleFinishButton() {
            Bus.$emit("confirmCheckout");
        },
        handleCartItemActions(event, index) {
            Bus.$emit(event, index);
        },
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
