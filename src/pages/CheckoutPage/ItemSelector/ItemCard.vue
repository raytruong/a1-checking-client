<template>
    <v-card
        @click.stop="handleClick"
        max-width="256"
        height="160"
        tile
        outlined
        class="mt-2"
    >
        <v-card-text class="black--text title">
            {{ item.name }}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "ItemCard",

    props: {
        item: Object,
    },

    data: function() {
        return {};
    },

    computed: {},

    methods: {
        handleClick: function() {
            this.$emit("selectItem", this.item.tag);
        },
    },
};
</script>
