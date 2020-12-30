<template>
    <v-container>
        <v-row no-gutters>
            <ItemCard
                v-for="item in items"
                class="ml-3"
                :key="item.name"
                :name="item.name"
                :price="item.price"
                :quantity="item.quantity"
            >
            </ItemCard>
            <v-card
                color="transparent"
                tile
                flat
                height="80vh"
                v-if="this.items.length === 0"
            >
                <v-container fill-height fluid>
                    <v-row class="title" align="center" justify="center">
                        No items to display
                    </v-row>
                </v-container>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import ItemCard from "./ItemCard";
export default {
    name: "ItemSelector",

    components: {
        ItemCard,
    },

    props: {
        items: Array,
    },

    data: function() {
        return {};
    },

    computed: {},

    methods: {},
};
</script>
