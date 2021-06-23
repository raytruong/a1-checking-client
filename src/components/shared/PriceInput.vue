<template>
    <v-text-field
        dense
        outlined
        prefix="$"
        hide-details="auto"
        v-model="text"
        clearable
        @blur="unfocus"
        @click:clear="clearableClicked"
        @focus="clearableClicked"
        :readonly="isEdit ? false : true"
    >
    </v-text-field>
</template>

<script>
export default {
    name: "PriceInput",

    props: {
        defaultPrice: Object,
    },

    watch: {
        "$store.state.checkout.activeItem": function() {
            // Load pricing active item
            if (
                this.$store.state.checkout.activeItem &&
                this.$store.state.checkout.itemDialog === true
            ) {
                this.text = this.defaultPrice;
            }
        },
    },

    data: function() {
        return {
            text: this.defaultPrice,
            isEdit: false,
        };
    },

    computed: {},

    methods: {
        unfocus() {
            this.isEdit = false;
            const priceRegex = /^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/;
            if (!this.text || !priceRegex.test(this.text)) {
                this.text = this.defaultPrice;
            }
            this.$emit("priceChange", this.text);
        },
        clearableClicked() {
            this.isEdit = true;
            this.text = "";
        },
    },
};
</script>

<style>
/* Price input size*/
.v-text-field .v-input__control .v-input__slot {
    min-height: auto !important;
    display: flex !important;
    align-items: center !important;
}

/* Price input clearable vertical alignment */
.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined
    .v-input__append-inner {
    margin-top: 4px;
}

/* List item padding */
.v-list-item__content {
    padding: 0px;
}

/* List item text vertical alignment */
.v-list-item .v-list-item__title {
    line-height: 1.9;
}

.theme--light.v-icon {
    color: #e57373;
}

.theme--light.v-icon.v-icon.v-icon--disable {
    color: #e57373;
}
</style>
