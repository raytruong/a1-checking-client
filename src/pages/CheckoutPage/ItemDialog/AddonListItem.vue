<template>
    <v-card flat tile color="transparent">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>
                    <v-row>
                        <v-col cols="3" class="font-weight-bold blue--text">
                            <v-text-field
                                dense
                                outlined
                                prefix="$"
                                hide-details="auto"
                                :value="addon.price"
                                clearable
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="9" justify="center">
                            {{ addon.name }}
                        </v-col>
                    </v-row>
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

<style>
/* Price input size*/
.v-text-field .v-input__control .v-input__slot {
    min-height: auto !important;
    display: flex !important;
    align-items: center !important;
}

/* Price input clearable vertical alignment */
.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined
    .v-input__append-inner {
    margin-top: 4px;
}

/* List item padding */
.v-list-item__content {
    padding: 0px;
}

/* List item text vertical alignment */
.v-list-item .v-list-item__title {
    line-height: 1.9;
}
</style>
