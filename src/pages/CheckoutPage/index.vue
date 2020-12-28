<template>
    <v-container>
        <v-row>
            <v-col cols="10">
                <v-card height="100%" outlined>
                    Items go here
                </v-card>
            </v-col>
            <v-col cols="2">
                <v-card height="100%" outlined>
                    <ItemCart />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ItemCart from "./ItemCart";

export default {
    name: "CheckoutPage",

    components: {
        ItemCart,
    },

    data: function() {
        return {};
    },

    methods: {},
};
</script>
