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
        <v-card-text v-if="addons">
            <v-chip-group column class="white--text">
                <v-chip
                    v-for="addon in addons"
                    :key="addon.tag"
                    color="blue"
                    class="white--text"
                    :ripple="false"
                    label
                    outlined
                    small
                >
                    {{ `${addon.name} x${addon.quantity}` }}
                </v-chip>
            </v-chip-group>
        </v-card-text>
        <v-card-actions>
            <v-btn
                class="ml-2"
                color="red lighten-2"
                @click.stop="handleRemoveButton"
                tile
                outlined
                small
            >
                <font-awesome-icon icon="trash-alt" size="small" />
            </v-btn>
            <v-btn
                class="ml-3"
                color="orange"
                @click.stop="handleEditButton"
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
        addons: Array,
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
        handleRemoveButton() {
            Bus.$emit("removeFromCart", this.index);
        },
        handleIncreaseButton() {
            Bus.$emit("increaseQuantity", this.index);
        },
        handleDecreaseButton() {
            Bus.$emit("decreaseQuantity", this.index);
        },
        handleEditButton() {
            Bus.$emit("editCartItem", this.index);
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
