

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
              <div class = "desc">
                India's <span class = "grad">biggest</span> SciTech-Cultural Fest
              </div>
              <img src = "/img/logo/pravega.png" class = "pravega"/>
              <img src = "/img/logo/x.png" class = "X"/>
              
              <div class = "location">
               Indian Institute of Science, Bangalore &#x25cf Nov 2023
              </div>
          </div>
          <div class = "circle"></div>
          <div class = "hollow-circle"></div>
          <div class = "rectangle"></div>
          <div class = "hollow-rectangle"></div>
        </div>
        <div class = "about-pravega">
        </div>
       
  </div>
</template>

<style scoped>

    .landing{
      position: absolute;
      top: 10%;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      background-image: url("/img/home/landing.PNG");
      background-size: 130%;
      background-position: center;
      filter: brightness(0.3);
    }
    @keyframes move {
	to { transform: translateY(calc(4vw - 100%)) }
}
    .hollow-rectangle{
      position: absolute;
      z-index: 1;
      top: 15%;
      left: 33%;
      
      height: 15vw;
      width: 10vw;
      border: 0.1vw solid #555;
    }
    .rectangle{
      position: absolute;
      top: 15%;
      left: 10%;
      height: 2.5vw;
      width: 2.5vw;
      transform: translateY(calc(-1*(4vw - 100%)));
      background-color: #555;
      animation: move 2s ease-in-out infinite alternate;
}
    
    .hollow-circle{
      position: absolute;
      top: 15%;
      left: 90%;
      height: 2.5vw;
      width: 2.5vw;
      transform: translateY(calc(-1*(4vw - 100%)));
      border: 2px solid #555;
      border-radius: 50%;
      animation: move 2s ease-in-out infinite alternate;
    }
    
    .circle {
      position: absolute;
      top: 80%;
      left: 10%;
  height: 2.5vw;
  width: 2.5vw;
  background-color: #555;
  border-radius: 50%;
  transform: translateY(calc(-1*(4vw - 100%)));
  animation: move 2s ease-in-out infinite alternate;
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
    width: fit-content;
    position: relative;
    color: white;
    padding-top: 10vh;
    opacity: 1;
    height:5vw;
    z-index: 2;
    left: 50%;
    transform: translate(-50%,50%);
  }
  .logo img{
    opacity: 1;
    height: 3.75vw;
    width: auto;
    
  }
  @media screen and (max-width: 1024px) {
    .logo img{
      height: 10vw;
    }
    .location{
      font-size: 3vw;
    }
    .hollow-rectangle{
      height: 45vw;
      width: 35vw;
      top: 15%;
    }
    .hollow-circle{
      left:80%;
      height: 3vw;
      width: 3vw;
    }
    .circle{
      top: 50%;
      height: 3vw;
      width: 3vw;
    }
    .rectangle{
      height: 3vw;
      width: 3vw;
    }
    .landing-title{
      height: 80vw;
    }
    .landing{
      height: 73vw;
    }
  }
    
  

  .desc{

    width: fit-content;
    position: relative;
    z-index: 10;
    padding-bottom: 0.75vw;
  }
  .grad{
        background-image: -webkit-linear-gradient(0deg, #f72585, #a92fde 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .location{

    width: fit-content;
    position: relative;
    z-index: 10;
    padding-top: 0.75vw;
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
      right: 1.5vw;
    }
    100%{
      opacity: 100%;
      right: 0vw;
    }
  }

  @keyframes appearX{
    0%{
      opacity: 0%;
      right: 1.5vw;
    }
    50%{
      opacity: 0%;
      right: 1.5vw;

    }
    100%{
      opacity: 1;
      right: 0vw;
    }
  }


  .about-pravega{
    position:relative;
    background-color: #000000;
    height: 100vh;
  }
</style>