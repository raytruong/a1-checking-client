<template>
    <component :is="routedComponent"></component>
</template>

<script>
import LoginPage from "@/pages/LoginPage";
import CheckoutPage from "@/pages/CheckoutPage";
import ManagePage from "@/pages/ManagePage";

const routes = {
    "/": LoginPage,
    "/checkout": CheckoutPage,
    "/manage": ManagePage,
};

export default {
    computed: {
        routedComponent() {
            return routes[this.$store.state.global.url];
        },
    },
};
</script>
