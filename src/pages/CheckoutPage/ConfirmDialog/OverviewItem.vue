<template>
    <v-card tile outlined class="ma-2">
        <v-card-title>
            <span>{{ item.name }}</span>
            <span class="ml-1 black--text"> ({{ item.quantity }}) </span>
            <v-spacer />
            <span class="green--text">${{ item.price / 100 }}</span>
        </v-card-title>
        <v-card-subtitle>
            <div class="black--text">
                {{ item.category }}
            </div>
        </v-card-subtitle>
        <v-card-text v-if="item.addons">
            <v-chip-group column class="white--text">
                <v-chip
                    v-for="addon in item.addons"
                    :key="addon.tag"
                    color="blue"
                    class="white--text"
                    :ripple="false"
                    label
                    outlined
                    small
                >
                    <span>
                        {{ addon.name }}
                    </span>
                    <span class="ml-1 black--text">
                        ({{ addon.quantity }})
                    </span>
                </v-chip>
            </v-chip-group>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: "OverviewItem",

    props: {
        item: Object,
    },

    data: function() {},

    computed: {},

    methods: {},
};
</script>
