<template>
  <v-card 
    tile
    width="256"
  >
    <v-avatar
      :color="getColorFromName"
      tile
      width="256"
      height="128"
    >
      <span class="outlined headline"> {{ getInitials }} </span>
    </v-avatar>
    <v-card-text class="title">
      {{ name }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'EmployeeCard',

  props: {
    name: String,
  },

  computed: {
    getInitials: function () {
      let initials = this.name.match(/\b\w/g) || [];
      return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    },
    getColorFromName: function() {
      let hash = 0;
      for (let i = 0; i < this.name.length; i++) {
          hash = this.name.charCodeAt(i) + ((hash << 5) - hash);
      }
      let c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
      return `#${"00000".substring(0, 6 - c.length) + c}`;
    }
  },

  data: function() {
    return {

    }
  },
}
</script>

<style scoped>
.outlined {
  color:white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>
