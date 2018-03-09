<template>
  <div class="area night">
    <div 
      @click='()=>this.sizeMode = !this.sizeMode' 
      class="hamburger"
    />
    <LeftMenuButton :sizeMode="sizeMode"/>
    <LeftMenuButton :sizeMode="sizeMode"/>
    <LeftMenuButton :sizeMode="sizeMode"/>
    <div 
      @click='toNight' 
      class="light"
    />
  </div>
</template>

<script>
import LeftMenuButton from './LeftMenuButton'
export default {
  name: 'LeftMenu',
  data() {
    return {
      sizeMode: true,
      lightMode: false
    }
  },
  components: {
    LeftMenuButton
  },
  methods: {
    toNight() {
      this.$store.dispatch('night', !this.$store.state.night)
    }
  }
}
</script>

<style >
.area {
  background: #454545;
  display: flex;
  flex-direction: column;
}
.hamburger {
  min-width: 45px;
  height: 50px;
  cursor: pointer;
  background-image: url(https://png.icons8.com/ios-glyphs/32/000000/menu.png);
  background-repeat: no-repeat;
  background-position: center;
}

.light {
  min-width: 45px;
  height: 50px;
  cursor: pointer;
  background-image: url(https://png.icons8.com/ios/32/000000/night-landscape.png);
  /* background-image: url(https://png.icons8.com/ios/32/000000/night-landscape-filled.png); */
  background-repeat: no-repeat;
  background-position: center;
}
</style>
