<template>
    <v-card>
        <v-card-title class="headline">
            <span>{{ item.name }}</span>
            <v-spacer />
            <span class="green--text">${{ displayPrice }}</span>
        </v-card-title>
        <v-card-subtitle class="title">
            {{ item.category }}
        </v-card-subtitle>
        <!-- <v-card-text>
            <v-row>
                <v-col cols="2">
                    <span class="title black--text">
                        Base Price:
                    </span>
                </v-col>
                <v-col cols="2" class="font-weight-bold blue--text">
                    <PriceInput
                        :defaultPrice="item.price"
                        @priceChange="handleBaseChangePrice"
                    />
                </v-col>
            </v-row>
        </v-card-text> -->
        <v-card-text>
            <div class="title black--text">
                Select Addons
            </div>
            <v-chip-group column>
                <v-chip
                    v-for="addon in addonOptions"
                    :key="addon.tag"
                    color="blue"
                    class="white--text"
                    @click="handleAddAddon(addon)"
                >
                    <v-icon small>mdi-plus</v-icon>
                    {{ addon.name }}
                </v-chip>
            </v-chip-group>
        </v-card-text>
        <v-container>
            <v-card
                v-if="activeAddons.length > 0"
                class="scroll-window"
                color="white"
                flat
                height="300"
            >
                <AddonListItem
                    v-for="(addon, index) in activeAddons"
                    :key="addon.tag"
                    :addon="addon"
                    :index="index"
                    @increaseQuantity="handleIncreaseQuantity(index)"
                    @decreaseQuantity="handleDecreaseQuantity(index)"
                    @removeAddon="handleRemoveAddon(index)"
                    @changePrice="handleAddonChangePrice(index, $event)"
                />
            </v-card>
            <v-card v-else height="300" tile elevation="0" color="transparent">
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
            <v-btn outlined @click="handleCancelButton">
                Cancel
            </v-btn>
            <v-btn
                depressed
                class="white--text"
                color="green"
                @click="handleFinishButton"
            >
                Finish Editing
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import cloneDeep from "lodash.clonedeep";
import currency from "currency.js";
import AddonListItem from "./AddonListItem";
// import PriceInput from "@/components/shared/PriceInput";

export default {
    name: "ItemDialog",

    components: {
        AddonListItem,
        // PriceInput,
    },

    props: {
        item: {
            type: Object,
            default: () => {},
        },
        addonOptions: {
            type: Array,
            default: () => [],
        },
    },

    data: function() {
        return {
            activeAddons: [],
            price: this.item.price,
        };
    },

    computed: {
        displayPrice: function() {
            if (!this.item.price) {
                return;
            }
            const activeAddonsPrice = this.activeAddons.reduce(function(
                total,
                addon,
            ) {
                return total.add(addon.price.multiply(addon.quantity));
            },
            currency(0));
            return this.item.totalPrice
                ? this.item.totalPrice.add(activeAddonsPrice)
                : this.item.price.add(activeAddonsPrice);
        },
    },

    watch: {
        "$store.state.checkout.activeItem": function() {
            // Load pricing and addons from active item
            if (
                this.$store.state.checkout.activeItem &&
                this.$store.state.checkout.itemDialog === true
            ) {
                this.activeAddons = cloneDeep(this.item.addons);
                this.price = this.item.price;
            }
        },
    },

    methods: {
        handleCancelButton() {
            this.$store.commit("checkout/closeItemDialog");
        },
        handleFinishButton() {
            this.$store.commit("checkout/finishItemEditing", {
                addons: this.activeAddons,
                // price: this.price,
            });
            this.activeAddons = [];
        },
        handleIncreaseQuantity(index) {
            this.activeAddons[index].quantity += 1;
        },
        handleDecreaseQuantity(index) {
            this.activeAddons[index].quantity -=
                this.activeAddons[index].quantity > 1 ? 1 : 0;
        },
        handleRemoveAddon(index) {
            this.activeAddons.splice(index, 1);
        },
        // handleBaseChangePrice(payload) {
        //     this.price = currency(payload);
        // },
        handleAddonChangePrice(index, payload) {
            this.activeAddons[index].price = currency(payload);
        },
        handleAddAddon(addon) {
            for (const i in this.activeAddons) {
                // Existing addon, increment value
                if (this.activeAddons[i].tag === addon.tag) {
                    // return (this.activeAddons[i].quantity += 1);
                    return;
                }
            }
            this.activeAddons.push({ ...addon, quantity: 1 }); // New addon
        },
    },
};
</script>

<style scoped>
.scroll-window {
    overflow-y: auto;
}
</style>
