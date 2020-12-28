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
