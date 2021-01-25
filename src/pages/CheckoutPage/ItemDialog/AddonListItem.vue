<template>
    <v-card flat tile color="transparent">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>
                    <span>
                        {{ addon.name }}
                    </span>
                </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
                <v-row>
                    <v-btn
                        outlined
                        tile
                        small
                        @click.stop="handleIncreaseButton"
                    >
                        <font-awesome-icon icon="plus-square" />
                    </v-btn>
                    <v-avatar
                        tile
                        color="grey darken-3"
                        width="28"
                        max-height="28"
                    >
                        <span class="white--text">{{ addon.quantity }}</span>
                    </v-avatar>
                    <v-btn
                        outlined
                        tile
                        small
                        @click.stop="handleDecreaseButton"
                    >
                        <font-awesome-icon icon="minus-square" />
                    </v-btn>
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
                </v-row>
            </v-list-item-action>
        </v-list-item>
        <v-divider />
    </v-card>
</template>

<script>
export default {
    name: "AddonListItem",

    props: {
        addon: Object,
    },

    data: function() {
        return {};
    },

    computed: {},

    methods: {
        handleIncreaseButton() {
            this.$emit("increaseQuantity");
        },
        handleDecreaseButton() {
            this.$emit("decreaseQuantity");
        },
        handleRemoveButton() {
            this.$emit("removeAddon");
        },
    },
};
</script>
