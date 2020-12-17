<template>
    <v-app-bar app color="primary">
        <v-toolbar-title class="white--text">A-1 Nail Salon</v-toolbar-title>
        <v-spacer />
        <v-toolbar-title class="white--text">{{ date }}</v-toolbar-title>
    </v-app-bar>
</template>

<script>
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

export default {
    name: 'AppBar',

    data: function() {
        return {
            date: new Date().toLocaleString('en-us', options),
            user: 'Sign In'
        };
    }
};
</script>
