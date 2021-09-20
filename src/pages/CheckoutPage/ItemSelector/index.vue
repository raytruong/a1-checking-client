<template>
    <v-container>
        <v-data-iterator
            v-if="items.length > 0"
            :items="getItems"
            :items-per-page="ipp"
            :page.sync="page"
            hide-default-footer
            class="d-flex flex-column mh-100 overflow-hidden"
        >
            <template v-slot:header>
                <v-toolbar flat dark color="grey darken-3" class="shrink mb-1">
                    <v-item-group v-model="selected_category" mandatory>
                        <v-item
                            v-for="category in categories"
                            v-slot="{ active, toggle }"
                            :key="category.name"
                            :value="category"
                        >
                            <v-btn
                                :color="active ? 'white' : 'grey darken-1'"
                                outlined
                                class="ml-2"
                                large
                                @click="toggle"
                            >
                                <div class="white--text title">
                                    {{ category }}
                                </div>
                            </v-btn>
                        </v-item>
                    </v-item-group>
                    <v-spacer />
                    <span
                        class="mr-4
                        white--text"
                    >
                        {{ page }} / {{ numberOfPages }}
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
                <v-container height="65vh" color="transparent" tile flat>
                    <v-container>
                        <v-row
                            id="item-view"
                            align="stretch"
                            class="fill-height overflow-auto"
                        >
                            <v-col
                                v-for="item in props.items"
                                :key="item.name"
                                :cols="12 / ipr"
                                class="py-2"
                            >
                                <ItemCard :item="item" @selectItem="newItem" />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-container>
            </template>
        </v-data-iterator>
        <v-card
            v-if="items.length === 0"
            color="transparent"
            tile
            flat
            height="65vh"
        >
            <v-container fill-height fluid>
                <v-row class="title" align="center" justify="center">
                    <div class="black--text">
                        No items to display
                    </div>
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
        items: {
            type: Array,
            default: () => {},
        },
    },

    data: function() {
        return {
            rpp: 3,
            ipr: 6,
            ipp: 18,
            page: 1,
            selected_category: "",
            categories: [...new Set(this.items.map(item => item.category))],
        };
    },
    computed: {
        getItems() {
            return this.items.filter(
                item => item.category === this.selected_category,
            );
        },
        numberOfPages() {
            return Math.ceil(
                this.items.reduce((acc, item) => {
                    return item.category === this.selected_category
                        ? (acc += 1)
                        : acc;
                }, 0) / this.ipp,
            );
        },
    },

    created() {},
    methods: {
        nextPage() {
            if (this.page + 1 <= this.numberOfPages) this.page += 1;
        },
        formerPage() {
            if (this.page - 1 >= 1) this.page -= 1;
        },
        calcRowsPerPage() {
            const container = document.getElementById("item-view");
            if (container) {
                const containerHeight = parseInt(container.clientHeight, 0);
                const minItemHeight = 160;
                this.rpp = Math.floor(containerHeight / minItemHeight);
            } else {
                this.rpp = 4;
            }
        },
        newItem(tag) {
            this.$store.commit("checkout/newItem", tag);
        },
    },
};
</script>
