<template>
    <v-card tile width="256" class="ml-6 mt-6" @click.stop="handleClick">
        <v-avatar :color="getColorFromName" tile width="256" height="128">
            <span class="outlined headline"> {{ getInitials }} </span>
        </v-avatar>
        <v-card-text class="title">
            {{ employeeName }}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "EmployeeCard",

    props: {
        employeeName: {
            type: String,
            default: "",
        },
        employeeId: {
            type: String,
            default: "",
        },
    },

    data: function() {
        return {
            //
        };
    },

    computed: {
        getInitials: function() {
            const initials = this.employeeName.match(/\b\w/g) || [];
            return (
                (initials.shift() || "") + (initials.pop() || "")
            ).toUpperCase();
        },
        getColorFromName: function() {
            let hash = 0;
            for (const i in this.employeeName) {
                hash = this.employeeName.charCodeAt(i) + ((hash << 5) - hash);
            }
            const c = (hash & 0x00ffffff).toString(16).toUpperCase();
            return `#${"00000".substring(0, 6 - c.length) + c}`;
        },
    },

    methods: {
        handleClick: function() {
            this.$emit("openDialog", this.employeeName, this.employeeId); // (eventname, payload)
        },
    },
};
</script>

<style scoped>
.outlined {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>
