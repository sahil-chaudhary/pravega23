

<script>
import Timer from './Timer.vue'
export default{
  components:{Timer}
}
</script>

<template>
  <div :id = "`home`">
    <div class = "flex-cont">
      <div class = "left">
        <img src="/src/assets/pravega.png" :class="'pravega'"/>
        <div class = "timer">
          <Timer />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #home{
    height: 90vh;
    width: 100vw;
    background-color: #3a0ca3;
  }

  .left-abs{

  }
  .pravega{
    
    
    width: 600px;
  }
</style>