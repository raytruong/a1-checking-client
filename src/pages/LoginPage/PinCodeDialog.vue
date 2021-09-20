<template>
    <v-card>
        <v-container>
            <v-card-text class="headline">
                {{ employeeName }}
            </v-card-text>
            <v-card-text class="subtitle-1">
                <font-awesome-icon icon="lock" />
                Enter PIN code
            </v-card-text>
            <v-alert
                v-if="getAlert"
                text
                :type="getAlert.type"
                :class="`${getAlert.color}--text subtitle-1`"
            >
                {{ getAlert.message }}
            </v-alert>
            <v-row class="mt-2" align="center" justify="center">
                <v-avatar
                    v-for="index in 4"
                    :key="index"
                    :color="
                        keysEntered === index - 1
                            ? 'grey darken-1'
                            : 'grey lighten-2'
                    "
                    class="black--text ml-2"
                    width="36"
                    tile
                >
                    <h1 v-if="keysEntered >= index">*</h1>
                </v-avatar>
            </v-row>
        </v-container>
        <v-text-field dense class="hide" autofocus></v-text-field>
        <!-- <v-btn
            color="grey"
            class="white--text"
            tile
            block
            @click="handleCancel"
        >
            Cancel
        </v-btn> -->
    </v-card>
</template>

<script>
export default {
    name: "PinCodeDialog",

    props: {
        employeeName: {
            type: String,
            default: "",
        },
        keysEntered: {
            type: Number,
            default: 0,
        },
        loginAlertEnum: {
            type: Number,
            default: 0,
        },
    },

    data: function() {
        return {
            error: {
                type: "error",
                message: "Incorrect PIN, try again.",
            },
            success: {
                type: "success",
                message: "Successfully logged in.",
            },
        };
    },

    computed: {
        getAlert: function() {
            switch (this.loginAlertEnum) {
                case 1:
                    return this.success;
                case 2:
                    return this.error;
                default:
                    return null;
            }
        },
    },

    methods: {
        handleCancel: function() {
            this.$emit("cancelButtonClicked");
        },
    },
};
</script>
<style scoped>
.hide {
    opacity: 0;
    pointer-events: none;
}
</style>
