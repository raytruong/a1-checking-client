<template>
    <v-card>
        <v-card-title class="headline">
            {{ item.name }}
        </v-card-title>
        <v-card-subtitle class="title">
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
            <div class="title black--text">
                Select Addons
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
            <v-card
                v-if="selectedAddons.length > 0"
                class="scroll-window"
                color="white"
                flat
                height="250"
            >
                <v-card
                    flat
                    tile
                    color="transparent"
                    v-for="(addon, index) in selectedAddons"
                    :key="addon.tag"
                >
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ addon.name }}
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-row>
                                <v-btn
                                    outlined
                                    tile
                                    small
                                    @click.stop="handleIncreaseButton(index)"
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
                                        addon.quantity
                                    }}</span>
                                </v-avatar>
                                <v-btn
                                    outlined
                                    tile
                                    small
                                    @click.stop="handleDecreaseButton(index)"
                                >
                                    <font-awesome-icon
                                        icon="minus-square"
                                        size="small"
                                    />
                                </v-btn>
                                <v-btn
                                    class="ml-2"
                                    color="red lighten-2"
                                    @click.stop="handleRemoveButton(index)"
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
                    <v-divider />
                </v-card>
            </v-card>
            <v-card v-else height="250" tile elevation="0" color="transparent">
                <v-container fill-height fluid>
                    <v-row class="title" align="center" justify="center">
                        <div class="black--text">
                            No addons selected
                        </div>
                    </v-row>
                </v-container>
            </v-card>
        </v-container>
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
                Finish Editing
            </v-btn>
        </v-card-actions>
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
            selectedAddons: this.item.addons,
            customPrice: this.item.price,
        };
    },

    methods: {
        handleFinishButton() {
            let editedItem = JSON.parse(JSON.stringify(this.item)); // gross
            editedItem.addons = this.selectedAddons;
            Bus.$emit("addToCart", editedItem);
            this.selectedAddons = [];
        },
        handleIncreaseButton(index) {
            this.selectedAddons[index].quantity += 1;
            this.$set(this.selectedAddons, index, this.selectedAddons[index]); // reactivity
        },
        handleDecreaseButton(index) {
            if (this.selectedAddons[index].quantity > 1)
                this.selectedAddons[index].quantity -= 1;
            this.$set(this.selectedAddons, index, this.selectedAddons[index]); // reactivity
        },
        handleRemoveButton(index) {
            this.selectedAddons.splice(index, 1);
        },
        addAddon(addon) {
            let newAddon = JSON.parse(JSON.stringify(addon)); // gross
            newAddon.quantity = 1;
            this.selectedAddons.push(newAddon);
        },
    },
};
</script>

<style scoped>
.scroll-window {
    overflow-y: auto;
}
</style>
