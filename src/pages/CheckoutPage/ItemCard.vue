<template>
    <v-card tile outlined class="mt-2">
        <v-card-title>
            <div>
                {{ name }}
            </div>
            <v-spacer />
            <div class="green--text">${{ price }}</div>
        </v-card-title>
        <v-container>
            <v-row justify="center">
                <v-btn outlined tile small>
                    <font-awesome-icon icon="plus-square" size="large" />
                </v-btn>
                <v-avatar tile color="grey darken-3" width="28" max-height="28">
                    <span class="white--text">{{ quantity }}</span>
                </v-avatar>
                <v-btn outlined tile small>
                    <font-awesome-icon icon="minus-square" size="small" />
                </v-btn>
            </v-row>
        </v-container>
        <v-card-actions>
            <v-container>
                <v-row justify="center">
                    <v-btn color="orange" tile outlined small>
                        <font-awesome-icon
                            class="mr-1"
                            icon="pen"
                            size="small"
                        />
                        Edit
                    </v-btn>
                    <v-btn
                        class="ml-3"
                        color="red lighten-2"
                        tile
                        outlined
                        small
                    >
                        <font-awesome-icon
                            class="mr-1"
                            icon="trash"
                            size="small"
                        />
                        Delete
                    </v-btn>
                </v-row>
            </v-container>
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
        return {};
    },

    computed: {},

    methods: {},
};
</script>
