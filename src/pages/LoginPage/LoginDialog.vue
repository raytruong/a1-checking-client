<template>
  <v-card class="">
    <v-card-body>
      <v-container>
        <v-card-text class="headline">
          {{ name }}
        </v-card-text>
        <v-card-text class="subtitle-1">
          <font-awesome-icon icon="lock" size="small"/>
          Enter PIN code
        </v-card-text>
        <v-card-text v-if="error" class="red--text subtitle-1">
          Incorrect PIN code, try again.
        </v-card-text>
        <v-row
          align="center"
          justify="center"
        >
          <v-avatar
            width="36"
            tile
            v-for="index in 4" 
            :key="index"
            :color="keysEntered === index-1 ? 'grey darken-1' : 'grey lighten-2'"
            class="black--text ml-2"
          >
          <h1 v-if="keysEntered >= index">*</h1>
          </v-avatar>
        </v-row>
      </v-container>
    </v-card-body>
    <v-btn
      color="grey"
      class="white--text"
      flat
      tile
      block
      v-on:click="handleCancel"
    >
    Close
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'LoginDialog',

  props: {
    name: String,
    keysEntered: Number,
    error: Boolean
  },

  data: function() {
    return {
      progress: this.keysEntered
    }
  },

  methods: {
    handleCancel: function() {
      this.$emit('closeDialog') // (eventname, payload)
    }
  }

}
</script>