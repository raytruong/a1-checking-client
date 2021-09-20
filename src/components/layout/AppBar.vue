<template>
    <v-app-bar app flat color="primary">
        <v-toolbar-title class="white--text">A-1 Nail Salon</v-toolbar-title>
        <v-spacer />
        <v-toolbar-title class="white--text">{{ getTech }}</v-toolbar-title>
        <v-spacer />
        <v-btn @click="handleManageButton">
            Manage
        </v-btn>
        <!-- <v-toolbar-title class="white--text">{{ date }}</v-toolbar-title> -->
    </v-app-bar>
</template>

<script>
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

export default {
    name: "AppBar",

    data: function() {
        return {
            date: new Date().toLocaleString("en-us", options),
            user: "Sign In",
        };
    },
    computed: {
        getTech: function() {
            return this.$store.state.global.loggedInEmployee.name || "Sign In";
        },
    },
    methods: {
        handleManageButton() {
            this.$store.commit("global/setUrl", "/manage");
        },
    },
};
</script>
