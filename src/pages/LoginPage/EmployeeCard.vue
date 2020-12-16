<template>
  <v-dialog
    v-model="loginDialog"
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
    <LoginModal :name="name" @cancelModal="cancelModal"/>
  </v-dialog>
</template>

<script>
import LoginModal from './LoginModal'

export default {
  name: 'EmployeeCard',

  components: {
    LoginModal
  },

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
      for (let i in this.name) {
          hash = this.name.charCodeAt(i) + ((hash << 5) - hash);
      }
      let c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
      return `#${"00000".substring(0, 6 - c.length) + c}`;
    }
  },

  methods: {
    cancelModal(payload) {
      this.loginDialog = payload;
    }
  },

  data: function() {
    return {
      loginDialog: false
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
