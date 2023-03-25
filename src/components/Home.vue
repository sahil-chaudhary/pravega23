

<script>
import Timer from './Timer.vue'
export default{
  components:{Timer}
}
</script>

<template>
  <div :id = "`home`">
        <div class = "logo">
          <img src="/img/logo/pravega.png" class = "pravega"/>
          <img src="/img/logo/x.png" class = "X" />
        </div>        

        <div class = "timer">
          <Timer />
        </div>
  </div>
</template>

<style scoped>
  #home{
    height: 90vh;
    width: 100vw;
    background-color: #3a0ca3;
  }

  .logo{
    display: flex;
    gap: 10px;
    padding-left: 20px;
    height: 100px;
    width: auto;
  }
  .logo img{
    height: 100px;
    width: auto;
  }

  .timer{
    padding-left: 20px;
  }
  .pravega{
    position: relative;
    animation: appearPravega 0.8s ease-out;
  }
  .X{
    position: relatives;
    animation: appearX 2s ease-out;
  }
 @keyframes appearPravega{
    0%{
      opacity: 0%;
      right: 30px;
    }
    100%{
      opacity: 100%;
      right: 0px;
    }
  }

  @keyframes appearX{
    0%{
      opacity: 0%;
      right: 30px;
    }
    50%{
      opacity: 0%;

    }
    100%{
      opacity: 1;
      right: 0px;
    }
  }
</style>