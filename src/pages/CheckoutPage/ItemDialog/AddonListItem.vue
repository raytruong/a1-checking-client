<template>
    <v-card flat tile color="transparent">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>
                    <v-row>
                        <v-col cols="3" class="font-weight-bold blue--text">
                            <PriceInput
                                :default-price="addon.price"
                                @priceChange="handleAddonPriceChange"
                            />
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
                        tile
                        outlined
                        small
                        @click.stop="handleIncreaseButton"
                    >
                        <v-icon>mdi-plus</v-icon>
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
                        tile
                        outlined
                        small
                        @click.stop="handleDecreaseButton"
                    >
                        <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <v-btn
                        class="ml-2"
                        color="red lighten-2"
                        outlined
                        small
                        @click.stop="handleRemoveButton"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-row>
            </v-list-item-action>
        </v-list-item>
        <v-divider />
    </v-card>
</template>

<script>
import PriceInput from "@/components/shared/PriceInput";

export default {
    name: "AddonListItem",

    components: {
        PriceInput,
    },

    props: {
        addon: {
            type: Object,
            default: () => {},
        },
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
        handleAddonPriceChange(payload) {
            this.$emit("changePrice", payload);
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

.theme--light.v-icon {
    color: #e57373;
}
</style>
