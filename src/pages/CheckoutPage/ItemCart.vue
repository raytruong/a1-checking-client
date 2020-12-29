<template>
    <v-container>
        <v-row>
            <v-col>
                <ItemCard
                    v-for="item in items"
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
                            No items in cart
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ItemCard from "./ItemCard";
export default {
    name: "ItemCart",

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
