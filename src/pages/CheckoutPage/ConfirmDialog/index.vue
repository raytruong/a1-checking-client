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
                    <span class="black--text">Payment:</span>
                    <v-chip label outlined class="ml-2">
                        <font-awesome-icon
                            :class="getPaymentType.class"
                            :icon="getPaymentType.icon"
                        />
                        <span>
                            {{ getPaymentType.text }}
                        </span>
                    </v-chip>
                    <div class="green--text">Total: {{ getTotal }}</div>
                </v-col>
            </v-row>
            <v-card
                class="scroll-window"
                color="grey lighten-3"
                flat
                height="500"
            >
                <OverviewItem
                    v-for="item in items"
                    :item="item"
                    :key="item.tag"
                />
            </v-card>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn @click="closeConfirmDialog" outlined>
                Cancel
            </v-btn>
            <v-btn
                @click="confirmSale"
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
import { mapMutations } from "vuex";
import OverviewItem from "./OverviewItem";
export default {
    name: "ConfirmDialog",

    components: {
        OverviewItem,
    },

    props: {
        items: Array,
    },

    data: function() {
        return {};
    },

    computed: {
        getTech: function() {
            return "Raymond Truong";
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
            switch (this.$store.getters.paymentType) {
                case "cash":
                    return {
                        text: "Cash",
                        icon: "money-bill-alt",
                        class: "mr-1 green--text",
                    };
                case "visa":
                    return {
                        text: "Visa",
                        icon: "credit-card",
                        class: "mr-1 deep-purple--text",
                    };
                default:
                    return {
                        text: "Error",
                    };
            }
        },
        getTotal: function() {
            return "$250";
        },
    },

    methods: {
        ...mapMutations(["confirmSale", "closeConfirmDialog"]),
    },
};
</script>

<style scoped>
.scroll-window {
    overflow-y: auto;
}
</style>
