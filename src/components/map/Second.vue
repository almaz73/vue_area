<template>

   <v-layout  wrap>
    <v-flex xs12 sm5 class="my-3">
      <div class="subheading">Определено массивом</div>
      <v-date-picker
        locale="ru-ru"
        v-model="date1"
        color="green lighten-1"
        event-color="green lighten-1"
        :events="arrayEvents"
      ></v-date-picker>
    </v-flex>

    <v-flex xs12 sm5 class="my-3">
      <div class="subheading">Определено массивом</div>
      <v-date-picker
        locale="ru-ru"
        v-model="date2"
        :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
        :events="functionEvents"
        color="green lighten-1" header-color="primary"
      ></v-date-picker>
    </v-flex>

    <v-flex xs11 sm5>
      <v-menu
        ref="menu"
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
        :return-value.sync="date"
      >
        <v-text-field
          slot="activator"
          label="Picker in menu"
          v-model="date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker
          type="month"
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      arrayEvents: null,
      date1: null,
      date2: '2013-07-29',
      picker: null,
      picker2: null,
      date: null,
      menu: false,
      modal: false
    }
  },
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })
  },

  methods: {
    functionEvents(date) {
      const [, , day] = date.split('-')
      return parseInt(day, 10) % 3 === 0
    }
  }
}
</script>
