<template>
    <v-card tile outlined class="mt-2">
        <v-card-title>
            {{ name }}
            <v-spacer />
            ${{ price }}
        </v-card-title>
        <v-container class="justify-center">
            <v-btn icon>
                <font-awesome-icon icon="plus-square" size="small" />
            </v-btn>
            <v-btn icon>
                <font-awesome-icon icon="minus-square" size="small" />
            </v-btn>
        </v-container>
        <v-card-actions>
            <v-btn color="orange lighten-2" text>
                <font-awesome-icon class="mr-1" icon="pen" size="small" />
                Edit
            </v-btn>
            <v-spacer />
            <v-btn color="red lighten-2" text>
                <font-awesome-icon class="mr-1" icon="trash" size="small" />
                Remove
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "ItemCard",

    props: {
        name: String,
        price: Number,
        quantity: Number,
    },

    data: function() {
        return {
            //
        };
    },

    computed: {},

    methods: {},
};
</script>
