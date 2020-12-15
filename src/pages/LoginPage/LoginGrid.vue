<template>
  <v-container>
      <EmployeeCard/>
  </v-container>
</template>

<script>
import EmployeeCard from "./EmployeeCard"

export default {
  name: 'LoginGrid',

  components: {
      EmployeeCard
  },

  data: () => ({
  }),
}
</script>
