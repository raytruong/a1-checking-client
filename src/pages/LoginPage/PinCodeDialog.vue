<template>
  <v-card>
    <v-card-body>
      <v-container>
        <v-card-text class="headline">
          {{ employeeName }}
        </v-card-text>
        <v-card-text class="subtitle-1">
          <font-awesome-icon icon="lock" size="small"/>
          Enter PIN code
        </v-card-text>
        <v-card-text :class="`${getMessage.color}--text subtitle-1`">
          <font-awesome-icon :icon="getMessage.icon" size="small"/>
          {{getMessage.message}}
        </v-card-text>
        <v-row
          align="center"
          justify="center"
        >
          <v-avatar
            v-for="index in 4" 
            :key="index"
            :color="keysEntered === index-1 ? 'grey darken-1' : 'grey lighten-2'"
            class="black--text ml-2"
            width="36"
            tile
          >
            <h1 v-if="keysEntered >= index">*</h1>
          </v-avatar>
        </v-row>
      </v-container>
    </v-card-body>
    <v-btn
      color="grey"
      class="white--text"
      flat tile block
      @click="handleCancel"
    >
    Cancel
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'PinCodeDialog',

  props: {
    employeeName: String,
    keysEntered: Number,
    loginMessageEnum: Number
  },

  data: function() {
    return {
      error: {
        icon: 'exclamation',
        color: 'red',
        message: 'Incorrect PIN code, try again.'
      },
      success: {
        icon: 'check',
        color: 'green',
        message: 'Successfully logged in.'
      },
    }
  },

  computed: {
    getMessage: function() {
      switch(this.loginMessageEnum) {
        case 1: return this.success;
        case 2: return this.error;
        default: return {icon:"", color:"", message:""};
      }
    }
  },

  methods: {
    handleCancel: function() {
      this.$emit('cancelButtonClicked')
    }
  }

}
</script>