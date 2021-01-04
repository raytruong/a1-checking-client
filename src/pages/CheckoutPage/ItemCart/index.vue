<template>
    <v-container>
        <v-row>
            <v-col>
                <v-virtual-scroll
                    v-if="this.items.length > 0"
                    class="mb-4"
                    :bench="10"
                    :items="items"
                    :item-height="210"
                    :height="scrollHeight"
                >
                    <template v-slot:default="{ item, index }">
                        <CartItem
                            class="mr-2"
                            :name="item.name"
                            :category="item.category"
                            :price="item.price"
                            :quantity="item.quantity"
                            :addons="item.addons"
                            :index="index"
                        />
                    </template>
                </v-virtual-scroll>
                <v-card color="transparent" tile flat height="70vh" v-else>
                    <v-container fill-height fluid>
                        <v-row class="title" align="center" justify="center">
                            <div class="black--text">
                                No items in cart
                            </div>
                        </v-row>
                    </v-container>
                </v-card>
                <v-btn block large color="green">
                    <span class="white--text">
                        Next
                    </span>
                </v-btn>
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
            this.scrollHeight =
                parseInt(document.getElementById("cart-col").clientHeight, 0) -
                100;
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
