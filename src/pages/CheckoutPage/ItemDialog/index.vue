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
                height="250"
            >
                <AddonListItem
                    v-for="(addon, index) in activeAddons"
                    @increaseQuantity="handleIncreaseQuantity(index)"
                    @decreaseQuantity="handleDecreaseQuantity(index)"
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
            activeAddons: [],
            customPrice: 0,
        };
    },

    watch: {
        "$store.state.activeItem": function() {
            // Load addons from item
            if (
                this.$store.state.activeItem &&
                this.$store.state.itemDialog === true
            ) {
                this.activeAddons = JSON.parse(
                    JSON.stringify(this.item.addons),
                );
            }
        },
    },

    methods: {
        handleFinishButton() {
            this.$store.commit("finishItemEditing", this.activeAddons);
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
        handleAddAddon(addon) {
            for (let i in this.activeAddons) {
                // Existing addon
                if (this.activeAddons[i].tag === addon.tag) {
                    return (this.activeAddons[i].quantity += 1);
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
