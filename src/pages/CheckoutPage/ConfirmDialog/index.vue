<template>
    <v-card>
        <v-card-title class="justify-center">
            Sale Overview
        </v-card-title>
        <v-card-text>
            <v-card color="transparent" flat>
                <v-row class="ml-2 black--text">
                    <v-col class="title">
                        <div>{{ getTech }}</div>
                        <div>
                            {{ getDate }}
                        </div>
                        <div>
                            {{ getTime }}
                        </div>
                    </v-col>
                    <v-col>
                        <v-row>
                            <span class="title black--text">Payment:</span>
                            <v-chip
                                label
                                flat
                                color="transparent"
                                class="noHover"
                            >
                                <font-awesome-icon
                                    :class="getPaymentType.class"
                                    :icon="getPaymentType.icon"
                                />
                                <span>
                                    {{ getPaymentType.text }}
                                </span>
                            </v-chip>
                        </v-row>
                        <v-row>
                            <span class="title green--text">
                                Total: ${{ cartTotal }}</span
                            >
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
            <v-card
                class="scroll-window"
                color="grey lighten-3"
                flat
                height="500"
            >
                <OverviewItem
                    v-for="(item, index) in items"
                    :key="`${item.tag}-${index}`"
                    :item="item"
                />
            </v-card>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn outlined @click="handleCancelButton">
                Cancel
            </v-btn>
            <v-btn
                depressed
                class="white--text"
                color="green"
                @click="handleConfirmButton"
            >
                Confirm
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import OverviewItem from "./OverviewItem";
import { mapGetters } from "vuex";

export default {
    name: "ConfirmDialog",

    components: {
        OverviewItem,
    },

    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },

    data: function() {
        return {};
    },

    computed: {
        getTech: function() {
            return this.$store.state.global.loggedInEmployee.name;
        },
        getDate: function() {
            return new Date().toLocaleString("en-US").split(",")[0];
        },
        getTime: function() {
            return new Date().toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            });
        },
        getPaymentType: function() {
            switch (this.$store.state.checkout.paymentType) {
                case "cash":
                    return {
                        text: "Cash",
                        icon: "money-bill-alt",
                        class: "mr-1 green--text",
                    };
                case "visa":
                    return {
                        text: "Card",
                        icon: "credit-card",
                        class: "mr-1 deep-purple--text",
                    };
                default:
                    return {
                        text: "Error",
                    };
            }
        },
        getSubtotal: function() {
            return "$200";
        },
        getTip: function() {
            return "$50";
        },
        ...mapGetters("checkout", ["cartTotal"]),
    },

    methods: {
        handleCancelButton() {
            this.$store.commit("checkout/closeConfirmDialog");
        },
        handleConfirmButton() {
            this.$store.dispatch("checkout/confirmSale");
        },
    },
};
</script>

<style scoped>
.scroll-window {
    overflow-y: auto;
}
.noHover {
    pointer-events: none;
}
</style>
