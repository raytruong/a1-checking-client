<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card
                    class="scroll-window"
                    color="transparent"
                    tile
                    flat
                    height="70vh"
                    v-if="items.length > 0"
                >
                    <CartItem
                        v-for="(item, index) in this.items"
                        :key="item.tag"
                        class="mr-1 mb-2"
                        :name="item.name"
                        :category="item.category"
                        :price="item.price"
                        :quantity="item.quantity"
                        :addons="item.addons"
                        :index="index"
                    />
                </v-card>
                <v-card v-else color="transparent" tile flat height="70vh">
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

<style scoped>
.scroll-window {
    overflow-y: auto;
}
</style>
