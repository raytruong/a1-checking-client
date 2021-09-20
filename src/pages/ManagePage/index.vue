<template>
    <v-container>
        <v-btn @click="getAllSales"> Get Sales </v-btn>
        {{ sales }}
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "ManagePage",

    components: {},

    data: function() {
        return {};
    },

    computed: {
        ...mapGetters("manage", ["sales"]),
    },

    created() {
        this.$store.dispatch("manage/getAllSales");
    },

    methods: {
        ...mapActions("manage", ["getAllSales"]),
    },
};
</script>
