<template>
  <v-dialog
    v-model="loginDialog"
    @keydown="handleInput"
    @update:return-value="closeDialog"
    max-width="300"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-card 
        tile
        width="256"
        v-bind="attrs"
        v-on="on"
        class="ml-6 mt-6"
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
    <LoginDialog :name="name" :keysEntered="keysEntered" :loginMessageEnum="loginMessageEnum" @closeDialog="closeDialog"/>
  </v-dialog>
</template>

<script>
import LoginDialog from './PinCodeDialog'

export default {
  name: 'EmployeeCard',

  components: {
    LoginDialog
  },

  props: {
    name: String,
  },

  data: function() {
    return {
      loginDialog: false,
      pin: [],
      keysEntered: 0,
      loginMessageEnum: 0
    }
  },

  computed: {
    getInitials: function () {
      let initials = this.name.match(/\b\w/g) || [];
      return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    },
    getColorFromName: function() {
      let hash = 0;
      for (let i in this.name) {
          hash = this.name.charCodeAt(i) + ((hash << 5) - hash);
      }
      let c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
      return `#${"00000".substring(0, 6 - c.length) + c}`;
    }
  },

  methods: {
    handleInput(keydown) {
      if(
        keydown.key === 'Backspace' && 
        this.keysEntered > 0
      ) {
        this.pin.pop(keydown.key);
        this.keysEntered -= 1;
      }
      else if(
        /^\d+$/.test(keydown.key) && // is number
        this.keysEntered < 4
      ) {
        this.pin.push(keydown.key);
        this.keysEntered += 1;

        if(this.pin.length == 4) {
          // TODO: Attempt to login
          console.log("Login");
        }
      }
    },
    closeDialog() {
      this.loginDialog = false;
      this.pin = [];
      this.keysEntered = 0;
      this.loginMessageEnum = 0;
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
