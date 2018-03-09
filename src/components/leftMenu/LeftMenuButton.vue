<template>
  <div class='button'>
    <img src="https://png.icons8.com/wired/30/000000/google-maps.png">
    <span v-if='sizeMode'>Какой то текст</span> 
    
  </div>
</template>
<script>
export default {
  name: 'LeftMenuButton',
  props: {
    sizeMode: {
      typy: Boolean
    }
  }
}
</script>
<style>
.button {
  margin: 5px;
  padding: 3px;
  border-radius: 10px;
  cursor: pointer;
  background: #999;
  color: black;
  max-width: 85px;
}
.button:hover {
  background: #bbb;
}
</style>
