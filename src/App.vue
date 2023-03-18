<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
export default{
  components: {Navbar, Home},
  data(){
    return{
      appChoice: 0
    }
  }
}
</script>

<template>
  
  <Navbar :choice = "0" @navUpdate = "(choice) => {appChoice=choice}"/>

  <router-view></router-view>

</template>

<style scoped>
</style>
