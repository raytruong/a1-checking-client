<template>
    <v-card max-width="256" tile outlined class="mt-2">
        <v-card-title>
            {{ name }}
        </v-card-title>
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
