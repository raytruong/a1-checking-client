<template>
    <v-container>
        <v-row>
            <v-col>
                <v-virtual-scroll
                    :items="items"
                    :item-height="200"
                    :height="scrollHeight"
                >
                    <template v-slot:default="{ item }">
                        <v-list-item>
                            <CartItem
                                :name="item.name"
                                :price="item.price"
                                :quantity="item.quantity"
                            />
                        </v-list-item>
                    </template>
                </v-virtual-scroll>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CartItem from "./CartItem";
export default {
    name: "ItemCart",

    components: {
        CartItem,
    },

    props: {
        items: Array,
    },

    mounted() {
        this.$nextTick(function() {
            this.scrollHeight = parseInt(
                document.getElementById("cart-col").clientHeight,
                0,
            );
        });
    },

    data: function() {
        return {
            scrollHeight: 0,
        };
    },

    computed: {},

    methods: {},
};
</script>
