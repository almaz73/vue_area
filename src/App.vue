<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="goHome()">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goSecond()">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
           <router-view  />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017
          <i @click="toNight()" style="cursor:pointer" aria-hidden="true" class="icon grey--text text--darken-1 material-icons">invert_colors</i>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import './App.css'
import 'vuetify/dist/vuetify.min.css'
export default {
  name: 'App',
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goSecond() {
      this.$router.push('/second')
    },
    toNight() {
      // сохраняем в state в централльном хранилище
      console.log(' this.$store.state.night = ', this.$store.state.night)
      this.$store.dispatch('night', !this.$store.state.night)
    }
  }
}
</script>
