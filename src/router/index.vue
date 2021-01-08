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
    data() {
        return { current: window.location.pathname };
    },
    computed: {
        routedComponent() {
            return routes[this.current];
        },
    },
};
</script>
