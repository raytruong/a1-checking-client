<template>
    <v-app>
        <AppBar />
        <v-main>
            <LoginPage />
        </v-main>
    </v-app>
</template>

<script>
import AppBar from "@/components/layout/AppBar";
import LoginPage from "@/pages/LoginPage";

export default {
    name: "App",

    components: {
        AppBar,
        LoginPage,
    },

    data: () => ({
        //
    }),
};
</script>
