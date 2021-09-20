<template>
    <v-card tile outlined class="ma-2">
        <v-card-title>
            <span>{{ item.name }}</span>
            <v-spacer />
            <span class="green--text">${{ item.total }}</span>
        </v-card-title>
        <v-card-subtitle>
            <div class="black--text">
                {{ item.category }}
            </div>
        </v-card-subtitle>
        <v-card-text>
            <v-chip-group
                v-if="item.addons && item.addons.length > 0"
                column
                class="white--text"
            >
                <v-chip
                    v-for="(addon, index) in item.addons"
                    :key="`${addon.tag}-${index}`"
                    color="blue"
                    class="noHover white--text"
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
            <span v-else class="d-flex justify-center">
                No addons selected
            </span>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: "OverviewItem",

    props: {
        item: {
            type: Object,
            default: () => {},
        },
    },

    data: function() {
        return {};
    },

    computed: {},

    methods: {},
};
</script>

<style>
.noHover {
    pointer-events: none;
}
</style>
