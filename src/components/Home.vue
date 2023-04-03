

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
          <div class = "pravega-flex">
            <div class = "pravega-text">
              <div class = "pravega-title grad">
                About Pravega
              </div>
              <div class = "pravega-desc">
                Pravega is the <span class = "grad">undergraduate fest</span> of IISc, featuring exemplary events in Science, Technology, and Culture. This year marks the 10th edition of Pravega, giving us all the more motivation to make this edition the most memorable Pravega ever. Pravega sees exemplary participation in its quizzes, stunning cultural competitions, and stellar concerts. 
              </div>
            </div>

            <div class = "pravega-img">
              <img src = "/img/home/gulmohar.jpg">
            </div>
          </div>
        </div>


        <div class = "about-iisc">
          <div class = "iisc-flex">
            
            <div class = "iisc-img">
              <img src = "/img/home/gulmohar.jpg">
            </div>

            <div class = "iisc-text">
              <div class = "iisc-title grad">
                About IISc
              </div>
              <div class = "iisc-desc">
                The Indian Institute of Science is India's <span class = "grad">top ranked research institution</span> and a scientific force to be reckoned with on the global stage. With a focus on interdisciplinary research in the undergraduate program, supported by preeminent faculty from each major discipline and a flourishing environment of extracurricular activities - IISc provides a suitable setting for the holistic growth of bright young bright minds.
              </div>
            </div>

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
      background-image: url("/img/home/landing.PNG");
      background-size: 130%;
      background-position: center;
      filter: brightness(0.3);
      overflow: visible;
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
      overflow: visible;
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

  .pravega-flex{
    gap: 20px;
    display: flex;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .pravega-flex>div{
    flex: 50%;
  }
  .about-pravega{
    position:relative;
    background-color: #000000;
    height: 100vh;
    overflow: visible;
  }
  .pravega-title{
    font-size: 50px;
    width: fit-content;
  }
  .pravega-desc{
    font-size: 20px;
    color: white;
    text-align: justify;
  }
  .pravega-img img{
    width: 40vw;
    border-radius: 20px;
    padding: 10px;
  }

  .iisc-flex{
    gap: 20px;
    display: flex;
    padding-left: 50px;
    padding-right: 50px;
  }
  .iisc-flex>div{
    flex: 50%;
  }
  .about-iisc{
    background-color: #000000;
    height: 100vh;

  }
  .iisc-title{
    font-size: 50px;
    width: fit-content;
  }
  .iisc-desc{
    font-size: 20px;
    color: white;
    text-align: justify;
  }
  .iisc-img img{
    width: 40vw;
    border-radius: 20px;
    padding: 10px;
  }

@media screen and (max-width: 1024px){
  .logo img{
      height: 10vw;
    }
    .logo{
      top: 20vh;
    }
    .desc{
      font-size: 3vw;
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

  .landing{
    height: 100vh;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
  }


  .about-pravega{
    align-items: center;
    height: auto;
  }
  .pravega-title{
    font-size: 25px;
  }
  .pravega-desc{
    font-size: 15px;
  }
  .pravega-flex{
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    flex-direction: column;
  }
  .pravega-img{
    text-align: center;
  }

  .iisc-flex{
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    flex-direction: column-reverse;
  }
  .about-iisc{
    align-items: center;
    height: auto;
  }
  .iisc-title{
    font-size: 25px;
  }
  .iisc-desc{
    font-size: 15px;
  }
  .iisc-img{
    text-align: center;
  }
}
</style>