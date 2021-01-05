<template>
    <v-card>
        <v-card-title class="justify-center">
            Sale Overview
        </v-card-title>
        <v-card-text class="justify-center">
            <v-row>
                <v-col>
                    <div>
                        {{ getTech }}
                    </div>
                    <div>
                        {{ getDate }}
                    </div>
                    <div>
                        {{ getTime }}
                    </div>
                </v-col>
                <v-col class="title">
                    <div class="black--text">Payment: {{ getPaymentType }}</div>
                    <div class="green--text">Total: {{ getTotal }}</div>
                </v-col>
            </v-row>
            <v-card
                v-if="cart.length > 0"
                class="scroll-window"
                color="grey lighten-3"
                flat
                height="500"
            >
                <v-card
                    tile
                    outlined
                    color="white"
                    v-for="item in cart"
                    :key="item.tag"
                    class="ma-2"
                >
                    <v-card-title>
                        <span>{{ item.name }}</span>
                        <span class="ml-1 black--text">
                            ({{ item.quantity }})
                        </span>
                        <v-spacer />
                        <span class="green--text">${{ item.price / 100 }}</span>
                    </v-card-title>
                    <v-card-subtitle>
                        <div class="black--text">
                            {{ item.category }}
                        </div>
                    </v-card-subtitle>
                    <v-card-text v-if="item.addons">
                        <v-chip-group column class="white--text">
                            <v-chip
                                v-for="addon in item.addons"
                                :key="addon.tag"
                                color="blue"
                                class="white--text"
                                :ripple="false"
                                label
                                outlined
                                small
                            >
                                <span>
                                    {{ addon.name }}
                                </span>
                                <span class="ml-1 black--text">
                                    ({{ addon.quantity }})
                                </span>
                            </v-chip>
                        </v-chip-group>
                    </v-card-text>
                </v-card>
            </v-card>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn outlined>
                Cancel
            </v-btn>
            <v-btn
                @click="handleConfirmButton"
                depressed
                class="white--text"
                color="green"
            >
                Confirm
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
// import Bus from "../checkoutEventBus";
export default {
    name: "ConfirmDialog",

    components: {},

    props: {
        cart: Array,
    },

    data: function() {
        return {};
    },

    computed: {
        getTech: function() {
            return "Raymond Truong";
        },
        getDate: function() {
            return "January 5th, 2021";
        },
        getTime: function() {
            return "12:51 PM";
        },
        getPaymentType: function() {
            return "Visa";
        },
        getTotal: function() {
            return "$250";
        },
    },

    methods: {
        handleConfirmButton() {},
        handleCancelButton() {},
    },
};
</script>

<style scoped>
.scroll-window {
    overflow-y: auto;
}
</style>
