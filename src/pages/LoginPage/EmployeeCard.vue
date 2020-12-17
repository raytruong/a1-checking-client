<template>
    <v-card tile width="256" @click.stop="handleClick" class="ml-6 mt-6">
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
    name: 'EmployeeCard',

    props: {
        employeeName: String
    },

    data: function() {
        return {
            //
        }
    },

    computed: {
        getInitials: function() {
            let initials = this.employeeName.match(/\b\w/g) || []
            return (
                (initials.shift() || '') + (initials.pop() || '')
            ).toUpperCase()
        },
        getColorFromName: function() {
            let hash = 0
            for (let i in this.employeeName) {
                hash = this.employeeName.charCodeAt(i) + ((hash << 5) - hash)
            }
            let c = (hash & 0x00ffffff).toString(16).toUpperCase()
            return `#${'00000'.substring(0, 6 - c.length) + c}`
        }
    },

    methods: {
        handleClick: function() {
            this.$emit('openDialog', this.employeeName) // (eventname, payload)
        }
    }
}
</script>

<style scoped>
.outlined {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>
