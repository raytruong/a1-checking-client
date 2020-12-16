<template>
  <v-container>
    <v-row>
      <EmployeeCard 
        v-for="employee in employees"
        :key="employee"
        :name="employee"
        class="ml-6 mt-6"
      >
      </EmployeeCard>
    </v-row>
  </v-container>
</template>

<script>
import EmployeeCard from './EmployeeCard'

let names = []

for(let i = 0; i < 7; i++) { 
  let length = 20
  let random = Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
  names.push(random);
}

export default {
  name: 'LoginGrid',

  components: {
      EmployeeCard
  },

  data: function() {
    return {
      // employees: ['Raymond Truong', 'Andy Plank', 'Jon Huber', 'Eric Cummings']
      employees: names
    }
  },
}
</script>
