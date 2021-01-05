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
                <AddonListItem
                    v-for="(addon, index) in selectedAddons"
                    @increaseQuantity="handleIncreaseQuantity(index)"
                    @decreaseQuantity="handleIncreaseQuantity(index)"
                    @removeAddon="handleRemoveAddon(index)"
                    :key="addon.tag"
                    :addon="addon"
                    :index="index"
                />
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
import AddonListItem from "./AddonListItem";
export default {
    name: "ItemDialog",

    components: {
        AddonListItem,
    },

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
        handleIncreaseQuantity(index) {
            this.selectedAddons[index].quantity += 1;
            this.$set(this.selectedAddons, index, this.selectedAddons[index]); // reactivity
        },
        handleDecreaseQuantity(index) {
            if (this.selectedAddons[index].quantity > 1)
                this.selectedAddons[index].quantity -= 1;
            this.$set(this.selectedAddons, index, this.selectedAddons[index]); // reactivity
        },
        handleRemoveAddon(index) {
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
