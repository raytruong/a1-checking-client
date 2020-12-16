<template>
  <v-card>
    <v-card-body>
      <v-container>
        <v-card-text class="headline">
          {{ name }}
        </v-card-text>
        <v-card-text class="subtitle-1">
          <font-awesome-icon icon="lock" size="small"/>
          Enter PIN code
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
      color="red lighten-1"
      class="white--text"
      flat
      tile
      v-on:click="handleCancel"
      block
    >
    Cancel
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'LoginModal',

  props: {
    name: String,
    keysEntered: Number
  },

  data: function() {
    return {
      progress: this.keysEntered
    }
  },

  computed: {
    updateKeysEntered: function() {
      console.log(this.progress);
      return this.progress;
    }
  },

  methods: {
    handleCancel: function() {
      this.$emit('closeDialog') // (eventname, payload)
    }
  }

}
</script>
