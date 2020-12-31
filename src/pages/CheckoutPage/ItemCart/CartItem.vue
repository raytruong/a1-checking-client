<template>
    <v-card tile outlined class="mt-2">
        <v-card-title>
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <span
                        v-bind="attrs"
                        v-on="on"
                        class="d-inline-block text-truncate"
                        style="max-width: 75%;"
                    >
                        {{ getName }}
                    </span>
                </template>
                <span>{{ getName }}</span>
            </v-tooltip>
            <v-spacer />
            <span class="green--text">${{ price }}</span>
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
    name: "CartItem",

    props: {
        name: String,
        price: Number,
        quantity: Number,
    },

    data: function() {
        return {};
    },

    computed: {
        getName: function() {
            let name = this.name;
            for (let i = 0; i < Math.random() * 50; i++) {
                name += i;
            }
            return name;
        },
    },

    methods: {},
};
</script>

<style scoped>
.truncate {
    white-space: nowrap;
    word-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
