<template>
    <v-card>
        Hi
    </v-card>
</template>

<script>
// import Bus from "../checkoutEventBus";
export default {
    name: "ConfirmDialog",

    components: {},

    props: {
        cart: Array,
    },

    data: function() {
        return {};
    },

    methods: {
        handleFinishButton() {},
        handleCancelButton() {},
    },
};
</script>

<style scoped>
.scroll-window {
    overflow-y: auto;
}
</style>
