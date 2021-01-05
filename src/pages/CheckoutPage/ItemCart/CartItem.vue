<template>
    <v-card tile outlined>
        <v-card-title>
            <span>{{ item.name }}</span>
            <v-spacer />
            <span class="green--text">${{ item.price / 100 }}</span>
        </v-card-title>
        <v-card-subtitle>
            <div class="black--text">
                {{ item.category }}
            </div>
        </v-card-subtitle>
        <v-card-text>
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
                <span class="white--text">{{ item.quantity }}</span>
            </v-avatar>
            <v-btn outlined tile small @click.stop="handleDecreaseButton">
                <font-awesome-icon icon="minus-square" size="small" />
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
            this.$emit("removeFromCart");
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
</style>
