<template>
    <v-app>
        <AppBar />
        <v-main>
            <AppRouter />
        </v-main>
    </v-app>
</template>

<script>
import AppBar from "@/components/layout/AppBar";
import AppRouter from "@/router";

export default {
    name: "App",

    components: {
        AppBar,
        AppRouter,
    },

    data: () => ({
        //
    }),
};
</script>
