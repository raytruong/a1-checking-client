<template>
    <v-container>
        <v-data-iterator
            v-if="this.items.length > 0"
            :items="items"
            :items-per-page="ipp"
            :page.sync="page"
            hide-default-footer
            class="d-flex flex-column mh-100 overflow-hidden"
        >
            <template v-slot:header>
                <v-toolbar flat dark color="grey darken-3" class="shrink mb-1">
                    <v-btn
                        class="ml-2"
                        outlined
                        v-for="category in categories"
                        :key="category.name"
                        large
                    >
                        <div class="title">
                            {{ category.name }}
                        </div>
                    </v-btn>
                    <v-spacer />
                    <span
                        class="mr-4
                        white--text"
                    >
                        Page {{ page }} of {{ numberOfPages }}
                    </span>
                    <v-btn
                        large
                        dark
                        outlined
                        color="white darken-3"
                        class="mr-1"
                        @click="formerPage"
                    >
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-btn
                        large
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
                            :cols="12 / itemsPerRow"
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

    created() {
        window.addEventListener("resize", () => {
            this.calcRowsPerPage();
        });
    },

    data: function() {
        return {
            rpp: 4,
            page: 1,
            busy: false,
            categories: [
                {
                    name: "✋ Manicure",
                },
                {
                    name: "🦶 Pedicure",
                },
                {
                    name: "🧒 Kids",
                },
                {
                    name: "❔ Other",
                },
            ],
        };
    },
    computed: {
        numberOfPages() {
            return Math.ceil(this.items.length / this.ipp);
        },
        rowsPerPage() {
            return this.rpp;
        },
        itemsPerRow() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return 1;
                case "sm":
                    return 2;
                case "md":
                    return 3;
                case "lg":
                    return 4;
                case "xl":
                    return 6;
                default:
                    return 3;
            }
        },
        ipp() {
            return Math.ceil(this.rowsPerPage * this.itemsPerRow);
        },
    },
    methods: {
        nextPage() {
            if (this.page + 1 <= this.numberOfPages) this.page += 1;
        },
        formerPage() {
            if (this.page - 1 >= 1) this.page -= 1;
        },
        calcRowsPerPage() {
            const container = document.getElementById("container");
            if (container) {
                const containerHeight = parseInt(container.clientHeight, 0);
                const minItemHeight = 160;
                this.rpp = Math.floor(containerHeight / minItemHeight);
            } else {
                this.rpp = 4;
            }
        },
    },
};
</script>
