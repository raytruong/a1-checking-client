<template>
    <v-container>
        <v-data-iterator
            v-if="this.items.length > 0"
            :items="items"
            :items-per-page="itemsPerPage"
            :page.sync="page"
            hide-default-footer
            class="d-flex flex-column mh-100 overflow-hidden"
        >
            <template v-slot:header>
                <v-toolbar flat dark color="grey darken-3" class="shrink mb-1">
                    <v-spacer />
                    <span
                        class="mr-4
                        white--text"
                    >
                        Page {{ page }} of {{ numberOfPages }}
                    </span>
                    <v-btn
                        dark
                        outlined
                        color="white darken-3"
                        class="mr-1"
                        @click="formerPage"
                    >
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-btn
                        dark
                        outlined
                        color="white darken-3"
                        class="ml-1"
                        @click="nextPage"
                    >
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-toolbar>
            </template>
            <template v-slot:default="props">
                <v-container>
                    <v-row
                        align="stretch"
                        class="fill-height overflow-auto"
                        id="container"
                    >
                        <v-col
                            v-for="item in props.items"
                            :key="item.name"
                            :cols="12 / rowsPerPage"
                            class="py-2"
                        >
                            <ItemCard :name="item.name" />
                        </v-col>
                    </v-row>
                </v-container>
            </template>
        </v-data-iterator>
        <v-card
            color="transparent"
            tile
            flat
            height="80vh"
            v-if="this.items.length === 0"
        >
            <v-container fill-height fluid>
                <v-row class="title" align="center" justify="center">
                    No items to display
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
import ItemCard from "./ItemCard";
export default {
    name: "ItemSelector",

    components: {
        ItemCard,
    },

    props: {
        items: Array,
    },

    mounted() {
        this.numberOfPages = Math.ceil(this.items.length / this.itemsPerPage);
    },

    data: function() {
        return {
            page: 1,
            rowsPerPage: 4,
            itemsPerPage: 16,
            numberOfPages: 0,
        };
    },
    computed: {},
    methods: {
        nextPage() {
            if (this.page + 1 <= this.numberOfPages) this.page += 1;
        },
        formerPage() {
            if (this.page - 1 >= 1) this.page -= 1;
        },
    },
};
</script>
