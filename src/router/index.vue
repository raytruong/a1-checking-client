<template>
    <component :is="routedComponent"></component>
</template>

<script>
import LoginPage from "@/pages/LoginPage";
import CheckoutPage from "@/pages/CheckoutPage";
import SalesPage from "@/pages/SalesPage";

const routes = {
    "/": LoginPage,
    "/checkout": CheckoutPage,
    "/sales": SalesPage,
};

export default {
    computed: {
        routedComponent() {
            return routes[this.$store.state.global.url];
        },
    },
};
</script>
