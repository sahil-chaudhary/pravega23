

<script>
import Timer from './Timer.vue'
export default{
  components:{Timer}
}
</script>

<template>
  <div :id = "`home`">

        <div class = "landing">
        </div>

        <div class = "landing-title">
          <div class = "logo">
              <img src = "/img/logo/pravega.png" class = "pravega"/>
              <img src = "/img/logo/x.png" class = "X"/>
              
          </div>
          <div class = "timer">
            <Timer />
          </div>

        </div>
  </div>
</template>

<style scoped>
    .landing{
      position: absolute;
      top: 0;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      background-image: url("/img/home/landing.PNG");
      background-size: 130%;
      background-position: center;
      filter: brightness(0.3);
    }

    .landing-title{
      height: 90vh;
      background-color: rgba(0,0,0,0);
    }
  #home{
    height: 90vh;
    width: 100vw;
    background-color: #3a0ca3;
  }

  .logo{
    padding-top: 10vh;
    justify-content: center;
    opacity: 1;
    display: flex;
    gap: 10px;
    height: 100px;
    width: auto;
  }
  .logo img{
    opacity: 1;
    height: 100px;
    width: auto;
  }

  .timer{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
  }
  .pravega{
    position: relative;
    animation: appearPravega 0.8s ease-out;
  }
  .X{
    position: relative;
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
      right: 30px;

    }
    100%{
      opacity: 1;
      right: 0px;
    }
  }
</style>