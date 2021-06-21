<template>
    <v-card tile outlined>
        <v-card-title>
            <span>{{ item.name }}</span>
            <v-spacer />
            <span class="green--text">${{ item.total }}</span>
        </v-card-title>
        <v-card-subtitle>
            {{ item.category }}
        </v-card-subtitle>
        <v-card-text>
            <v-chip-group column class="white--text">
                <v-chip
                    v-for="addon in item.addons"
                    :key="addon.tag"
                    color="blue"
                    class="noHover white--text"
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
        <v-card-actions>
            <v-btn
                class="ml-2"
                color="red lighten-2"
                @click.stop="handleRemoveButton"
                tile
                outlined
                small
            >
                <font-awesome-icon icon="trash-alt" />
            </v-btn>
            <v-btn
                class="ml-3"
                color="orange"
                @click.stop="handleEditButton"
                tile
                outlined
                small
            >
                Edit
                <font-awesome-icon class="ml-1" icon="pen" />
            </v-btn>
            <v-spacer />
            <v-btn outlined tile small @click.stop="handleIncreaseButton">
                <font-awesome-icon icon="plus-square" />
            </v-btn>
            <v-avatar tile color="grey darken-3" width="28" max-height="28">
                <span class="white--text">{{ item.quantity }}</span>
            </v-avatar>
            <v-btn outlined tile small @click.stop="handleDecreaseButton">
                <font-awesome-icon icon="minus-square" />
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "CartItem",

    props: {
        item: Object,
    },

    data: function() {
        return {};
    },

    computed: {},

    methods: {
        handleRemoveButton() {
            this.$emit("removeCartItem");
        },
        handleIncreaseButton() {
            this.$emit("increaseQuantity");
        },
        handleDecreaseButton() {
            this.$emit("decreaseQuantity");
        },
        handleEditButton() {
            this.$emit("editCartItem");
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
.noHover {
    pointer-events: none;
}
</style>
