<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
export default{
  components: {Navbar, Home}
}
</script>

<template>
  
  <Navbar />

  <router-view></router-view>

</template>

<style scoped>
</style>
