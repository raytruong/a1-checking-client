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
                            class="mr-1 deep-purple--text"
                            icon="credit-card"
                            size="large"
                        />
                        <span>
                            {{ getPaymentType }}
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
import Bus from "../checkoutEventBus";
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
        handleConfirmButton() {
            Bus.$emit("confirmSale");
        },
        handleCancelButton() {
            Bus.$emit("closeConfirmDialog");
        },
    },
};
</script>

<style scoped>
.scroll-window {
    overflow-y: auto;
}
</style>
