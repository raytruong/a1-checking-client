<template>
    <v-card tile outlined>
        <v-card-title>
            <span>{{ name }}</span>
            <v-spacer />
            <span class="green--text">${{ price / 100 }}</span>
        </v-card-title>
        <v-card-subtitle>
            <div class="black--text">
                {{ category }}
            </div>
        </v-card-subtitle>
        <v-card-text class="scroll-chips">
            <v-chip-group column class="white--text">
                <v-chip
                    color="blue"
                    class="white--text"
                    :ripple="false"
                    label
                    outlined
                    small
                >
                    Take off Gel x2
                </v-chip>
                <v-chip
                    color="blue"
                    class="white--text"
                    :ripple="false"
                    label
                    outlined
                    small
                >
                    Repair x2</v-chip
                >
                <v-chip
                    color="blue"
                    class="white--text"
                    :ripple="false"
                    label
                    outlined
                    small
                >
                    Pink White x4</v-chip
                >
                <v-chip
                    color="blue"
                    class="white--text"
                    :ripple="false"
                    label
                    outlined
                    small
                >
                    Dipping (Natural Nail)</v-chip
                >
            </v-chip-group>
        </v-card-text>
        <v-card-actions>
            <v-btn
                class="ml-3"
                color="red lighten-2"
                @click.stop="removeFromCart"
                tile
                outlined
                small
            >
                <font-awesome-icon icon="trash" size="small" />
            </v-btn>
            <v-btn
                class="ml-3"
                color="orange"
                @click.stop="editCartItem"
                tile
                outlined
                small
            >
                <font-awesome-icon class="mr-1" icon="pen" size="small" />
                Edit
            </v-btn>
            <v-spacer />
            <v-btn outlined tile small @click.stop="handleIncreaseButton">
                <font-awesome-icon icon="plus-square" size="large" />
            </v-btn>
            <v-avatar tile color="grey darken-3" width="28" max-height="28">
                <span class="white--text">{{ quantity }}</span>
            </v-avatar>
            <v-btn outlined tile small @click.stop="handleDecreaseButton">
                <font-awesome-icon icon="minus-square" size="small" />
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import Bus from "../checkoutEventBus";
export default {
    name: "CartItem",

    props: {
        name: String,
        category: String,
        price: Number,
        quantity: Number,
        index: Number,
    },

    data: function() {
        return {
            buttons: [
                {
                    text: "",
                    icon: "trash",
                    color: "red lighten-2",
                    event: "removeFromCart",
                },
                { text: "edit", icon: "pen", color: "orange" },
            ],
        };
    },

    computed: {},

    methods: {
        removeFromCart() {
            Bus.$emit("removeFromCart", this.index);
        },
        handleIncreaseButton() {
            Bus.$emit("increaseQuantity", this.index);
        },
        handleDecreaseButton() {
            Bus.$emit("decreaseQuantity", this.index);
        },
    },
};
</script>

<style scoped>
.truncate {
    white-space: nowrap;
    word-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
