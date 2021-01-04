<template>
    <v-card>
        <v-card-title>
            {{ item.name }}
        </v-card-title>
        <v-card-subtitle>
            {{ item.category }}
        </v-card-subtitle>
        <v-card-text>
            <v-text-field
                label="Price"
                :value="item.price / 100"
                prefix="$"
                dense
            ></v-text-field>
        </v-card-text>

        <v-card-text>
            <div class="blue--text">
                Addons
            </div>
            <v-chip-group column>
                <v-chip
                    v-for="addon in addonOptions"
                    color="blue"
                    class="white--text"
                    :key="addon.tag"
                    @click="addAddon(addon)"
                >
                    <v-icon small>mdi-plus</v-icon>
                    {{ addon.name }}
                </v-chip>
            </v-chip-group>
        </v-card-text>
        <v-container>
            <v-card tile flat color="grey lighten-4">
                <v-virtual-scroll
                    v-if="selectedAddons.length > 0"
                    :items="selectedAddons"
                    :item-height="50"
                    :bench="50"
                    height="250"
                >
                    <template v-slot:default="{ item }">
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>{{
                                    item.name
                                }}</v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-row>
                                    <v-btn
                                        outlined
                                        tile
                                        small
                                        @click.stop="handleIncreaseButton"
                                    >
                                        <font-awesome-icon
                                            icon="plus-square"
                                            size="large"
                                        />
                                    </v-btn>
                                    <v-avatar
                                        tile
                                        color="grey darken-3"
                                        width="28"
                                        max-height="28"
                                    >
                                        <span class="white--text">{{
                                            quantity
                                        }}</span>
                                    </v-avatar>
                                    <v-btn
                                        outlined
                                        tile
                                        small
                                        @click.stop="handleDecreaseButton"
                                    >
                                        <font-awesome-icon
                                            icon="minus-square"
                                            size="small"
                                        />
                                    </v-btn>
                                    <v-btn
                                        class="ml-2"
                                        color="red lighten-2"
                                        @click.stop="handleRemoveButton"
                                        tile
                                        outlined
                                        small
                                    >
                                        <font-awesome-icon
                                            icon="trash-alt"
                                            size="small"
                                        />
                                    </v-btn>
                                </v-row>
                            </v-list-item-action>
                        </v-list-item>
                        <v-divider></v-divider>
                    </template>
                </v-virtual-scroll>
                <v-card
                    v-else
                    height="250"
                    tile
                    elevation="0"
                    color="transparent"
                >
                    <v-container fill-height fluid>
                        <v-row class="title" align="center" justify="center">
                            <div class="black--text">
                                No addons selected
                            </div>
                        </v-row>
                    </v-container>
                </v-card>
            </v-card>
            <v-card-actions>
                <v-spacer />
                <v-btn outlined>
                    Cancel
                </v-btn>
                <v-btn
                    @click="handleFinishButton"
                    depressed
                    class="white--text"
                    color="green"
                >
                    Finished
                </v-btn>
            </v-card-actions>
        </v-container>
    </v-card>
</template>

<script>
import Bus from "../checkoutEventBus";
export default {
    name: "ItemDialog",

    components: {},

    props: {
        item: Object,
        addonOptions: Array,
    },

    data: function() {
        return {
            editedItem: {},
            selectedAddons: [],
            customPrice: this.item.price,
        };
    },
    computed: {},
    methods: {
        handleFinishButton() {
            Bus.$emit("addToCart", this.editedItem);
        },
        addAddon(addon) {
            this.selectedAddons.push(addon);
        },
    },
};
</script>
