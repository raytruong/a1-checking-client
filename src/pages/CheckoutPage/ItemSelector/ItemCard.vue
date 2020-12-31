<template>
    <v-card max-width="256" height="160" tile outlined class="mt-2">
        <v-card-text class="black--text title">
            {{ getName }}
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

    computed: {
        getName: function() {
            let name = this.name;
            for (let i = 0; i < Math.random() * 30; i++) {
                name += i;
            }
            return name;
        },
    },

    methods: {},
};
</script>
