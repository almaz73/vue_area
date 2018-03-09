<template>
  <div id="app" :class='night'>
    <LeftMenu />
    <router-view/>
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu/LeftMenu.vue'
import './App.css'
export default {
  name: 'App',
  components: {
    LeftMenu
  },
  computed: {
    night() {
      return this.$store.state.night ? 'night' : 'not-night'
    }
  }
}
</script>
