<template>
    <v-card max-width="256" height="160" tile outlined class="mt-2">
        <v-card-text class="black--text title">
            {{ name }}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "ItemCard",

    props: {
        name: String,
    },

    data: function() {
        return {};
    },

    computed: {},

    methods: {},
};
</script>
