<template>
    <component :is="routedComponent"></component>
</template>

<script>
import LoginPage from "@/pages/LoginPage";
import CheckoutPage from "@/pages/CheckoutPage";

const routes = {
    "/": LoginPage,
    "/checkout": CheckoutPage,
};

export default {
    computed: {
        routedComponent() {
            return routes[this.$store.state.global.url];
        },
    },
};
</script>
