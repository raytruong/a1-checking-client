<template>
    <v-app>
        <AppBar />
        <v-main>
            <CheckoutPage />
        </v-main>
    </v-app>
</template>

<script>
import AppBar from "@/components/layout/AppBar";
// import LoginPage from "@/pages/LoginPage";
import CheckoutPage from "@/pages/CheckoutPage";

export default {
    name: "App",

    components: {
        AppBar,
        // LoginPage,
        CheckoutPage,
    },

    data: () => ({
        //
    }),
};
</script>
